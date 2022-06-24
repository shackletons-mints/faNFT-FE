import { defineConfig, HttpProxy } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    // ...vite configures
    server: {
        proxy: {
            '/get-fans': {
                // target: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
                target: 'http://localhost:8080',
                changeOrigin: true,
            },
            '/fan': {
                target: 'http://localhost:8080',
                changeOrigin: true,
            },
            '/get-fan': {
                target: 'http://localhost:8080',
                changeOrigin: true,
            }
        },
        // vite server configs, for details see [vite doc](https://vitejs.dev/config/#server-host)
        port: 3000,
    },
    plugins: [react()],
})
