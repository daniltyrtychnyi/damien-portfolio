import {defineConfig, pluginSsg, pluginBundle, pluginSprite, pluginImage} from "minista"
import path from 'path'

export default defineConfig({
    server: {
        host: '127.0.0.1',
        port: 3000,
    },
    plugins: [
        pluginSsg(),
        pluginBundle(),
        pluginSprite(),
        pluginImage(),
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
