import { defineConfig, HttpProxy } from 'vite'
import react from '@vitejs/plugin-react'

require('dotenv').config()

export default defineConfig({
    // ...vite configures
    server: {
        proxy: {
            '/api': {
                // target: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
                target: 'http://localhost:8080',
                changeOrigin: true,
            },
            '/secret': {
                target: 'http://localhost:3000/test',
                changeOrigin: true,
                selfHandleResponse: false,
                configure: (proxy, options) => {
                    proxy.on('proxyReq', (proxyReq, req, res) => {
                        proxyReq.on('data', data => {
                            console.log(data)
                        })
                    })
                }
            }
        },
        // vite server configs, for details see [vite doc](https://vitejs.dev/config/#server-host)
        port: 3000,
    },
    plugins: [react()],
})
