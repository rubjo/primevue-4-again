import pluginVue from 'eslint-plugin-vue'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
    ignores: [
      '**/.git/**',
      '**/build/**',
      '**/config/**',
      '**/dist/**',
      '**/node_modules/**',
    ],
    languageOptions: {
      globals: {},
      ecmaVersion: 13,
    },
  },
  eslintPluginPrettierRecommended,
]
