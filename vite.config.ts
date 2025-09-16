import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(), dts({ outDir: 'dist/types' })],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'BackToTopButton',
      fileName: (format) => `back-to-top-button.${format}.js`
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue', 'vitepress', 'vitepress/client', '@siteData', '@theme', '@router', '@vueuse/core'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          vitepress: 'vitepress',
          'vitepress/client': 'vitepressClient'
        },
        format: 'es',
        assetFileNames(chunkInfo) {
          let fileName = chunkInfo.name
          if (fileName && fileName.endsWith('.css')) {
            fileName = 'style.css'
          }
          return fileName || '[name].[ext]'
        }
      },
    }
  }
})