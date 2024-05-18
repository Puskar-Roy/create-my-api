const projectPrompt = {
  type: "input",
  name: "projectname",
  message: "What is your project named?",
  initial: "backend",
};



const servicePrompt = {
  type: "select",
  name: "service",
  message: "Select a Service:",
  choices: ["Starter API Templates", "Existing APIs"],
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
  choices: ["Node Js and Express Js", "Nest Js"],
};

const jsPrompt = {
  type: "select",
  name: "language",
  message: "📝 Select Language? ",
  choices: ["Javascript", "Typescript"],
};
const nestPrompt = {
  type: "select",
  name: "language",
  message: "📝 Select Language? ",
  choices: ["Typescript"],
};

const nestJsOrmPromt = {
  type: "select",
  name: "orm",
  message: "📝 Select ORM? ",
  choices: ["Type ORM","Prisma"],
};


module.exports = {
  projectPrompt,
  dataBasePrompt,
  backendPrompt,
  jsPrompt,
  nestPrompt,
  nestJsOrmPromt,
  servicePrompt
};
