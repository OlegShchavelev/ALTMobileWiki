import { defineConfigWithTheme } from 'vitepress'
import { nav, sidebar } from './data/navigations'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  title: "ALT Mobile Wiki",
  titleTemplate: ':title — ALT Mobile Wiki',
  description: "официальная библиотека знаний операционной системы ALT Mobile",
  base: '/ALTMobileWiki/',
  srcDir: './docs',
  locales: {
    root: {
      label: 'Русский',
      lang: 'ru',
      themeConfig: {
        nav: nav.root,
        sidebar: sidebar.root,
        docFooter: {
          prev: 'Предыдущая страница',
          next: 'Следующая страница'
        },
        editLink: {
          pattern: 'https://github.com/OlegShchavelev/ALTRegularGnomeWiki/edit/main/docs/:path',
          text: 'Предложить изменения на этой странице'
        },
        lastUpdated: {
          text: 'Последнее обновление',
          formatOptions: {
            dateStyle: 'medium',
            timeStyle: 'medium'
          }
        },
        returnToTopLabel: 'Наверх',
        sidebarMenuLabel: 'Меню',
        outlineTitle: 'Оглавление',
        notFound: {
          title: 'Страница не найдена',
          quote: 'Похоже, что вы перешли по неверной или устаревшей ссылке. Вы можете воспользоваться поиском.',
          linkText: 'Вернуться на главную'
        },
        asideMeta: {
          developer: {
            label: 'Разрабочик'
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
              name: 'Адаптивный',
              type: 'tip'
            },
            proprietary: {
              name: 'Проприетарное',
              type: 'danger'
            },
            restrictions: {
              name: 'Региональные ограничения',
              type: 'danger'
            },
            altmobile: {
              name: 'ALT Mobile',
              type: 'warning'
            },
            dontthemes: {
              name: 'Please don’t theme',
              type: 'success-1'
            }
          },
          lists: {
            labels: {
              metadata_license: 'Лицензия',
              homepage: 'Сайт проекта',
              help: 'Помощь',
              translate: 'Помощь в переводе',
              bugtracker: 'Сообщить о проблеме'
            },
          },
          links: {
            sisyphus: {
              anchor: 'Сизиф',
              target: '_blank',
              baseUrl: '//packages.altlinux.org/ru/sisyphus/srpms/',
              style: '--agw-btn-bg: var(--vp-c-yellow-dimm-1); --agw-btn-color: var(--vp-c-yellow-darker); --agw-btn-hover-bg:var(--vp-c-yellow-dark); --agw-btn-hover-color: var(--vp-c-white);'
            },
            flatpak: {
              anchor: 'Flatpak',
              target: '_blank',
              baseUrl: '//flathub.org/ru/apps/',
              style: '--agw-btn-bg: var(--vp-c-blue-dimm-1); --agw-btn-color: var(--vp-c-blue-darker); --agw-btn-hover-bg:var(--vp-c-blue-dark); --agw-btn-hover-color: var(--vp-c-white);'
            }
          }
        }
      },
    },
    en: {
      label: 'Английский',
      lang: 'en',
      themeConfig: {
        nav: nav.en,
        sidebar: sidebar.en,
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
            altmobile: {
              name: 'ALT Mobile',
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
            },
          },
          links: {
            sisyphus: {
              anchor: 'Sisyphus',
              target: '_blank',
              baseUrl: '//packages.altlinux.org/en/sisyphus/srpms/',
              style: '--agw-btn-bg: var(--vp-c-yellow-dimm-1); --agw-btn-color: var(--vp-c-yellow-darker); --agw-btn-hover-bg:var(--vp-c-yellow-dark); --agw-btn-hover-color: var(--vp-c-white);'
            },
            flatpak: {
              anchor: 'Flatpak',
              target: '_blank',
              baseUrl: '//flathub.org/apps/',
              style: '--agw-btn-bg: var(--vp-c-blue-dimm-1); --agw-btn-color: var(--vp-c-blue-darker); --agw-btn-hover-bg:var(--vp-c-blue-dark); --agw-btn-hover-color: var(--vp-c-white);'
            },
          }
        }
      },
    }
  },
  vite: {
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
      ],
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/logo.svg', width: 36, height: 36, alt: "ALT Mobile Wike" },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/OlegShchavelev/ALTMobileWiki' }
    ],
    outline: {
      level: [2, 3],
    },
  }
})
