import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],

   // Optional: Ensures correct build output
  build: {
    outDir: 'dist',
    sourcemap: false,
  },

  // Required ONLY in dev mode, not used in Docker
  server: {
    port: 5173,
    open: false,
  }

})
