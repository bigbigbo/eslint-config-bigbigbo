module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "./rules/javascript-base.js",
    "./rules/typescript-base.js",
    "./jest.js"
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": "off",
    "react/destructuring-assignment": "off",
    "react/prop-types": "off"
  }
};
