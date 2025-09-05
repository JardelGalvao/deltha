module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'semi': ['error', 'always'],            // require semicolons
    'semi-style': ['error', 'last'],         // no semicolon after blocks,
    'quotes': ['error', 'double'],
  }
};
