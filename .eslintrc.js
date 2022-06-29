module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'class-method-use-this': 'off',
    'linebreak-style': 0,
    'class-methods-use-this': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'no-promise-executor-return': 'off',
    'consistent-return': 'off',
    eqeqeq: 'off',
    camelcase: 'off',
  },
};
