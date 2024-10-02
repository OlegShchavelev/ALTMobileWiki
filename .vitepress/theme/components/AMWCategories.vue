<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import AGWCategory from './AMWCategoriesItem.vue'

export interface Items {
  title: string
  icon?: DefaultTheme.FeatureIcon
  pages: [
    {
      name: string
      link: string
    }
  ]
}

defineProps<{
  content?: string
  items: Items[]
}>()
</script>

<template>
  <div v-if="items" class="AGWCatigories">
    <div class="container">
      <div class="items">
        <div v-for="item in items" :key="item.title" class="item grid-4">
          <AGWCategory
            :title="item.title"
            :icon="item.icon"
            :apps="item.pages"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.AGWCatigories {
  padding: 0 24px;
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

h2 {
  font-size: 24px;
  line-height: 56px;
  margin-bottom: 16px;
  font-weight: bold;
  letter-spacing: -0.02em;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.item {
  padding: 8px;
  width: 100%;
}

@media (min-width: 640px) {
  .item.grid-4 {
    width: calc(100% / 2);
  }
}

@media (min-width: 960px) {
  .item.grid-4 {
    width: calc(100% / 4);
  }
}
</style>
