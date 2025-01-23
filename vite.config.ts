import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: "css" })],
      // 如果需要自定义主题色，则需要配置importStyle: 'less',并安装less: npm install less --save-dev
    }),
  ],
  resolve: {
    // 配置路径别名
    alias: {
      "@": "./src",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@/assets/scss/index.scss';",
      },
    },
  },
  server: {
    host: "192.168.1.8",
    port: 3000,
    //   proxy: {
    //     // 选项写法
    //     "/api": {
    //       target: "http://jsonplaceholder.typicode.com",
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, ""),
    //     },
    //   },
    fs: {
      strict: false,
      allow: [],
    },
  },
});
