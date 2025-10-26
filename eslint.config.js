import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import vueConfigTypescript from '@vue/eslint-config-typescript'
import vueConfigPrettier from '@vue/eslint-config-prettier'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', 'node_modules/**'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  ...vueConfigTypescript(),
  vueConfigPrettier,

  {
    name: 'app/custom-rules',
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
]
