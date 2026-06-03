import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'assets/*.png', 'assets/*.PNG', 'assets/CV.pdf'],
            manifest: {
                name: 'Charly Polley Portfolio',
                short_name: 'Portfolio',
                description: 'Portfolio de Charly Polley - Développeur iOS & Web',
                theme_color: '#000000',
                background_color: '#000000',
                display: 'standalone',
                orientation: 'portrait',
                icons: [
                    {
                        src: 'vite.svg',
                        sizes: '192x192',
                        type: 'image/svg+xml'
                    },
                    {
                        src: 'vite.svg',
                        sizes: '512x512',
                        type: 'image/svg+xml'
                    }
                ]
            }
        })
    ],
})
