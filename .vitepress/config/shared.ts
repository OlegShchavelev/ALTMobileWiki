import { defineConfig } from 'vitepress'
import markdownTimeline from "vitepress-markdown-timeline"
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import UnoCSS from 'unocss/vite'
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite'

import { telegram } from '../data/icons'

export const shared = defineConfig({
  title: "ALT Mobile Wiki",
  titleTemplate: ':title — ALT Mobile Wiki',
  base: '/ALTMobileWiki/',
  srcDir: './docs',
  vite: {
    plugins: [
      UnoCSS(),
      GitChangelog({
        // Fill in your repository URL here
        repoURL: () => 'https://github.com/OlegShchavelev/ALTMobileWiki',
      }),
      GitChangelogMarkdownSection(),
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
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/logo.svg', width: 36, height: 36, alt: "ALT Mobile Wike" },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/OlegShchavelev/ALTMobileWiki' },
      {
        icon: {
          svg: telegram
        }, link: 'https://t.me/altmobile_channel'
      }
    ],
    editLink: {
      pattern: 'https://github.com/OlegShchavelev/ALTMobileWiki/tree/main/docs/:path',
    },
    outline: {
      level: [2, 3],
    },
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
      md.use(markdownTimeline);
      md.use(tabsMarkdownPlugin)
    },
  },
})