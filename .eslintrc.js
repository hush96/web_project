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
    'space-before-function-paren':0,'key-spacing':0,'no-multiple-empty-lines':0,
    'no-undef':0,'indent':0,'no-trailing-spaces':0,'object-curly-spacing':0,'standard/object-curly-even-spacing':0,
    'eol-last':0,'comma-spacing':0,'import/no-duplicates':0,'semi':0,'padded-blocks':0,'no-sequences':0,
    'no-unused-expressions':0,'no-unused-vars':0,'comma-dangle' : 0,'no-const-assign':0,
=======
<<<<<<< HEAD
    'space-before-function-paren' : 0,
    'no-trailing-spaces' : 0,
=======
    'space-before-function-paren': 0,
    'no-unused-vars': 0
>>>>>>> e3ac08e75e47316204cf97755f058679cdd8ffa0
>>>>>>> 94e8790f7d9e1b83eaac0aab173f03ba8978aed1
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
