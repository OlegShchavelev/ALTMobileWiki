import { defineConfig } from 'vitepress'
import { nav, sidebar } from './data/navigations'

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
        }
      },
    },
    en: {
      label: 'Английский',
      lang: 'en',
      themeConfig: {
        nav: nav.en,
        sidebar: sidebar.en
      }
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
