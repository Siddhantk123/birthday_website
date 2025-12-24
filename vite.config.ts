
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/birthday_website/",
  plugins: [react()],
  define: {
    'process.env': {}
  }
});
