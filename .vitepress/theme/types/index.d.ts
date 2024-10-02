import { type DefaultTheme } from 'vitepress'

type SocialLinkIcon = DefaultTheme.SocialLinkIcon | 'telegram' | 'gitflic'

interface SocialLink extends Omit<DefaultTheme.SocialLink, 'icon'> {
  icon: SocialLinkIcon
}

interface Meta {
  keywords?: MetaKeyword
  actions?: MetaAction
}

type MetaKeyword = Record<MetaKeywordKey, MetaKeywordType>
type MetaAction = Record<MetaActionKey, MetaActions>

export type MetaKeywordKey =
  | 'core'
  | 'circle'
  | 'adaptive'
  | 'proprietary'
  | 'restrictions'
  | 'oobe'
  | 'dontthemes'

export type MetaKeywordType =
  | 'info'
  | 'success'
  | 'tip'
  | 'danger'
  | 'warning'
  | 'success-1'

export type MetaActionKey = 'sisyphus' | 'flatpak' | 'more'
export type MetaActions = {
  theme: MetaActionsTheme
  target: string
  baseUrl?: string
}

export type MetaActionsTheme = 'sisyphus' | 'flatpak' | 'more'
export type Collaborator = 'knowledge' | 'maintainer'

export type MetaDeveloper = {
  avatar: string
  name: string
  nickname: string
}

export namespace AMWTheme {
  export interface Config extends Omit<DefaultTheme.Config, 'socialLinks'> {
    socialLinks?: SocialLink[]
    meta?: Meta
  }

  export interface TeamMember extends Omit<DefaultTheme.TeamMember, 'links'> {
    links: SocialLink[]
    collaborator: Collaborator[]
  }

  // app ----------------------------------------------------------------------

  export interface AppRows {
    name: string
    thumb?: string
    summary?: string
  }

  // meta ----------------------------------------------------------------------

  export interface MetaLists {
    caption: string
    link: string
  }

  export interface MetaKeywords {
    name: MetaKeyword[]
    type: MetaAction[]
  }
}
