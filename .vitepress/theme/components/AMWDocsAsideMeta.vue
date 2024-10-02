<script setup lang="ts">
import { computed } from 'vue'
import { useData } from '../composables/data'
import AMWAsideMeta from './AMWAsideMeta.vue'
import type { AMWTheme } from '../types/index'

const { frontmatter, theme } = useData()

const fm = computed(() => {
  const appstream = frontmatter.value.appstream ?? {}
  const { icon, name, summary, developer } = appstream
  const aggregation = frontmatter.value.aggregation
  const meta = theme.value.meta

  const keywords = appstream.keywords?.map((keyword: string, key: number) => {
    const types = meta.keywords
    return {
      name: keyword,
      type: types[keyword] ?? 'tip'
    }
  })

  const lists = Object.entries(appstream.url ?? {})?.map(
    ([key, value]: [string, string]) => ({
      caption: key,
      link: value
    })
  )

  const actions = Object.entries(aggregation ?? {})?.map(
    ([key, value]: [string, string]) => ({
      id: value,
      text: key,
      ...meta.actions[key]
    })
  )

  const showAsideMeta = Object.keys(appstream).length

  return {
    showAsideMeta: showAsideMeta,
    appstream: {
      icon: icon,
      name: name,
      summary: summary,
      developer: developer,
      keywords: keywords,
      lists: lists,
      actions: actions
    }
  }
})
</script>

<template>
  <AMWAsideMeta
    class="AMWDocsAsideMeta"
    v-if="fm.showAsideMeta"
    :icon="fm.appstream.icon"
    :name="fm.appstream.name"
    :summary="fm.appstream.summary"
    :developer="fm.appstream.developer"
    :keywords="fm.appstream.keywords"
    :lists="fm.appstream.lists"
    :actions="fm.appstream.actions"
  />
</template>

<style scoped>
.AMWDocsAsideMeta :deep(.VPImage) {
  filter: grayscale(1);
  transition: filter 0.25s;
}

.AMWDocsAsideMeta:hover :deep(.VPImage) {
  filter: grayscale(0) invert(0);
}
</style>
