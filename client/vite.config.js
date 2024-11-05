import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // Change if you need to access the server externally
    port: 5173, // Default Vite port, change if needed
    open: true, // Automatically open the app in the browser
    cors: true, // Enable CORS for your development server
  },
  base: '/', // Base public path when serving the app
  build: {
    outDir: 'dist', // Output directory for build files
    sourcemap: true, // Generate source maps for debugging
  },
  define: {
    'process.env': {}, // Allow process.env variables to be used
  },
})