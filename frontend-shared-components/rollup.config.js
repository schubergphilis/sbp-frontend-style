import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'
import dts from 'rollup-plugin-dts'
import external from 'rollup-plugin-peer-deps-external'
// import sourcemaps from 'rollup-plugin-sourcemaps'
import { terser } from 'rollup-plugin-terser'
import tsConfigPaths from 'rollup-plugin-tsconfig-paths'
import packageJson from './package.json'

export default [
	{
		input: './src/build.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: false,
				name: 'react-ts-lib'
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: false
			}
		],
		plugins: [
			external(),
			resolve(),
			commonjs(),
			typescript({ tsconfig: './tsconfig.build.json' }),
			// sourcemaps(),
			terser()
		],
		external: ['react', 'react-dom', 'styled-components']
	},
	{
		input: 'dist/esm/types/src/build.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [
			tsConfigPaths('./tsconfig.build.json'),
			dts.default(),
			del({
				targets: ['./dist/cjs/types', './dist/esm/types'],
				hook: 'buildEnd'
			})
		],
		external: ['styled-components']
	}
]
