module.exports = {
  extends: require.resolve("./index.js"),

  parser: "babel-eslint",

  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: ["import", "react", "jsx-a11y"]
};
