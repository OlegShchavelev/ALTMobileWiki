import { type DefaultTheme } from 'vitepress'

type SocialLinkIcon = DefaultTheme.SocialLinkIcon | 'telegram' | 'gitflic'

interface SocialLink extends Omit<DefaultTheme.SocialLink, 'icon'> {
  icon: SocialLinkIcon
}

export type Collaborator = 'knowledge' | 'maintainer'

export namespace AMWTheme {
  export interface Config extends Omit<DefaultTheme.Config, 'socialLinks'> {
    socialLinks?: SocialLink[]
  }

  export interface TeamMember extends Omit<DefaultTheme.TeamMember, 'links'> {
    links: SocialLink[]
    collaborator: Collaborator[]
  }
}
