module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['import'],
  env: {
    browser: true
  },
  rules: {
    strict: 'off',
    'no-console': 'warn',
    'arrow-parens': ['warn', 'as-needed'],
    'arrow-body-style': 'off',
    'comma-dangle': ['warn', 'only-multiline'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-console': 'off'
  },
  globals: {
    chrome: true,
    WebSocket: true
  }
};
