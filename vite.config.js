import { defineConfig, pluginSsg, pluginBundle, pluginSprite } from "minista"
import path from 'path'

export default defineConfig({
  plugins: [
      pluginSsg(),
      pluginBundle(),
      pluginSprite(),
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
