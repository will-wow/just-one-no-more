module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['import'],
  env: {
    browser: true
  },
  rules: {
    strict: 'off',
    'arrow-parens': ['warn', 'as-needed'],
    'arrow-body-style': 'off',
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-console': 'off',
    'prefer-destructuring': 'off',
    'no-param-reassign': ['error', { props: false }],
    'func-names': 'off'
  },
  globals: {
    chrome: true,
    WebSocket: true
  }
};
