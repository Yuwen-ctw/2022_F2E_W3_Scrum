module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  // 繼承規則，來源有四種可能：
  // 1. 直接從eslint繼承。'eslint:recommended'
  // 2. 從npm下載 'eslint-config-airbnb'
  // 3. 從插件 'plugin:react/recommended'
  // 4. 從絕對路徑 './node_modules/coding-standard/eslintDefaults.js'
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    // quotes: [0, 'single'],
    // semi: [2, 'never'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    // 不會檢查props的型態
    // 'react/prop-types': 0,
    // 警告尚有未使用的變數
    'no-unused-vars': 1,
  },
}
