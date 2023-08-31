// import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import prismjs from "vite-plugin-prismjs";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@':resolve(__dirname,'src'),
      'views':resolve(__dirname,"src/views"),
      // '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    prismjs({
      languages: ["json", "js", "go", "bash", "yaml", "markup"],
      plugins: ["line-numbers"],
      theme: "solarizedlight",
      css: true,
    }),
    AutoImport({
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),
    // 按需引入 Element
    Components({
      resolvers: [
        ElementPlusResolver({ 
          // 按需引入修改主题色添加这一行，使用预处理样式
          importStyle: "sass" 
        }),
      ],
    })
  ],

})
