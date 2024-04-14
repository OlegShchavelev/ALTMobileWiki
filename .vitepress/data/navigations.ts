export const nav = {
    'root': [
        { text: 'Главная', link: '/' },
        { text: 'Документация', link: '/wiki/' },
        {
            text: 'О проекте', items: [
                { text: 'О проекте', link: '/projects/about/' },
                { text: 'Участники', link: '/projects/contributions/' }
            ]
        },
    ],
    'en': [
        { text: 'Home', link: '/en/' },
        { text: 'Documentation', link: '/en/wiki/' },
        {
            text: 'About project', items: [
                { text: 'About project', link: '/en/projects/about/' },
                { text: 'Contributions', link: '/en/projects/contributions/' }
            ]
        },
    ]
}

export const sidebar = {
    'root': [
        {
            items: [
                {
                    text: 'Установка и обновление', base: '/instalations', items: [
                        { text: 'Загрузчик', link: '/booting/' },
                        { text: 'ALT Mobile', link: '/alt-mobile/' }
                    ],
                    collapsed: true
                }, {
                    text: 'Програмное обеспечение', base: '/apps', items: [
                        { text: 'Текстовый редактор', link: '/text-editor/' },
                        { text: 'Amberol', link: '/amberol/' }
                    ],
                    collapsed: true
                }, {
                    text: 'Популярные вопросы и ответы', link: '/faq/'
                }]
        }
    ],
    'en': [
        {
            base: '/en',
            items: [
                {
                    text: 'Installation and update', base: '/en/instalations', items: [
                        { text: 'The loader', link: '/booting/' },
                        { text: 'ALT Mobile', link: '/alt-mobile/' }
                    ],
                    collapsed: true
                }, {
                    text: 'Software', base: '/en/apps', items: [
                        { text: 'Amberol', link: '/amberol/' },
                        { text: 'Text Editor', link: '/text-editor/' }
                    ],
                    collapsed: true
                }, {
                    text: 'Frequently asked questions', link: '/faq/'
                }
            ]
        }
    ],
}