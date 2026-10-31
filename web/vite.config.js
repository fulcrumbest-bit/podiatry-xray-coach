import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// mode 'inline' (default for Pages deploy): everything in one JS bundle.
// mode 'split': images become lazy per-case chunks (faster first paint, smaller initial JS).
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: './',
  build: {
    outDir: mode === 'split' ? 'dist-split' : 'dist',
    assetsInlineLimit: mode === 'split' ? 4096 : 100000000,
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (mode === 'split' && id.includes('/src/data/img/')) return 'img-' + id.split('/').pop().replace(/\W+/g, '_');
        }
      }
    }
  }
}));
