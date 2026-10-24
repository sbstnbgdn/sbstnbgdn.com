import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

import { __unstable__loadDesignSystem } from "@tailwindcss/node";

type Replacement = { from: string; to: string };

const root = process.cwd();
const cssPath = path.join(root, "src/styles/global.css");
const filePattern = /\.(astro|css|ts)$/;
const stringPattern = /(["'`])(?:\\.|(?!\1)[\s\S])*?\1/g;
const applyPattern = /@apply\s+([^;]+);/g;
const classPattern = /^(?:!?[@a-z0-9:_/.%#()[\],-]+|\[[^\]]+\])$/i;

function listFiles(directory: string, files: string[] = []) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      listFiles(fullPath, files);
    } else if (filePattern.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function replaceTokens(
  value: string,
  canonicalise: (token: string) => string,
): { value: string; replacements: Replacement[] } {
  let result = value;
  const replacements: Replacement[] = [];
  const seen = new Set<string>();

  for (const token of value.split(/\s+/)) {
    if (!token || seen.has(token) || !classPattern.test(token)) {
      continue;
    }

    seen.add(token);
    const canonical = canonicalise(token);

    if (!canonical || canonical === token) {
      continue;
    }

    result = result.split(token).join(canonical);
    replacements.push({ from: token, to: canonical });
  }

  return { value: result, replacements };
}

const designSystem = await __unstable__loadDesignSystem(
  readFileSync(cssPath, "utf8"),
  { base: path.dirname(cssPath) },
);

const canonicalise = (token: string) =>
  designSystem.canonicalizeCandidates([token])[0] ?? token;

for (const filePath of listFiles(path.join(root, "src"))) {
  const original = readFileSync(filePath, "utf8");
  const replacements: Replacement[] = [];

  const content = original
    .replace(stringPattern, (literal) => {
      const quote = literal[0];
      const result = replaceTokens(literal.slice(1, -1), canonicalise);
      replacements.push(...result.replacements);
      return `${quote}${result.value}${quote}`;
    })
    .replace(applyPattern, (_, value: string) => {
      const result = replaceTokens(value, canonicalise);
      replacements.push(...result.replacements);
      return `@apply ${result.value};`;
    });

  if (replacements.length === 0 || content === original) {
    continue;
  }

  writeFileSync(filePath, content);

  console.log(path.relative(root, filePath));
  for (const { from, to } of replacements) {
    console.log(`  ${from} -> ${to}`);
  }
}
