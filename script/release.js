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
      type: "confirm",
      name: "allClearCommit",
      message: "确定已经 commit 所有更改",
      default: true
    },
    {
      type: "list",
      name: "versionCommand",
      message: "请选择要发布的版本",
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
      ],
      when(answers) {
        return answers.allClearCommit;
      }
    }
  ])
  .then(answers => {
    /**
     * Workflow:
     * Make changes
       Commit those changes
       Make sure Travis turns green
       step1: Bump version in package.json
       step2: conventionalChangelog
       step3: Commit package.json and CHANGELOG.md files
       Tag
       Push
     */
    const { allClearCommit, versionCommand } = answers;
    if (!allClearCommit) {
      return;
    }

    const step1 = shell.exec(`npm version ${versionCommand}`);
    if (step1.code !== 0) {
      shell.exit(1);
    }

    const step2 = shell.exec(
      "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
    );
    if (step2.code !== 0) {
      shell.exit(2);
    }

    const step3 = shell.exec(`git commit -m "${commitMsg}"`);
    if (step3.code !== 0) {
      shell.exit(3);
    }
  });
