import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base relativa: funciona em Vercel, Render e GitHub Pages (subcaminho).
export default defineConfig({
  base: './',
  plugins: [react()],
})
