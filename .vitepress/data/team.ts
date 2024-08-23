import { gitflic, gitverse } from './icons'

/* Параметры страницы участников */

const homeSorting = 'month, commits'
const teamSorting = 'role, commits, month'
const leader = {
  root: 'Олег Щавелев',
  en: 'Oleg Shchavelev'
}
const limit = 6
const developersSection = {
  root: {
    title: 'Разработчики',
    subtitle: 'проекта ALT Mobile Wiki',
    description:
      'Список участников, которые не только внесли свой вклад в расширение базы знаний проекта ALT Mobile Wiki, но и помогли улучшить её внешний вид и функциональность.'
  },
  en: {
    title: 'Developers',
    subtitle: 'project ALT Mobile Wiki',
    description:
      "A list of contributors who have not only contributed to the expansion of the ALT Mobile Wiki project's knowledge base, but have also helped improve its appearance and functionality."
  }
}
const membersSection = {
  root: {
    title: 'Авторы',
    subtitle: 'проекта ALT Mobile Wiki',
    description:
      'Список участников, которые внесли вклад в улучшение контента библиотеки знаний ALT Mobile Wiki.'
  },
  en: {
    title: 'Authors',
    subtitle: 'project ALT Mobile Wiki',
    description:
      'List of contributors who have contributed to improving the content of the ALT Mobile Wiki knowledge library.'
  }
}

export {
  homeSorting,
  teamSorting,
  leader,
  limit,
  membersSection,
  developersSection
}

/* Информация об участниках */

export const contributions = {
  root: [
    {
      avatar: 'https://github.com/OlegShchavelev.png',
      name: 'Олег Щавелев',
      mapByNameAliases: ['OlegShchavelev', 'Oleg Shchavelev', 'Олег Щавелев'],
      title: 'Разработчик, Участник',
      links: [
        { icon: 'github', link: 'https://github.com/OlegShchavelev' },
        {
          icon: {
            svg: gitflic
          },
          link: 'https://gitflic.ru/user/olegshchavelev'
        }
      ]
    },
    {
      avatar: 'https://avatars.githubusercontent.com/u/44705058?v=4',
      name: 'Антон Политов',
      mapByNameAliases: [
        'Ampernic',
        'Антон Политов',
        'Anton Politov',
        'ampernic'
      ],
      title: 'Разработчик, Участник',
      links: [{ icon: 'github', link: 'https://github.com/Ampernic' }]
    },
    {
      avatar: 'https://avatars.githubusercontent.com/u/57626821?v=4',
      name: 'Семён Фомченков',
      mapByNameAliases: ['Semen Fomchenkov', 'Armatik', 'armatik'],
      title: 'Участник',
      links: [
        { icon: 'github', link: 'https://github.com/Armatik' },
        {
          icon: {
            svg: gitflic
          },
          link: 'https://gitflic.ru/user/armatik'
        }
      ]
    },
    {
      name: 'Владимир Васьков',
      mapByNameAliases: ['Rirusha', 'Vladimir Vaskov'],
      title: 'Участник',
      avatar: 'https://github.com/Rirusha.png',
      links: [{ icon: 'github', link: 'https://github.com/Rirusha' }]
    },
    {
      name: 'Артём Быстров',
      mapByNameAliases: ['Ubuntigroid'],
      title: 'Участник',
      avatar: 'https://github.com/Ubuntigroid.png',
      links: [{ icon: 'github', link: 'https://github.com/Ubuntigroid' }]
    },
    {
      avatar: 'https://github.com/X1Z53.png',
      name: 'Давид Султаниязов',
      mapByNameAliases: ['X1Z53', 'x1z53', 'Sultaniiazov David'],
      title: 'Разработчик, Участник',
      links: [
        { icon: 'github', link: 'https://github.com/X1Z53' },
        { icon: { svg: gitverse }, link: 'https://gitverse.ru/x1z53' }
      ]
    }
  ]
}
