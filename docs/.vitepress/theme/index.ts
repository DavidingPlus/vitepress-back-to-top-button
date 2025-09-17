import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import BackToTopButton from '@davidingplus/vitepress-back-to-top-button'
import '@davidingplus/vitepress-back-to-top-button/style.css'


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp(ctx) {
    BackToTopButton(ctx.app)
  }
} satisfies Theme
