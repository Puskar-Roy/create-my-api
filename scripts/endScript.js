const {  green, blue,  } = require("colorette");

const greetings = (repoName, lang) => {
  console.log(green(`\n  💻 Happy Coading - Puskar-Roy☠️`));
  lang === "Go"
    ? console.log(blue(`  ⌨️  cd ${repoName} && go main.go \n`))
    : console.log(
        green(`  ⌨️  cd ${repoName} && npm install && npm run dev\n`),
      );
};

module.exports = { greetings };
