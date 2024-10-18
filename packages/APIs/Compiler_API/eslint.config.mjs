import js from "@eslint/js";
import tsEslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import nodePlugin from "eslint-plugin-n";
import globals from "globals";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default tsEslint.config(
  {
    ignores: ["dist/*"],
  },
  js.configs.recommended,

  // Rules enabled by this config in addition to recommended: https://typescript-eslint.io/rules/?=xrecommended-strict
  // Replace this with ...tsEslint.configs.recommendedTypeChecked, if you want to include recommended rules only
  ...tsEslint.configs.strictTypeChecked,

  // Rules enabled by this config: https://typescript-eslint.io/rules/?=stylistic
  // Remove this if you don't want to include stylistic rules
  ...tsEslint.configs.stylisticTypeChecked,

  prettier,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.nodeBuiltin,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
  nodePlugin.configs["flat/recommended"],
  {
    rules: {
      "n/prefer-node-protocol": "error",
    },
  },
  {
    files: ["**/*.mjs", "**/*.cjs", "**/*.js"],
    ...tsEslint.configs.disableTypeChecked,
  },
);
