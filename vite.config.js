import { defineConfig, HttpProxy } from 'vite'
import react from '@vitejs/plugin-react'

require('dotenv').config()

export default defineConfig({
    // ...vite configures
    server: {
        proxy: {
            '/test': {
                // target: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
                target: 'http://localhost:8080',
                changeOrigin: true,
            },
        },
        // vite server configs, for details see [vite doc](https://vitejs.dev/config/#server-host)
        port: 3000,
    },
    plugins: [react()],
})
