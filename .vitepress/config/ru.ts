import { defineConfigWithTheme, type DefaultTheme } from 'vitepress'
import { nav, sidebar } from '../data/navigations'
import { packages } from '../../package-lock.json'

export const ru = defineConfigWithTheme({
    lang: 'ru-RU',
    themeConfig: {
        nav: nav.root,
        sidebar: sidebar.root,
        docFooter: {
            prev: 'Предыдущая страница',
            next: 'Следующая страница'
        },
        editLink: {
            pattern: 'https://github.com/OlegShchavelev/ALTMobileWiki/tree/main/docs/:path',
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
        footer: {
            message: 'Опубликовано под <a href="licence/">лицензией MIT</a>',
            copyright: `© 2024 ALT Mobile Wiki, разработано на платформе <a href="//vitepress.dev/" target="_blank">VitePress ${packages['node_modules/vitepress'].version}</a>`
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
                oobe: {
                    name: 'Предустановлено',
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
    }
})