module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "prettier/react", "./jest.js"],
  rules: {
    "no-console": "off",
    "no-underscore-dangle": "off",
    "react/jsx-filename-extension": "off",
    "react/destructuring-assignment": "off",
    "react/prop-types": "off"
  }
};
