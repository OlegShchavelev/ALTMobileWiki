<script setup lang="ts">
import AMWMetaImage from './AMWMetaImage.vue'
import AMWMetaKeywords from './AMWMetaKeyword.vue'
import AMWMetaDeveloper from './AMWMetaDeveloper.vue'
import AMWMetaLists from './AMWMetaList.vue'
import AMWMetaActions from './AMWMetaActions.vue'
import type { AMWTheme, MetaDeveloper } from '../types/index'

interface Actions {
  id: string
  text: string
  target: string
  theme: string
  baseUrl: string
}

defineProps<{
  icon?: string
  name: string
  summary?: string
  keywords?: AMWTheme.MetaKeywords[]
  developer?: MetaDeveloper
  lists?: AMWTheme.MetaLists[]
  actions?: Actions[]
}>()
</script>

<template>
  <article>
    <div class="card">
      <AMWMetaImage :icon="icon" />
      <div class="body">
        <div class="title" v-if="name">{{ name }}</div>
        <div class="text" v-if="summary">{{ summary }}</div>
        <AMWMetaKeywords :keywords="keywords" />
        <AMWMetaDeveloper :developer="developer" />
      </div>
      <AMWMetaLists :lists="lists" />
      <AMWMetaActions :actions="actions" />
    </div>
  </article>
</template>

<style scoped>
.AMWDocsAsideMeta {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 24px;
}

.card {
  padding-top: 32px;
  background-color: var(--vp-c-bg-soft);
}

.body {
  padding: 24px 16px;
}

.title {
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
}

.text {
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: var(--vp-c-text-2);
}
</style>
