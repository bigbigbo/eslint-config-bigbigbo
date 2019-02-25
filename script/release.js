const fs = require("fs");
const inquirer = require("inquirer");
const shell = require("shelljs");

const packageJSON = require("../package.json");
const [major, minor, patch] = packageJSON.version.split(".");

const newMajor = `${parseInt(major) + 1}.0.0`;
const newMinor = `${major}.${parseInt(minor) + 1}.0`;
const newPatch = `${major}.${minor}.${parseInt(patch) + 1}`;

function updatePkgVersion(version) {
  packageJSON.version = version;
  fs.writeFileSync("package.json", JSON.stringify(packageJSON, null, 2));
  console.log(`version: ${version}`);
  console.log();
}

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
      name: "newVersion",
      message: "请选择要发布的版本",
      choices: [
        {
          name: `major 版本：${newMajor}`,
          value: newMajor
        },
        {
          name: `minor 版本：${newMinor}`,
          value: newMinor
        },
        {
          name: `patch 版本：${newPatch}`,
          value: newPatch
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
    const { allClearCommit, newVersion } = answers;
    if (!allClearCommit) {
      return;
    }

    // step1
    updatePkgVersion(newVersion);

    const step2 = shell.exec(
      "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
    );
    if (step2.code !== 0) {
      shell.exit(2);
    }

    const step3_1 = shell.exec(`git add .`);
    const step3_2 = shell.exec(`git commit -m "chore: release v${newVersion}"`);
    if (step3_1.code !== 0 || step3_2.code !== 0) {
      shell.exit(3);
    }
    const step4 = shell.exec(`git tag v${newVersion}`);
    if (step4.code !== 0) {
      shell.exit(4);
    }

    const step5 = shell.exec("git push -u origin master");
    if (step5.code !== 0) {
      shell.exit(5);
    }

    const step6 = shell.exec("git push origin --tags");
    if (step6.code !== 0) {
      shell.exit(6);
    }

    const step7 = shell.exec("npm publish");
    if (step7.code !== 0) {
      shell.exit(7);
    }
  });
