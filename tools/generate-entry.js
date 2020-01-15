const fs = require("fs-extra");
const path = require("path");

(async function() {
  const baseDir = path.resolve(__dirname, "../src/svg");
  const dirs = await fs.readdir(baseDir);
  const exportsArray = [];

  // parse icon files to exportsArray
  for (let dir of dirs) {
    const p = path.resolve(baseDir, dir);
    const stat = await fs.stat(p);
    if (stat.isDirectory()) {
      const files = await fs.readdir(p);
      files.forEach(fileName => {
        if (fileName === "index.tsx") {
          return;
        }
        const name = fileName.split(".tsx")[0];
        exportsArray.push({
          name,
          path: `./svg/${path.join(dir, name)}`,
        });
      });
    }
  }

  await fs.outputFile(
    path.resolve(__dirname, "../src/index.ts"),
    `/* !!!! This file is generated automatically, please don't modify it!!!! */\n${exportsArray
      .map(item => {
        return `export { default as ${item.name} } from "${item.path}";`;
      })
      .join("\n")}`
  );
})();
