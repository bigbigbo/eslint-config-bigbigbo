module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb-base",
    "prettier",
    "./rules/javascript-base.js",
    "./jest.js"
  ]
};
