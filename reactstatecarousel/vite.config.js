import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './setupTests.js', // Path to your setup file
    testTimeout: 10000, // Optional: Increase test timeout if needed
    coverage: {
      reporter: ['text', 'json', 'html']
    }
  }
})
