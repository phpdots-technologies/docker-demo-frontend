export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'micro-service',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/components.js',
    '~plugins/mixins.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: "http://localhost:8000/api",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
        'vee-validate/dist/rules'
    ],
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  }
}
