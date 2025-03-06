import { resolve, dirname } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfigWithTheme } from 'vitepress'
import { type AMWTheme } from '../theme/types/index'
import markdownTimeline from 'vitepress-markdown-timeline'
import { tabsMarkdownPlugin as markdownItTabs } from 'vitepress-plugin-tabs'
import markdownItTaskLists from 'markdown-it-task-lists'

import UnoCSS from 'unocss/vite'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'
import Yaml from '@rollup/plugin-yaml'

import {
  GitChangelog,
  GitChangelogMarkdownSection
} from '@nolebase/vitepress-plugin-git-changelog/vite'
import { NolebaseGitChangelogOptions } from './plugins'
import { theme } from 'unocss/preset-wind'

export const shared = defineConfigWithTheme<AMWTheme.Config>({
  title: 'ALT Mobile Wiki',
  titleTemplate: ':title — ALT Mobile Wiki',
  srcDir: './docs',
  cleanUrls: true,
  sitemap: {
    hostname: 'https://altmobile.org'
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],
  vite: {
    plugins: [
      UnoCSS(),
      Yaml(),
      GitChangelog(NolebaseGitChangelogOptions.plugin),
      GitChangelogMarkdownSection(NolebaseGitChangelogOptions.pluginSections),
      vueI18n({
        ssr: true
      })
    ],
    optimizeDeps: {
      exclude: ['@nolebase/vitepress-plugin-enhanced-readabilities/client']
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui'
      ]
    },
    resolve: {
      alias: [
        {
          find: /^.*\/VPTeamMembersItem\.vue$/,
          replacement: fileURLToPath(
            new URL(
              '../theme/components/AMWTeamMembersItem.vue',
              import.meta.url
            )
          )
        }
      ]
    }
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: {
      src: '/logo.svg',
      alt: 'ALT Mobile Wiki'
    },
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
    },
    meta: {
      keywords: {
        core: 'info',
        circle: 'success',
        adaptive: 'tip',
        proprietary: 'danger',
        restrictions: 'danger',
        oobe: 'warning',
        dontthemes: 'success-1'
      },
      actions: {
        sisyphus: {
          theme: 'sisyphus',
          target: '_blank',
          baseUrl: '//packages.altlinux.org/ru/sisyphus/srpms/'
        },
        flatpak: {
          theme: 'flatpak',
          target: '_blank',
          baseUrl: '//flathub.org/ru/apps/'
        },
        more: {
          theme: 'more',
          target: '_blank'
        }
      }
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
  },
  transformPageData(pageData) {
    const canonicalUrl = `https://docs.karkas.chat/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html')

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: canonicalUrl }
    ])
  }
})
