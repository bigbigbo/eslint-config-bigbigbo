const inquirer = require("inquirer");
const shell = require("shelljs");

const step1 = shell.exec(`npm run changelog`);
if (step1.code !== 0) {
  shell.echo("生成 CHANGELOG.md 过程中发生了错误");
  shell.exit(1);
}

const step2 = shell.exec("git add .");
if (step2.code !== 0) {
  shell.exit(2);
}

inquirer
  .prompt([
    {
      type: "list",
      message: "选择 commit-msg 类型",
      name: "commitType",
      choices: [
        {
          name: "使用默认 commit-msg: docs: update CHANGELOG.md",
          value: "default"
        },
        {
          name: "自定义 commit-msg",
          value: "diy"
        }
      ]
    },
    {
      type: "input",
      message: "请输入 commit-msg",
      name: "commitMsg",
      when(answers) {
        return answers.commitType === "diy";
      }
    }
  ])
  .then(answers => {
    const commitMsg = answers.commitMsg || "docs: update CHANGELOG.md";
    const step3 = shell.exec(`git commit -m "${commitMsg}"`);
    if (step3.code !== 0) {
      shell.exit(3);
    }

    const step4 = shell.exec("git push -u origin master");
    if (step4.code !== 0) {
      shell.exit(4);
    }
  });
