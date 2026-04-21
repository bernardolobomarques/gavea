import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Adiciona o nome do repositório como base
  assetsInclude: ['**/*.JPG', '**/*.png', '**/*.jpeg', '**/*.jpg', '**/*.PNG', '**/*.JPEG', '**/*.Png', '**/*.Jpeg', '**/*.Jpg'],  // Add support for uppercase .JPG files
})
