import { default as map } from '../../../data/fullteam.json'

export const NolebaseGitChangelogOptions = {
  plugin: {
    maxGitLogCount: 20000,
    repoURL: 'https://github.com/OlegShchavelev/ALTMobileWiki',
    mapAuthors: map['root']
  },
  pluginSections: {
    sections: {
      disableChangelog: false,
      disableContributors: false
    }
  }
}
