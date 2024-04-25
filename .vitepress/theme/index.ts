// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import AMWContribution from './components/AMWContribution.vue'
import AMWDocsAsideMeta from './components/AMWDocsAsideMeta.vue'
import AMWVideo from './components/AMWVideo.vue'

import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu
} from '@nolebase/vitepress-plugin-enhanced-readabilities'

import type { Options } from '@nolebase/vitepress-plugin-enhanced-readabilities'
import { InjectionKey } from '@nolebase/vitepress-plugin-enhanced-readabilities'
import { options as NolebaseEnhancedReadabilitiesOptions } from './plugins/enhanced-readabilities/index'

import './styles/style.css'
import './styles/theme.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/dist/style.css'
import "vitepress-markdown-timeline/dist/theme/index.css"

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
      'aside-outline-after': () => h(AMWDocsAsideMeta),
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.provide(InjectionKey, NolebaseEnhancedReadabilitiesOptions as Options)
    app.component('contribution', AMWContribution);
    app.component('Video', AMWVideo)
  }
} satisfies Theme
