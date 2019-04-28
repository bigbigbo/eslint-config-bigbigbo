module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "./rules/javascript-base.js",
    "./jest.js"
  ],
  rules: {
    "react/jsx-filename-extension": "off",
    "react/destructuring-assignment": "off",
    "react/prop-types": "off"
  }
};
