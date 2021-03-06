module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "./rules/javascript-base.js",
    "./rules/typescript-base.js",
    "./jest.js"
  ],
  plugins: ["@typescript-eslint"]
};
