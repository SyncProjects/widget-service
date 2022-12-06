import { defineConfig } from 'vite';
import { resolve } from 'path';
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './main.js'),
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['three', 'vis-three'],
    },
  },
  server: {
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
