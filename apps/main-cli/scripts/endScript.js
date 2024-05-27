const { green, blue } = require("colorette");

const greetings = (repoName, lang) => {
  console.log(green(`\n  💻 Happy Coading - Puskar-Roy☠️`));
  console.log(green(`  ⌨️  cd ${repoName} && npm install && npm run dev\n`));
};




module.exports = { greetings };
