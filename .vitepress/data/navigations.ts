export const nav = {
  root: [
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
  ],
  en: [
    { text: 'Home', link: '/en/' },
    { text: 'Documentation', link: '/en/wiki/' },
    { text: 'GNOME Apps', link: '/en/system/apps-gnome/' },
    {
      text: 'About project',
      items: [
        { text: 'About project', link: '/en/projects/about/' },
        { text: 'Contributions', link: '/en/projects/contributions/' }
      ]
    }
  ]
}

export const sidebar = {
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
          text: 'Package Managers',
          base: '/package-managers',
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
