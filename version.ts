import { inc, valid } from "semver";

const path = "./package.json";
const RELEASE_TYPES = new Set(["major", "minor", "patch"]);

const json = await Bun.file(path).json();
const current = json.version;

if (!valid(current)) throw new Error(`Invalid current version: ${current}`);

const target = Bun.argv[2];
if (!target) throw new Error("Missing version argument");

const desired = RELEASE_TYPES.has(target as any)
  ? inc(current, target as "major" | "minor" | "patch")
  : valid(target) || null;

if (!desired) {
  throw new Error(
    `Invalid target "${target}". Use semver version or major/minor/patch`,
  );
}

await Bun.write(
  path,
  JSON.stringify({ ...json, version: desired }, null, 2) + "\n",
);

console.log(`Updated ${path} from ${current} to ${desired}`);
