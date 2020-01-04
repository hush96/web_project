module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
<<<<<<< HEAD
    'space-before-function-paren' : 0,
    'no-trailing-spaces' : 0,
=======
    'space-before-function-paren': 0,
    'no-unused-vars': 0
>>>>>>> e3ac08e75e47316204cf97755f058679cdd8ffa0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
