import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

export default defineNuxtConfig({
  ssr: false,

  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    'nuxt-vuefire'
  ],

  vuefire: {
    auth: true,
    config: {
      apiKey: "AIzaSyBzJySXcZJgvYbXJzSe7rhDRnulMflQHZE",
      authDomain: "cardpdfs.firebaseapp.com",
      projectId: "cardpdfs",
      storageBucket: "cardpdfs.appspot.com",
      messagingSenderId: "499061288664",
      appId: "1:499061288664:web:82c134c23a11d7b01571ad",
      measurementId: "G-V1KQ8K4CG1"
    },
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  pwa,

  devtools: {
    enabled: true,
  },
})
