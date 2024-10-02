import { defineConfigWithTheme } from 'vitepress'
import { shared } from './shared'
import { ru } from './ru'
import { en } from './en'
import type { AMWTheme } from '../theme/types/index'

export default defineConfigWithTheme<AMWTheme.Config>({
  ...shared,
  locales: {
    root: { label: 'Русский', ...ru },
    en: { label: 'English', ...en }
  }
})
