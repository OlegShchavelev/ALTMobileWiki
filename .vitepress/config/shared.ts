import { defineConfigWithTheme } from 'vitepress'
import markdownTimeline from "vitepress-markdown-timeline"
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export const shared = defineConfigWithTheme({
    title: "ALT Mobile Wiki",
    titleTemplate: ':title — ALT Mobile Wiki',
    base: '/ALTMobileWiki/',
    srcDir: './docs',
    vite: {
        ssr: {
          noExternal: [
            '@nolebase/vitepress-plugin-enhanced-readabilities',
          ],
        },
      },
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: { src: '/logo.svg', width: 36, height: 36, alt: "ALT Mobile Wike" },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/OlegShchavelev/ALTMobileWiki' }
        ],
        editLink: {
          pattern: 'https://github.com/OlegShchavelev/ALTMobileWiki/tree/main/docs/:path',
        },
        outline: {
          level: [2, 3],
        },
      },
      markdown: {
        container: {
          tipLabel: 'TIPS',
          warningLabel: 'WARNING',
          dangerLabel: 'CAUTION',
          infoLabel: 'NOTE',
          detailsLabel: 'DETAILS'
        },
        config: (md) => {
          md.use(markdownTimeline);
          md.use(tabsMarkdownPlugin)
        },
      },
})