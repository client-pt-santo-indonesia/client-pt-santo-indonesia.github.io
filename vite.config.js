import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': fileURLToPath(new URL('./assets', import.meta.url)),
    },
  },
  build: {
    outDir: 'docs',
    emptyOutDir: false,
  },
})
