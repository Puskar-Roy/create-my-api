const { prompt } = require("enquirer");
const path = require("path");
const { greetings } = require("../scripts/endScript");
const {
  projectPrompt,
  dataBasePrompt,
  backendPrompt,
  jsPrompt,
  nestPrompt,
  nestJsOrmPromt,
  servicePrompt
} = require("../scripts/prompts");

const runCLI = async (copyDir) => {
  const projectResponse = await prompt(projectPrompt);
  const serviceResponse = await prompt(servicePrompt);
  const backendResponse = await prompt(backendPrompt);
  const languageResponse =
    backendResponse.backend === "Node Js and Express Js"
      ? await prompt(jsPrompt)
      : await prompt(nestPrompt);
  var nestOrm;
  if (backendResponse.backend == "Nest Js") {
    nestOrm = await prompt(nestJsOrmPromt);
  }
  const databaseResponse = await prompt(dataBasePrompt);

  if (
    backendResponse.backend === "Nest Js" &&
    languageResponse.language === "Typescript" &&
    databaseResponse.database === "PostgreSQL" &&
    nestOrm.orm === "Type ORM"
  ) {
    copyDir(
      path.resolve(__dirname, "../templates/nest-ts-typeorm-postgrsql"),
      path.resolve(process.cwd(), projectResponse.projectname),
      (err) => {
        if (err) {
          console.log("Failed to copy directory:", err);
          return;
        }
      },
    );
    console.log("Nest Js");
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
