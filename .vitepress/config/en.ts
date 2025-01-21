import { defineConfigWithTheme, type DefaultTheme } from 'vitepress'
import { packages } from '../../package-lock.json'
import type { AMWTheme } from '../theme/types/index'

export const nav = (): DefaultTheme.NavItem[] => [
  { text: 'Home', link: '/en/' },
  { text: 'Documentation', link: '/en/wiki/' },
  {
    text: 'About project',
    items: [
      { text: 'About project', link: '/en/projects/about/' },
      { text: 'Contributions', link: '/en/projects/contributions/' }
    ]
  }
]

export const sidebarDoc = (): DefaultTheme.SidebarItem[] => [
  {
    items: [
      {
        text: 'Installation and update',
        base: '/en/instalations',
        items: [
          { text: 'The loader', link: '/booting/' },
          { text: 'Mobile devices', link: '/mobile-devices/' },
          {
            text: 'Portable Game Consoles',
            link: '/portable-game-consoles/'
          },
          { text: 'Virtual machine', link: '/virtual-machine/' }
        ],
        collapsed: true
      },
      {
        text: 'Software',
        base: '/en/apps/',
        items: [
          { text: 'Amberol', link: 'amberol/' },
          { text: 'Text Editor', link: 'text-editor/' },
          { text: 'Screenshot', link: 'screenshot/' },
          { text: 'Telegram Desktop', link: 'telegram-desktop/' },
          { text: 'Tuba', link: 'tuba/' }
        ],
        collapsed: true
      },
      {
        text: 'Guide ALT Mobile',
        base: '/en/guide-users/',
        items: [
          {
            text: 'Game',
            items: [
              {
                text: 'Game steaming from a computer on Ambernic',
                link: 'games/game-steaming/'
              }
            ],
            collapsed: true
          }
        ],
        collapsed: true
      },
      {
        text: 'Package Managers',
        base: '/en/package-managers/',
        items: [
          {
            text: 'Flatpak',
            link: 'flatpak/'
          }
        ]
      },
      {
        text: 'Frequently asked questions',
        link: 'faq/'
      }
    ]
  }
]

export const en = defineConfigWithTheme<AMWTheme.Config>({
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
    nav: nav(),
    sidebar: {
      '/': { base: '/en/', items: sidebarDoc() }
    },
    footer: {
      message: 'Released under the <a href="licence/">MIT License</a>',
      copyright: `Copyright © 2024 ALT Mobile Wiki, developed on the platform <a href="//vitepress.dev/" target="_blank">VitePress ${packages['node_modules/vitepress'].version}</a>`
    }
  }
})
