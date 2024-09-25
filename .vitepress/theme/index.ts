import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import AMWDocsAsideMeta from './components/AMWDocsAsideMeta.vue'
import AMWHomeSponsors from './components/AMWHomeSponsors.vue'
import AMWHomeCategories from './components/AMWHomeCategories.vue'
import AMWVideo from './components/AMWVideo.vue'
import AMWTeam from './components/AMWTeam.vue'
import AMWHomeTeams from './components/AMWHomeTeams.vue'
import AGWGnomeAppsList from './components/AMWGnomeAppsList.vue'

import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { NolebaseEnhancedReadabilitiesPlugin } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

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
    app.component('team', AMWTeam)
    app.component('GnomeAppsList', AGWGnomeAppsList)

    app.component('Video', AMWVideo)
    enhanceAppWithTabs(app)
  }
} satisfies Theme
