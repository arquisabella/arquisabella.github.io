import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Para GitHub Pages: cambia 'arquisabella' por el nombre de tu repo
  base: process.env.NODE_ENV === 'production' ? '/arquisabella/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  assetsInclude: ['**/*.fbx', '**/*.glb', '**/*.gltf', '**/*.hdr'],
})
