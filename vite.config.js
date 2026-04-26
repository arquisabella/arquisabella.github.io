import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Para GitHub Pages: cambia 'isabella-portfolio' por el nombre de tu repo
  base: process.env.NODE_ENV === 'production' ? '/isabella-portfolio/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  assetsInclude: ['**/*.fbx', '**/*.glb', '**/*.gltf', '**/*.hdr'],
})
