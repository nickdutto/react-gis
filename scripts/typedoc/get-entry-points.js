const fs = require("fs");
const path = require("path");

const SOURCE_DIRECTORIES = ["./packages/openlayers/src"];
const FILE_PATTERNS = [".ts", ".tsx"];
const EXACT_EXCLUSIONS = ["index.ts", "index.tsx"];
const WILDCARD_EXCLUSION = ".d.ts";

function findEntryPoints(dir) {
  let entryPoints = [];

  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(dir, item.name);

      if (item.isDirectory()) {
        entryPoints = entryPoints.concat(findEntryPoints(fullPath));
      } else if (item.isFile()) {
        const isIncluded = FILE_PATTERNS.some((ext) => item.name.endsWith(ext));
        if (!isIncluded) continue;

        const isExactExcluded = EXACT_EXCLUSIONS.includes(item.name);
        if (isExactExcluded) continue;

        const isWildcardExcluded = item.name.endsWith(WILDCARD_EXCLUSION);
        if (isWildcardExcluded) continue;

        entryPoints.push(fullPath);
      }
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      const normalizedDir = path.normalize(dir).replace(/\\/g, "/");
      console.error(`Error: Source directory not found: ${normalizedDir}`);
    } else {
      console.error(`Error processing directory ${dir}:`, error);
    }
  }

  return entryPoints;
}

const allEntryPoints = SOURCE_DIRECTORIES.flatMap(findEntryPoints);

const finalEntryPoints = allEntryPoints.map((p) => {
  let normalizedPath = p.replace(/\\/g, "/");

  if (!normalizedPath.startsWith("./")) {
    normalizedPath = "./" + normalizedPath;
  }

  if (normalizedPath.startsWith("././")) {
    normalizedPath = normalizedPath.substring(2);
  }

  return normalizedPath;
});

console.log(JSON.stringify(finalEntryPoints, null, 0));
