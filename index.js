import js from "@eslint/js";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import reactJsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";

const files = ["**/*.{js,cjs,mjs,jsx,ts,tsx}"];
const tsFiles = ["**/*.{ts,tsx}"];
const jsxFiles = ["**/*.{jsx,tsx}"];
const testFiles = ["**/*.test.{js,cjs,mjs,jsx,ts,tsx}"];

export const base = [js.configs.recommended];
export const vue = [];
export const react = [
  ...base,
  { files, ...reactRecommended },
  { files, ...reactJsxRuntime },
  {
    files,
    plugins: { "react-hooks": reactHooks },
    rules: reactHooks.configs.recommended.rules,
  },
  {
    files: jsxFiles,
    plugins: { "jsx-a11y": jsxA11y },
    ...jsxA11y.configs.recommended.rules,
  },
  {
    files,
    settings: { react: { version: "detect" } },
  },
];
