import { defineConfigWithTheme } from 'vitepress'
import { nav, sidebar } from '../data/navigations'
import { packages } from '../../package-lock.json'

export const en = defineConfigWithTheme({
  lang: 'en',
  description: 'the knowledge library of the ALT Mobile operating system',
  head: [
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'ALT Mobile Wiki' }],
    [
      'meta',
      {
        name: 'og:image',
        content: 'https://altmobile.org/og-en-alt-mobile-wiki.jpg'
      }
    ],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://altmobile.org/og-en-alt-mobile-wiki.jpg'
      }
    ]
  ],
  themeConfig: {
    nav: nav.en,
    sidebar: sidebar.en,
    footer: {
      message: 'Released under the <a href="licence/">MIT License</a>',
      copyright: `Copyright © 2024 ALT Mobile Wiki, developed on the platform <a href="//vitepress.dev/" target="_blank">VitePress ${packages['node_modules/vitepress'].version}</a>`
    },
    asideMeta: {
      developer: {
        label: 'Developer'
      },
      keywords: {
        core: {
          name: 'GNOME Core',
          type: 'info'
        },
        circle: {
          name: 'GNOME Circle',
          type: 'success'
        },
        adaptive: {
          name: 'Adaptive',
          type: 'tip'
        },
        proprietary: {
          name: 'Proprietary',
          type: 'danger'
        },
        restrictions: {
          name: 'Regional restrictions',
          type: 'danger'
        },
        oobe: {
          name: 'OOBELOCAL',
          type: 'warning'
        },
        dontthemes: {
          name: 'Please don’t theme',
          type: 'success-1'
        }
      },
      lists: {
        labels: {
          metadata_license: 'Licence',
          homepage: 'Project Website',
          help: 'Help',
          translate: 'Contribute Translations',
          bugtracker: 'Report an Issue'
        }
      },
      links: {
        sisyphus: {
          anchor: 'Sisyphus',
          target: '_blank',
          baseUrl: '//packages.altlinux.org/en/sisyphus/srpms/',
          style:
            '--agw-btn-bg: var(--vp-c-yellow-dimm-1); --agw-btn-color: var(--vp-c-yellow-darker); --agw-btn-hover-bg:var(--vp-c-yellow-dark); --agw-btn-hover-color: var(--vp-c-white);'
        },
        flatpak: {
          anchor: 'Flatpak',
          target: '_blank',
          baseUrl: '//flathub.org/apps/',
          style:
            '--agw-btn-bg: var(--vp-c-blue-dimm-1); --agw-btn-color: var(--vp-c-blue-darker); --agw-btn-hover-bg:var(--vp-c-blue-dark); --agw-btn-hover-color: var(--vp-c-white);'
        },
        about_app: {
          anchor: 'More',
          target: '_blank',
          style:
            '--agw-btn-bg: var(--vp-c-green-dimm-1); --agw-btn-color: var(--vp-c-green-darker); --agw-btn-hover-bg:var(--vp-c-green-dark); --agw-btn-hover-color: var(--vp-c-white);'
        }
      }
    }
  }
})
