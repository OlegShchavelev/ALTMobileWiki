import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { useData } from 'vitepress'

import { AMWThemeLocales } from '../locales/index'

export const useI18n = createI18n({
  locale: 'ru-RU',
  messages: AMWThemeLocales
})
