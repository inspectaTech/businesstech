import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { manualChunksPlugin } from 'vite-plugin-webpackchunkname'
import inject from '@rollup/plugin-inject';
import webfontDownload from 'vite-plugin-webfont-dl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    manualChunksPlugin(),
    inject({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    webfontDownload([
      'https://fonts.googleapis.com/css?family=Montserrat&display=swap',
    ]),
  ],
  base: "./"
})