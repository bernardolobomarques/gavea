import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/gavea/',  // Adiciona o nome do repositório como base
  assetsInclude: ['**/*.JPG'],  // Add support for uppercase .JPG files
})
