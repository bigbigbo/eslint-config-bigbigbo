module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "./jest.js"
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "no-console": "off",
    "no-underscore-dangle": "off"
  }
};
