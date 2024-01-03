import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'
import webfontDownload from 'vite-plugin-webfont-dl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    webfontDownload(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      includeAssets: ['favicon.ico', 'maskable_icon.png'],
      manifest: {
        name: 'KMMX',
        short_name: 'KMMX',
        description: 'KMMX Main site',
        theme_color: '#f9826c',
        background_color: '#141414',
        orientation: 'portrait-primary',
        display: 'minimal-ui',
        icons: [
          {
            src: 'favicon.png',
            type: 'image/png',
            sizes: '250x250'
          },
          {
            src: 'asset/splash.png',
            type: 'image/png',
            sizes: '512x512'
          },
          {
            src: 'asset/maskable_icon.png',
            size: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})

