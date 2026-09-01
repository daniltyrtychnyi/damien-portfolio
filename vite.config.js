import {
  defineConfig,
  pluginSsg,
  pluginBundle,
  pluginSprite,
  pluginImage,
  pluginEntry,
} from 'minista'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'

  return {
    base: isProd ? '/damien-portfolio/' : '/',
    server: {
      host: '127.0.0.1',
      port: 3000,
    },
    plugins: [
      pluginSsg(),
      pluginBundle(),
      pluginSprite(),
      pluginImage(),
      pluginEntry(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use '@/styles/helpers' as *;
        `,
        },
      },
      devSourcemap: true,
    },
  }
})
