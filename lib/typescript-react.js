module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "./jest.js"
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "no-console": "off",
    "no-underscore-dangle": "off",
    "react/jsx-filename-extension": "off",
    "react/destructuring-assignment": "off",
    "react/prop-types": "off"
  }
};
