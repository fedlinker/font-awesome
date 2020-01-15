const svgr = require('@svgr/core');
const fs = require('fs-extra');
const path = require('path');
const ora = require('ora');

/**
 * 将单词首字母大写
 * @param {*} letter
 */
const firstLetterToUpperCase = letter => {
  const str = letter.toLowerCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * 将svg转化为首字母大写的名字
 * @param {*} name
 * @param {*} prefix
 */
const parseFileName = (name, prefix = '') => {
  const nameSplit = name.split('-');
  return `${firstLetterToUpperCase(prefix)}${nameSplit
    .map(n => firstLetterToUpperCase(n))
    .join('')}`;
};

(async function() {
  const svgPath = path.resolve(__dirname, '../src/svg');
  const basePath = path.resolve(
    __dirname,
    '../node_modules/@fortawesome/fontawesome-free/svgs'
  );
  const dirs = await fs.readdir(basePath);

  console.log('The svg files are parsing, please wait! 🚀');
  const spinner = ora().start();

  for (let dir of dirs) {
    const p = path.resolve(__dirname, basePath, dir);
    const stat = await fs.stat(p);
    if (stat.isDirectory()) {
      const files = await fs.readdir(p);

      for (let fileName of files) {
        const svg = await fs.readFile(
          path.resolve(basePath, dir, fileName),
          'utf-8'
        );
        const componentName = parseFileName(fileName.split('.svg')[0], dir);
        const newFileName = componentName + '.tsx';
        spinner.start(`${dir}/${fileName}`);
        const jsCode = await svgr.default(
          svg,
          {
            icon: true,
            plugins: [
              '@svgr/plugin-svgo',
              '@svgr/plugin-jsx',
              '@svgr/plugin-prettier',
            ],
            template(
              { template },
              opts,
              { imports, componentName, props, jsx, exports }
            ) {
              const typeScriptTpl = template.smart({ plugins: ['typescript'] });
              return typeScriptTpl.ast`
              import React, { SVGProps } from "react";
              import generateIcon from "../../generateIcon";
              const ${componentName} = (props: SVGProps<SVGSVGElement>) => {
                return ${jsx};
              };
              export default generateIcon(${componentName});
            `;
            },
          },
          { componentName }
        );

        await fs.outputFile(path.resolve(svgPath, dir, newFileName), jsCode, {
          encoding: 'utf-8',
        });
      }
    }
  }
  spinner.succeed('Congratulations, parsing success!');
})();
