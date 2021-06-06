module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './.babel.config.js',
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        // ecmaVersion: 12,
        // sourceType: 'module',
      },
      plugins: ['react', '@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
