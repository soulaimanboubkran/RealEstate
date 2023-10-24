import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({

  server: { 
    define: {
    'import.meta.env.VITE_FIREBASE_API_KEY': process.env.FIREBASE,
  },

    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        secure: false,
      },
    },
  },
 
  plugins: [react()],
});