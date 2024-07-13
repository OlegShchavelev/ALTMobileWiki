import { gitflic, gitverse } from './icons'

/* Параметры страницы участников */

const homeSorting = 'month, commits'
const teamSorting = 'role, commits, month'
const leader = 'Олег Щавелев'
const limit = 6
const developersSection = {
  title: 'Разработчики',
  description:
    'Люди, которые активно участвуют не только в расширении базы знаний, но и в улучшении её функционала.'
}
const membersSection = {
  title: 'Авторы',
  description: 'Люди, которые участвуют в улучшении и создании новых статей.'
}

export { homeSorting, teamSorting, leader, limit, membersSection, developersSection }


/* Информация об участниках */

export const contributions = [
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
    avatar: 'https://avatars.githubusercontent.com/u/57626821?v=4',
    name: 'Семен Фомченков',
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
    avatar: 'https://github.com/Rirusha.png',
    links: [{ icon: 'github', link: 'https://github.com/Rirusha'}]
  },
  {
    name: 'Артем Быстров',
    mapByNameAliases: ['Ubuntigroid'],
    avatar: 'https://github.com/Ubuntigroid.png',
    links: [{ icon: 'github', link: 'https://github.com/Ubuntigroid'}]
  }
]