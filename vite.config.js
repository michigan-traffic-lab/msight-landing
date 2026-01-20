import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: '/msight-landing/', // must match repo name
  server: {
    port: 5173,
    strictPort: true
  }
})
