import fs from "node:fs";
import path from "node:path";

import { __unstable__loadDesignSystem } from "@tailwindcss/node";

const ROOT = process.cwd();
const SOURCE_ROOT = path.join(ROOT, "src");
const GLOBALS_CSS_PATH = path.join(ROOT, "src/styles/global.css");
const FILE_PATTERN = /\.(astro|css|ts)$/;
const STRING_LITERAL_PATTERN = /(["'`])(?:\\.|(?!\1)[\s\S])*?\1/g;
const APPLY_PATTERN = /@apply\s+([^;]+);/g;
const LIKELY_CLASS_TOKEN_PATTERN =
  /^(?:!?[@a-z0-9:_/.%#()[\],-]+|\[[^\]]+\])$/i;

type FileChange = {
  filePath: string;
  replacements: Array<{ from: string; to: string }>;
};

function walkFiles(directoryPath: string, files: string[] = []) {
  for (const entry of fs.readdirSync(directoryPath, { withFileTypes: true })) {
    if (
      entry.name === ".git" ||
      entry.name === ".astro" ||
      entry.name === "dist" ||
      entry.name === "node_modules"
    ) {
      continue;
    }

    const fullPath = path.join(directoryPath, entry.name);
    if (entry.isDirectory()) {
      walkFiles(fullPath, files);
      continue;
    }

    if (FILE_PATTERN.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function replaceTokens(
  value: string,
  canonicalise: (token: string) => string,
): { value: string; replacements: Array<{ from: string; to: string }> } {
  let nextValue = value;
  const replacements: Array<{ from: string; to: string }> = [];
  const seenTokens = new Set<string>();

  for (const token of value.split(/\s+/)) {
    if (
      !token ||
      seenTokens.has(token) ||
      !LIKELY_CLASS_TOKEN_PATTERN.test(token)
    ) {
      continue;
    }

    seenTokens.add(token);
    const canonicalToken = canonicalise(token);

    if (!canonicalToken || canonicalToken === token) {
      continue;
    }

    nextValue = nextValue.split(token).join(canonicalToken);
    replacements.push({ from: token, to: canonicalToken });
  }

  return { value: nextValue, replacements };
}

async function main() {
  const globalsCss = fs.readFileSync(GLOBALS_CSS_PATH, "utf8");
  const designSystem = await __unstable__loadDesignSystem(globalsCss, {
    base: path.dirname(GLOBALS_CSS_PATH),
  });

  const canonicalise = (token: string) =>
    designSystem.canonicalizeCandidates([token])[0] ?? token;
  const fileChanges: FileChange[] = [];

  for (const filePath of walkFiles(SOURCE_ROOT)) {
    const originalContent = fs.readFileSync(filePath, "utf8");
    let nextContent = originalContent;
    const replacements: Array<{ from: string; to: string }> = [];

    nextContent = nextContent.replace(STRING_LITERAL_PATTERN, (literal) => {
      const quote = literal[0];
      const rawValue = literal.slice(1, -1);
      const result = replaceTokens(rawValue, canonicalise);

      if (result.replacements.length === 0) {
        return literal;
      }

      replacements.push(...result.replacements);
      return `${quote}${result.value}${quote}`;
    });

    nextContent = nextContent.replace(APPLY_PATTERN, (_, rawValue: string) => {
      const result = replaceTokens(rawValue, canonicalise);

      if (result.replacements.length === 0) {
        return `@apply ${rawValue};`;
      }

      replacements.push(...result.replacements);
      return `@apply ${result.value};`;
    });

    if (replacements.length === 0 || nextContent === originalContent) {
      continue;
    }

    fs.writeFileSync(filePath, nextContent);

    fileChanges.push({
      filePath: path.relative(ROOT, filePath),
      replacements,
    });
  }

  if (fileChanges.length === 0) {
    return;
  }

  for (const change of fileChanges) {
    console.log(change.filePath);
    for (const replacement of change.replacements) {
      console.log(`  ${replacement.from} -> ${replacement.to}`);
    }
  }
}

await main();
