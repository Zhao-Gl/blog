// https://nuxt.com/docs/api/configuration/nuxt-config
const pkg = require('./package')
module.exports = {
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  mode: 'universal',    // 当前渲染使用模式，分为universal和spa，既然是nuxt开发，那就是universal
  // 全局页头配置 (https://go.nuxtjs.dev/config-head)
  head: {       // 页面head配置信息
    title: pkg.name,        // title
    meta: [         // meat
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
      // 这里可以添加网站验证码信息
      // { name: 'google-site-verification', content: 'xxx' },
      // 实测百度无法通过验证，此问题还没解决
      // { name: 'baidu-site-verification', content: 'code-xxx' },
    ],
    link: [  // favicon，若引用css不会进行打包处理
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // 配置后，会在页面渲染之前加载插件 (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // '@/plugins/element-ui'
  ],
  // 工具module (https://go.nuxtjs.dev/config-modules)
  modules: [
    // '@nuxtjs/axios', // nuxt3 更建议使用 useFetch
    // '@nuxtjs/pwa',
    // '@nuxt/content',
    // '@nuxtjs/robots',
    // '@nuxtjs/sitemap',
  ],
  // 打包配置 (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
    // extend(config, ctx) {       // webpack自定义配置
    // }
  }
}
