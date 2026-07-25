import { defineConfig, pluginSsg, pluginBundle } from "minista"
import path from 'path'

export default defineConfig({
  plugins: [
      pluginSsg(),
      pluginBundle(),
  ],
  resolve: {
    alias: [{
      find: '@/',
      replacement: path.resolve('src') + '/',
    }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@/styles/helpers' as *;
        `
      }
    }
  }
})
