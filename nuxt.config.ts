import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  devtools: { enabled: true },
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET
  },
  modules: [
    '@nuxtjs/i18n',
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui'
  ],
  css: [
    '@/assets/css/main.scss'
  ],
  buildModules: ['@nuxt/typescript-build'],
  i18n: {
    locales: [{
      code: 'en',
      file: './lang/en.json'
    }, {
      code: 'ua',
      file: './lang/ua.json'
    }],
    defaultLocale: 'en'
  },
  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: 'authjs'
    }
  },
  headlessui: {
    prefix: 'H'
  }
}

export default config
