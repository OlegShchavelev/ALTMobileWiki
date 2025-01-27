import { h, watch } from 'vue'
import { useData, type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import AMWDocsAsideMeta from './components/AMWDocsAsideMeta.vue'
import AMWHomeSponsors from './components/AMWHomeSponsors.vue'
import AMWHomeCategories from './components/AMWHomeCategories.vue'
import AMWVideo from './components/AMWVideo.vue'
import AMWTeam from './components/AMWTeam.vue'
import AMWTeams from './components/AMWTeams.vue'
import AMWHomeTeams from './components/AMWHomeTeams.vue'
import AMWApp from './components/AMWApp.vue'

import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { NolebaseEnhancedReadabilitiesPlugin } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

import { useI18n } from './plugins/i18n'

import './styles/style.css'
import './styles/theme.css'
import './styles/icons.css'
import 'uno.css'
import 'vitepress-markdown-timeline/dist/theme/index.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () =>
        h(NolebaseEnhancedReadabilitiesScreenMenu),
      'aside-outline-after': () => h(AMWDocsAsideMeta),
      'home-features-after': () => [
        h(AMWHomeCategories),
        h(AMWHomeTeams),
        h(AMWHomeSponsors)
      ]
    })
  },
  enhanceApp({ app }) {
    app.use(NolebaseEnhancedReadabilitiesPlugin)
    app.use(NolebaseGitChangelogPlugin)
    app.use(useI18n)
    app.component('team', AMWTeam)
    app.component('Teams', AMWTeams)
    app.component('app', AMWApp)
    app.component('Video', AMWVideo)
    enhanceAppWithTabs(app)
  },
  setup() {
    const { lang } = useData()
    watch(
      lang,
      (val) => {
        useI18n.global.locale.value = val
      },
      { immediate: true }
    )
  }
} satisfies Theme
