import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { withNuxt } from './.nuxt/eslint.config.mjs'
import eslintIgnores from './eslint.ignores.js'

export default withNuxt({
  files: ['**/*.js', '**/*.vue'],
  ignores: eslintIgnores,
  rules: {
    'prettier/prettier': 'warn'
  }
}).prepend(eslintPluginPrettierRecommended)
