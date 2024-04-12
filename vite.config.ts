import { defineConfig } from 'vite'
import dotenv from 'dotenv'
import react from '@vitejs/plugin-react'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import nodePolyfills from 'rollup-plugin-node-polyfills'

dotenv.config();

let config_production = {
  plugins: [react()],
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      'node-fetch': 'isomorphic-fetch'
    }
  },
  define: {
    process: {},
    global: {}
  }
}
let config_development = {
  plugins: [react()],
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      'node-fetch': 'isomorphic-fetch'
    }
  },
  define: {
    process: {},
    global: {}
  }
}

const config = process.env.VITE_APP_ENV === 'production' ? config_production : config_development;

// https://vitejs.dev/config/
export default defineConfig(config)
