#!/usr/bin/env node
const runCLI = require("./cli/main");
const copyDir = require("./utils/main");
const { green, yellow } = require("colorette");

runCLI(copyDir).then(() => {
  console.log(green("  🎉 You are ready!\n"));
  console.log(
    yellow(
      `  🌟 NOTE: Please fill out the .env file first to avoid any errors.`,
    ),
  );
});
