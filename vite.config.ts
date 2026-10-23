import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import type { Plugin } from 'vite'

// Dev server: serve public/homepages/index.html for /homepages and /homepages/
// instead of falling back to the card app. Vercel already does this in production.
const homepagesIndex = (): Plugin => ({
  name: 'homepages-index',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url === '/homepages' || req.url === '/homepages/') req.url = '/homepages/index.html'
      next()
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), homepagesIndex()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
