const inquirer = require("inquirer");
const shell = require("shelljs");

const pkgVersion = require("../package.json").version;
const [major, minor, patch] = pkgVersion.split(".");

const newMajor = `${parseInt(major) + 1}.0.0`;
const newMinor = `${major}.${parseInt(minor) + 1}.0`;
const newPatch = `${major}.${minor}.${parseInt(patch) + 1}`;

inquirer
  .prompt([
    {
      type: "list",
      message: "请选择要发布的版本",
      name: "versionCommand",
      choices: [
        {
          name: `major 版本：${newMajor}`,
          value: "major"
        },
        {
          name: `minor 版本：${newMinor}`,
          value: "minor"
        },
        {
          name: `patch 版本：${newPatch}`,
          value: "patch"
        }
      ]
    }
  ])
  .then(answers => {
    const { versionCommand } = answers;
    const { code } = shell.exec(`npm version ${versionCommand}`);
    if (code !== 0) {
      shell.exit(1);
    }
  });
