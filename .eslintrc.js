module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: { "no-plusplus": "off", "no-restricted-syntax": "off" },
};
