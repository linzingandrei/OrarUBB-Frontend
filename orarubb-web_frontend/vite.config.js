import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '')
    console.log(env.NODE_ENV)
    return {
        base: '/apps/orar',
        plugins: [react()],
        preview: {
            host: '0.0.0.0',
            port: 4173,
            strictPort: true,
            allowedHosts: ['www.cs.ubbcluj.ro'],
        },
    }
})
