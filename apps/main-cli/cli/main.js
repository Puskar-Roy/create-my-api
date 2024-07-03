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
  servicePrompt,
  existingAPIPromt,
} = require("../scripts/prompts");

const runCLI = async (copyDir) => {
  const projectResponse = await prompt(projectPrompt);
  const serviceResponse = await prompt(servicePrompt);

  if (serviceResponse.service === "Starter API") {
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
  } else {
    const existingAPIResponse = await prompt(existingAPIPromt);
    if (existingAPIResponse.existingAPI === "Attendance Portal") {
      copyDir(
        path.resolve(__dirname, "../packages/Attendance_Portal_API"),
        path.resolve(process.cwd(), projectResponse.projectname),
        (err) => {
          if (err) {
            console.log("Failed to copy directory:", err);
            return;
          }
        },
      );
    } else if (existingAPIResponse.existingAPI === "E-learning Platform") {
      copyDir(
        path.resolve(__dirname, "../packages/E-learning_Platform_API"),
        path.resolve(process.cwd(), projectResponse.projectname),
        (err) => {
          if (err) {
            console.log("Failed to copy directory:", err);
            return;
          }
        },
      );
    } else if (existingAPIResponse.existingAPI === "Online_Book_Sales") {
      copyDir(
        path.resolve(__dirname, "../packages/OnlineBookSales_API"),
        path.resolve(process.cwd(), projectResponse.projectname),
        (err) => {
          if (err) {
            console.log("Failed to copy directory:", err);
            return;
          }
        },
      );
    }

    greetings(existingAPIResponse.existingAPI, "Typescript");
  }
};

module.exports = runCLI;
