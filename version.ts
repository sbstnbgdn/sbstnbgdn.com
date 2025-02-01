import { inc, valid as isValidVersion } from "semver";

const path = "./package.json";
const variants = ["major", "minor", "patch"] as const;

type ReleaseType = (typeof variants)[number];

const isValidTarget = (subject: string): subject is ReleaseType =>
  variants.includes(subject as ReleaseType);

const target = Bun.argv.pop()!;
const json = await Bun.file(path).json();
const { version: current } = json;

if (!isValidVersion(current)) {
  throw new Error(`Invalid current version ${current}`);
}

const desired = isValidVersion(target)
  ? target
  : isValidTarget(target)
    ? inc(current, target)
    : null;

if (!desired) {
  throw new Error("Invalid target version");
}

console.debug(`${current} → ${desired}`);
await Bun.write(path, JSON.stringify({ ...json, version: desired }, null, 2));
