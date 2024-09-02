export const nav = {
  root: [
    { text: 'Главная', link: '/' },
    { text: 'Документация', link: '/wiki/' },
    { text: 'Приложения GNOME', link: '/system/apps-gnome/' },
    {
      text: 'О проекте',
      items: [
        { text: 'О проекте', link: '/projects/about/' },
        {
          text: 'Участие в проекте',
          link: '/projects/guide-wiki/pages/alteration/'
        },
        { text: 'Участники', link: '/projects/contributions/' }
      ]
    }
  ],
  en: [
    { text: 'Home', link: '/en/' },
    { text: 'Documentation', link: '/en/wiki/' },
    { text: 'GNOME Apps', link: '/en/system/apps-gnome/' },
    {
      text: 'About project',
      items: [
        { text: 'About project', link: '/en/projects/about/' },
        {
          text: 'Contributing to a project',
          link: '/en/projects/guide-wiki/pages/alteration'
        },
        { text: 'Contributions', link: '/en/projects/contributions/' }
      ]
    }
  ]
}

export const sidebarDocs = {
  root: [
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
          base: '/apps',
          items: [
            { text: 'Текстовый редактор', link: '/text-editor/' },
            { text: 'Amberol', link: '/amberol/' },
            { text: 'Moonlight', link: '/moonlight/' }
          ],
          collapsed: true
        },
        {
          text: 'Руководство пользователя ALT Mobile',
          base: '/guide-users',
          items: [
            {
              text: 'Игры',
              items: [
                {
                  text: 'Стриминг игр с компьютора на Anbernic',
                  link: '/games/game-steaming/'
                }
              ],
              collapsed: true
            }
          ],
          collapsed: true
        },
        {
          text: 'Пакетные менеджеры',
          base: '/package-managers',
          items: [
            {
              text: 'Flatpak',
              link: '/flatpak/'
            }
          ]
        },
        {
          text: 'Популярные вопросы и ответы',
          link: '/faq/'
        }
      ]
    }
  ],
  en: [
    {
      base: '/en',
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
          base: '/en/apps',
          items: [
            { text: 'Amberol', link: '/amberol/' },
            { text: 'Text Editor', link: '/text-editor/' },
            { text: 'Moonlight', link: '/moonlight/' }
          ],
          collapsed: true
        },
        {
          text: 'Guide ALT Mobile',
          base: '/en/guide-users',
          items: [
            {
              text: 'Game',
              items: [
                {
                  text: 'Game steaming from a computer on Ambernic',
                  link: '/games/game-steaming/'
                }
              ],
              collapsed: true
            }
          ],
          collapsed: true
        },
        {
          text: 'Package Managers',
          base: '/en/package-managers',
          items: [
            {
              text: 'Flatpak',
              link: '/flatpak/'
            }
          ]
        },
        {
          text: 'Frequently asked questions',
          link: '/faq/'
        }
      ]
    }
  ]
}

const sidebarGuideWiki: any = {
  root: [
    {
      text: 'Создание страниц',
      base: '/projects/guide-wiki/pages',
      items: [
        { text: 'Внесение изменений', link: '/alteration/' },
        { text: 'Возможности Markdown', link: '/markdown/' },
        { text: 'Возможности VitePress', link: '/vitepress/' },
        { text: 'Условия и правила размещения', link: '/moderation/' }
      ],
      collapsed: false
    },
    {
      text: 'Макеты',
      base: '/projects/guide-wiki/layouts',
      items: [
        {
          text: 'Програмное обеспечение',
          link: '/apps/'
        }
      ]
    }
  ],
  en: [
    {
      text: 'Creating pages',
      base: '/en/projects/guide-wiki/pages',
      items: [
        { text: 'Alteration', link: '/alteration/' },
        { text: 'Markdown Features', link: '/markdown/' },
        { text: 'VitePress Features', link: '/vitepress/' },
        { text: 'Terms and conditions', link: '/moderation/' }
      ],
      collapsed: false
    },
    {
      text: 'Layout',
      base: '/en/projects/guide-wiki/layouts',
      items: [
        {
          text: 'Software',
          link: '/apps/'
        }
      ]
    }
  ]
}

export const sidebar = {
  root: {
    '/': sidebarDocs.root,
    '/projects/guide-wiki/': sidebarGuideWiki.root
  },
  en: {
    'en/': sidebarDocs.en,
    'en/projects/guide-wiki/': sidebarGuideWiki.en
  }
}
