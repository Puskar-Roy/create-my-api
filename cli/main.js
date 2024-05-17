const { prompt } = require("enquirer");
const path = require("path");
const { greetings } = require("../scripts/endScript");
const {
  projectPrompt,
  dataBasePrompt,
  backendPrompt,
  goPrompt,
  jsPrompt,
} = require("../scripts/prompts");

const runCLI = async (copyDir) => {
  const projectResponse = await prompt(projectPrompt);
  const backendResponse = await prompt(backendPrompt);
  const languageResponse =
    backendResponse.backend === "Node Js and Express Js"
      ? await prompt(jsPrompt)
      : await prompt(goPrompt);

  const databaseResponse = await prompt(dataBasePrompt);

  if (
    backendResponse.backend === "Go Lang" &&
    languageResponse.language === "Go" &&
    databaseResponse.database === "MongoDB"
  ) {
    copyDir(
      path.resolve(__dirname, "../templates/go-lang-mongo"),
      path.resolve(process.cwd(), projectResponse.projectname),
      (err) => {
        if (err) {
          console.log("Failed to copy directory:", err);
          return;
        }
      },
    );
  } else if (
    backendResponse.backend === "Node Js and Express Js" &&
    languageResponse.language === "Typescript" &&
    databaseResponse.database === "MongoDB"
  ) {
    copyDir(
      path.resolve(__dirname, "../templates/node-express-ts-mongo"),
      path.resolve(process.cwd(), projectResponse.projectname),
      (err) => {
        if (err) {
          console.log("Failed to copy directory:", err);
          return;
        }
      },
    );
  } else if (
    backendResponse.backend === "Node Js and Express Js" &&
    languageResponse.language === "Typescript" &&
    databaseResponse.database === "PostgreSQL"
  ) {
    copyDir(
      path.resolve(__dirname, "../templates/node-express-ts-postgrsql"),
      path.resolve(process.cwd(), projectResponse.projectname),
      (err) => {
        if (err) {
          console.log("Failed to copy directory:", err);
          return;
        }
      },
    );
  }
  greetings(projectResponse.projectname, languageResponse.language);
};

module.exports = runCLI;
