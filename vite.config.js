import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0'
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/components/__tests__/setup.js', // Caminho para o seu arquivo de setup de teste
    testMatch: ['./tests/**/*.test.tsx'], // Padrão para encontrar arquivos de teste
    globals: true,
  }
})
