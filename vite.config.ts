import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // use a relative base so the app loads correctly from GitHub Pages and
  // even when opened directly from the filesystem (avoids hard-coded root paths)
  base: './',
})
