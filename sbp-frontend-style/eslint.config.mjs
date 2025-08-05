import { fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
})

export default defineConfig([
	globalIgnores(['**/*.mock.json', '**/vite-env.d.ts', '**/dist']),
	{
		extends: compat.extends(
			'eslint:recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:react/recommended',
			'prettier'
		),

		plugins: {
			'@typescript-eslint': typescriptEslint,
			react,
			'react-hooks': fixupPluginRules(reactHooks),
			prettier
		},

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.jest
			},

			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module'
		},

		settings: {
			'import/resolver': {
				typescript: {}
			},

			react: {
				version: 'detect'
			}
		},

		rules: {
			'react/no-children-prop': 'off',
			'react/react-in-jsx-scope': 'off',
			camelcase: 'error',
			'spaced-comment': 'error',
			quotes: ['error', 'single'],
			'no-duplicate-imports': 'error',
			'react/prop-types': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-explicit-any': 'off',

			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_'
				}
			]
		}
	}
])
