import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
  // ...vite configures
  server: {
      proxy: {
        '/api': {
            // target: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
            target: 'http://localhost:3000/test',
            changeOrigin: true,
            configure: (proxy, options) => {
                // https://github.com/chimurai/http-proxy-middleware
                // proxy will be an instance of 'http-proxy'
                proxy.on('proxyRes', (proxyRes, req, res) => {
                    // console.log('RAW Response from the target', JSON.stringify(proxyRes.headers, true, 2));
                    console.log('proxyRes: ', proxyRes)
                    res.end('hello')
                })
                proxy.on('proxyReq', (proxyReq, req, res) => {

                })

                proxy.on('error', (err, req, res) => {
                    
                })
            },
          },
      },
    // vite server configs, for details see [vite doc](https://vitejs.dev/config/#server-host)
    port: 3000,
  },
  plugins: [react()],
})
