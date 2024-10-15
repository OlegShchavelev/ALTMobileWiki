import { defineConfigWithTheme, type DefaultTheme } from 'vitepress'
import { packages } from '../../package-lock.json'
import type { AMWTheme } from '../theme/types/index'

export const nav = (): DefaultTheme.NavItem[] => [
  { text: 'Главная', link: '/' },
  { text: 'Документация', link: '/wiki/' },
  { text: 'Приложения GNOME', link: '/system/apps-gnome/' },
  {
    text: 'О проекте',
    items: [
      { text: 'О проекте', link: '/projects/about/' },
      { text: 'Участники', link: '/projects/contributions/' }
    ]
  }
]

export const sidebarDoc = (): DefaultTheme.SidebarItem[] => [
  {
    items: [
      {
        text: 'Установка и обновление',
        base: '/instalations',
        items: [
          { text: 'Загрузчик', link: '/booting/' },
          { text: 'Мобильные устройства', link: '/mobile-devices/' },
          {
            text: 'Портативные игровые приставки',
            link: '/portable-game-consoles/'
          },
          { text: 'Виртуальная машина', link: '/virtual-machine/' }
        ],
        collapsed: true
      },
      {
        text: 'Програмное обеспечение',
        base: '/apps/',
        items: [
          { text: 'Текстовый редактор', link: 'text-editor/' },
          { text: 'Amberol', link: 'amberol/' },
          { text: 'Moonlight', link: 'moonlight/' },
          { text: 'Screenshot', link: 'screenshot/' },
          { text: 'Туба', link: 'tuba/' }
        ],
        collapsed: true
      },
      {
        text: 'Руководство пользователя ALT Mobile',
        base: '/guide-users/',
        items: [
          {
            text: 'Игры',
            items: [
              {
                text: 'Стриминг игр с компьютора на Anbernic',
                link: 'games/game-steaming/'
              }
            ],
            collapsed: true
          },
          {
            text: 'Cети',
            items: [
              {
                text: 'Мобильный интернет',
                link: 'net/mobile-internet/'
              }
            ]
          }
        ],
        collapsed: true
      },
      {
        text: 'Пакетные менеджеры',
        base: '/package-managers/',
        items: [
          {
            text: 'Flatpak',
            link: 'flatpak/'
          }
        ]
      },
      {
        text: 'Популярные вопросы и ответы',
        link: 'faq/'
      }
    ]
  }
]

export const ru = defineConfigWithTheme<AMWTheme.Config>({
  lang: 'ru-RU',
  description: 'библиотека знаний операционной системы ALT Mobile',
  head: [
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'ru-RU' }],
    ['meta', { name: 'og:site_name', content: 'ALT Mobile Wiki' }],
    [
      'meta',
      {
        name: 'og:image',
        content: 'https://altmobile.org/og-ru-alt-mobile-wiki.jpg'
      }
    ],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://altmobile.org/og-ru-alt-mobile-wiki.jpg'
      }
    ]
  ],
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Поиск',
            buttonAriaLabel: 'Поиск'
          },
          modal: {
            noResultsText: 'Нет результатов по запросу',
            resetButtonTitle: 'Сбросить',
            footer: {
              selectText: 'для выбора',
              navigateText: 'для навигации',
              closeText: 'закрыть'
            }
          }
        }
      }
    },
    nav: nav(),
    sidebar: {
      '/': { base: '/', items: sidebarDoc() }
    },
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },
    editLink: {
      pattern:
        'https://github.com/OlegShchavelev/ALTMobileWiki/tree/main/docs/:path',
      text: 'Предложить изменения на этой странице'
    },
    lastUpdated: {
      text: 'Последнее обновление'
    },
    returnToTopLabel: 'Наверх',
    sidebarMenuLabel: 'Меню',
    outlineTitle: 'Оглавление',
    notFound: {
      title: 'Страница не найдена',
      quote:
        'Похоже, что вы перешли по неверной или устаревшей ссылке. Вы можете воспользоваться поиском.',
      linkText: 'Вернуться на главную'
    },
    footer: {
      message: 'Опубликовано под <a href="licence/">лицензией MIT</a>',
      copyright: `© 2024 ALT Mobile Wiki, разработано на платформе <a href="//vitepress.dev/" target="_blank">VitePress ${packages['node_modules/vitepress'].version}</a>`
    }
  }
})
