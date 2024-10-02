import AMWThemeRuLocale from './ru.yaml'
import AMWThemeEnLocale from './en.yaml'

import { Locale } from '../types/locales'

export const AMWThemeLocales: Record<string, Locale> = {
  'ru-RU': AMWThemeRuLocale,
  ru: AMWThemeRuLocale,
  en: AMWThemeEnLocale
}
