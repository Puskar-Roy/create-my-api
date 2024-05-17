import globals from "globals";


export default {
  rules: {
    "no-unused-vars": "error",
    "no-undef": "error",
  },

  overrides: [
    {
      files: ["**/*.js"],
      parserOptions: {
        sourceType: "commonjs",
      },
    },
    {
      files: ["**/*.js"],
      env: {
        browser: true,
      },
      globals: globals.browser,
    },
    {
      ignores: [".templates/*"],
    },
  ],
  extends: ["plugin:js/recommended"],
};
