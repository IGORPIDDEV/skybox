module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/vue3-recommended'],
  parserOptions: {
    ecmaVersion: 14,
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    quotes: [2, 'single'],
    semi: [2, 'never'],
    'no-use-before-define': [2, 'nofunc'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/html-indent': ['error', 2],
    'key-spacing': 1,
    'comma-spacing': [2, { before: false, after: true }],
    'object-property-newline': 2,
    'vue/multi-word-component-names': 'off'
  },
  plugins: [],
  overrides: [
    {
      files: [
        '**/pages/**/*.{js,ts,vue}',
        '**/layouts/**/*.{js,ts,vue}',
        '**/app.{js,ts,vue}',
        '**/error.{js,ts,vue}'
      ],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
}
