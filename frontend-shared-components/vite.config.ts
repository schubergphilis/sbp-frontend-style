import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '')

	return {
		plugins: [react(), tsconfigPaths()]
	}
})
