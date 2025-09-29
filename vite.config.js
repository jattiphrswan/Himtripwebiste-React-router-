import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Himtripwebiste-React-router-/', // important for GitHub Pages
  plugins: [react()],
});
