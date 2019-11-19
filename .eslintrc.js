module.exports = {
  extends: [
    "@cybozu",
    "@cybozu/eslint-config/presets/react",
    "@cybozu/eslint-config/presets/kintone-customize-es5"
  ],
  env: {
    es6: true,
    browser: true
  },
  globals: {
    garoon: "readonly"
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};