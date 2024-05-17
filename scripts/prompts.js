const projectPrompt = {
  type: "input",
  name: "projectname",
  message: "What is your project named?",
  initial: "backend",
};

const dataBasePrompt = {
  type: "select",
  name: "database",
  message: "Select a Database:",
  choices: ["MongoDB", "PostgreSQL"],
};

const backendPrompt = {
  type: "select",
  name: "backend",
  message: "Select a Backend Technology:",
  choices: ["Node Js and Express Js", "Go Lang"],
};

const jsPrompt = {
  type: "select",
  name: "language",
  message: "📝 Select Language? ",
  choices: ["Javascript", "Typescript"],
};

const goPrompt = {
  type: "select",
  name: "language",
  message: "📝 Select Language? ",
  choices: ["Go"],
};

module.exports = {
  projectPrompt,
  dataBasePrompt,
  backendPrompt,
  jsPrompt,
  goPrompt,
};
