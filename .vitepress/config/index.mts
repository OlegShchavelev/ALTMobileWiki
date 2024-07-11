import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { ru } from './ru'
import { en } from './en'

export default defineConfig({
    ...shared,
    locales: {
        root: { label: 'Русский', ...ru },
        en: { label: 'English', ...en },
    }
})  