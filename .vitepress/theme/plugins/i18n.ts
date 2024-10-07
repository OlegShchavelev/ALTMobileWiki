import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import { AMWThemeLocales } from '../locales/index'

export const useI18n = createI18n({
  legacy: false,
  locale: 'ru-RU',
  messages: AMWThemeLocales
})
