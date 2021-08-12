import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxtjs-vuetify-snakebar-example',
    title: 'nuxtjs-vuetify-snakebar-example',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/components.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    // treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      // options: {customProperties: true},
      themes: {
        dark: {
          primary: {
            base: '#E2088A',
            darken1: '#DF028E',
            darken2: '#FF4E4E',
          },
          accent: {
            base: '#D0D0D0',
            darken1: '#fff',
          },
          secondary: {
            base: '#1D1D2C',
            darken1: '#060606',
            darken2: '#272A3E',
            lighten1: '#141E31',
          },
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          // 主色调
          primary: {
            base: '#E2088A',
            darken1: '#DF028E',
            darken2: '#FF4E4E',
          },
          // 字体颜色
          accent: {
            base: '#000000',
            darken1: '#212121',
            darken2: '#333333',
            darken3: '#666666',
            lighten1: '#999999',
            lighten2: '#9E9E9E',
            lighten4: '#F0F0F0',
            lighten5: '#E2E2E2',
          },
          background: {
            base: '#FFFFFF',
            darken1: '#F8F9FD',
            darken2: '#FCFBFA',
          },
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
