module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb-base", "prettier", "./jest.js"],
  rules: {
    "no-console": "off",
    "no-underscore-dangle": "off"
  }
};
