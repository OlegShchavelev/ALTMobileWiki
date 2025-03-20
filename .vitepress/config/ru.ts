import { defineConfigWithTheme, type DefaultTheme } from 'vitepress'
import { packages } from '../../package-lock.json'
import type { AMWTheme } from '../theme/types/index'

export const nav = (): DefaultTheme.NavItem[] => [
  { text: 'Главная', link: '/' },
  { text: 'Документация', link: '/wiki/' },
  {
    text: 'О проекте',
    items: [
      { text: 'О проекте', link: '/projects/about/' },
      { text: 'Справочник', link: '/projects/guide-wiki/pages/alteration/' },
      { text: 'Участники', link: '/projects/contributions/' }
    ]
  }
]

export const sidebarProjectGuide = (): DefaultTheme.SidebarItem[] => [
  {
    text: 'Создание страниц',
    base: '/projects/guide-wiki/pages/',
    items: [
      { text: 'Внесение изменений', link: 'alteration/' },
      { text: 'Возможности Markdown', link: 'markdown/' },
      { text: 'Возможности VitePress', link: 'vitepress/' },
      { text: 'Условия и правила размещения', link: 'moderation/' }
    ],
    collapsed: false
  },
  {
    text: 'Макеты',
    base: '/projects/guide-wiki/layouts/',
    items: [
      {
        text: 'Страница приложения',
        link: 'apps/'
      }
    ]
  }
]

export const sidebarDoc = (): DefaultTheme.SidebarItem[] => [
  {
    items: [
      {
        text: 'Установка и обновление',
        base: '/installations',
        items: [
          { text: 'Загрузчик', link: '/booting/' },
          { text: 'Мобильные устройства', link: '/mobile-devices/' },
          {
            text: 'Портативные игровые приставки',
            link: '/portable-game-consoles/'
          },
          {
            text: 'Планшеты',
            link: '/tablets/'
          },
          { text: 'Виртуальная машина', link: '/virtual-machine/' },
          { text: 'LUKS', link: '/luks/' }
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
          { text: 'Telegram Desktop', link: 'telegram-desktop/' },
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
      '/': { base: '/', items: sidebarDoc() },
      '/projects/guide-wiki/': {
        base: '/reference/',
        items: sidebarProjectGuide()
      }
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
