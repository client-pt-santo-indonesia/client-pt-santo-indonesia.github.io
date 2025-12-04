import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

// Plugin untuk copy index.html ke 404.html setelah build
// Ini diperlukan untuk GitHub Pages SPA routing
const copyIndexTo404 = () => {
  return {
    name: 'copy-index-to-404',
    closeBundle() {
      const outDir = 'docs'
      const indexPath = join(outDir, 'index.html')
      const notFoundPath = join(outDir, '404.html')
      
      if (existsSync(indexPath)) {
        const indexContent = readFileSync(indexPath, 'utf-8')
        writeFileSync(notFoundPath, indexContent, 'utf-8')
        console.log('✓ Copied index.html to 404.html for GitHub Pages')
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), copyIndexTo404()],
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
