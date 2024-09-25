import { defineConfigWithTheme } from 'vitepress'
import { type AMWTheme } from '../theme/types/index'
import markdownTimeline from 'vitepress-markdown-timeline'
import { tabsMarkdownPlugin as markdownItTabs } from 'vitepress-plugin-tabs'
import markdownItTaskLists from 'markdown-it-task-lists'

import UnoCSS from 'unocss/vite'
import {
  GitChangelog,
  GitChangelogMarkdownSection
} from '@nolebase/vitepress-plugin-git-changelog/vite'
import { NolebaseGitChangelogOptions } from './plugins'

export const shared = defineConfigWithTheme<AMWTheme.Config>({
  title: 'ALT Mobile Wiki',
  titleTemplate: ':title — ALT Mobile Wiki',
  srcDir: './docs',
  cleanUrls: true,
  sitemap: {
    hostname: 'https://altmobile.org'
  },
  vite: {
    plugins: [
      UnoCSS(),
      GitChangelog(NolebaseGitChangelogOptions.plugin),
      GitChangelogMarkdownSection(NolebaseGitChangelogOptions.pluginSections)
    ],
    optimizeDeps: {
      exclude: ['@nolebase/vitepress-plugin-enhanced-readabilities/client']
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui'
      ]
    }
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/logo.svg', width: 36, height: 36, alt: 'ALT Mobile Wike' },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/OlegShchavelev/ALTMobileWiki'
      },
      {
        icon: 'telegram',
        link: 'https://t.me/altmobile_channel'
      }
    ],
    editLink: {
      pattern:
        'https://github.com/OlegShchavelev/ALTMobileWiki/tree/main/docs/:path'
    },
    outline: {
      level: [2, 3]
    }
  },
  markdown: {
    container: {
      tipLabel: 'TIPS',
      warningLabel: 'WARNING',
      dangerLabel: 'CAUTION',
      infoLabel: 'NOTE',
      detailsLabel: 'DETAILS'
    },
    config: (md) => {
      md.use(markdownTimeline)
      md.use(markdownItTabs)
      md.use(markdownItTaskLists)
    }
  }
})
