import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Repositorio tipo usuario.github.io → base siempre es '/'
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  assetsInclude: ['**/*.fbx', '**/*.glb', '**/*.gltf', '**/*.hdr'],
})