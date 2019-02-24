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

const step3 = shell.exec("git commit -m 'docs: update CHANGELOG.md'");
if (step3.code !== 0) {
  shell.exit(3);
}

const step4 = shell.exec("git push -u origin master");
if (step4.code !== 0) {
  shell.exit(4);
}
