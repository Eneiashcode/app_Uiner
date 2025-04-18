import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path' // ✅ importa path para usar alias

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ✅ alias para src
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: '.', // mantém como você tinha
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'Uiner',
        short_name: 'Uiner',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#00b894',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
