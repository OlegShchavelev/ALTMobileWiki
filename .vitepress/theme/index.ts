import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import AMWDocsAsideMeta from './components/AMWDocsAsideMeta.vue'
import AMWHomeSponsors from './components/AMWHomeSponsors.vue'
import AMWVideo from './components/AMWVideo.vue'
import AMWTeamPage from './components/AMWTeamPage.vue'
import AMWHomeTeam from './components/AMWHomeTeam.vue'
import AGWGnomeAppsList from './components/AMWGnomeAppsList.vue'

import { NolebaseGitChangelogOptions } from '../config/plugins/index'

import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { NolebaseEnhancedReadabilitiesPlugin } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import { data as team } from './loaders/gitlogDataLoader.data'

import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

import './styles/style.css'
import './styles/theme.css'
import 'uno.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import 'vitepress-markdown-timeline/dist/theme/index.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      'nav-screen-content-after': () =>
        h(NolebaseEnhancedReadabilitiesScreenMenu),
      'aside-outline-after': () => h(AMWDocsAsideMeta),
      'home-features-after': () => [h(AMWHomeTeam), h(AMWHomeSponsors)]
    })
  },
  enhanceApp({ app }) {
    app.use(NolebaseEnhancedReadabilitiesPlugin)
    app.use(NolebaseGitChangelogPlugin, {
      locales: NolebaseGitChangelogOptions.locales,
      mapAuthors: team['root']
    })
    app.component('Contribution', AMWTeamPage)
    app.component('GnomeAppsList', AGWGnomeAppsList)

    app.component('Video', AMWVideo)
    enhanceAppWithTabs(app)
  }
} satisfies Theme
