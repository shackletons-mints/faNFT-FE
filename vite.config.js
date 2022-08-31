import { defineConfig, HttpProxy } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    // ...vite configures
    server: {
        proxy: {
            '/get-fan': {
                target: 'https://fanft-api.herokuapp.com',
                changeOrigin: true,
            },
            '/fan': {
                target: 'https://fanft-api.herokuapp.com',
                changeOrigin: true,
            },
            '/put-fan': {
                target: 'https://fanft-api.herokuapp.com',
                changeOrigin: true,
            },
        },
        // vite server configs, for details see [vite doc](https://vitejs.dev/config/#server-host)
        port: 3000,
    },
    plugins: [react()],
})
