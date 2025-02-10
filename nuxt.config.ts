// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-02-07',
  devtools: { enabled: true },
  // 全局css配置
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/global.css',
  ],
  // 配置后，会在页面渲染之前加载插件 (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // '@/plugins/element-ui'
  ],
  // 工具module (https://go.nuxtjs.dev/config-modules)
  modules: [
    // "@nuxtjs/style-resources"
    // '@nuxtjs/axios', // nuxt3 更建议使用 useFetch
    // '@nuxtjs/pwa',
    // '@nuxt/content',
    // '@nuxtjs/robots',
    // '@nuxtjs/sitemap',
  ],
  // 打包配置 (https://go.nuxtjs.dev/config-build)
  build: {
    // transpile: [/^element-ui/],
    // extend(config, ctx) {       // webpack自定义配置
    // }
  }
})
