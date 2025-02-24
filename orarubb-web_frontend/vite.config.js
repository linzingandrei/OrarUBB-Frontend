import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';

export default defineConfig({
  base: '/apps/orar',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true,
    allowedHosts: ['www.cs.ubbcluj.ro'],
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true,
    allowedHosts: ['www.cs.ubbcluj.ro'],
  },
  // appType: 'mpa',
  // server: {
    // proxy: {
      // '/rooms': {
        // target: 'http://localhost:8080',
        // changeOrigin: true,
        // secure: false,
      // },
    // }
  // }
})
