<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

import AMWCategoryPage from './AMWCategoryPage.vue'
import AMWCategoryPageTitle from './AMWCategoryPageTitle.vue'
import AMWCategories from './AMWCategories.vue'

const { frontmatter } = useData()
const props = computed(() => frontmatter.value.categories ?? {})
</script>

<template>
  <AMWCategoryPage>
    <AMWCategoryPageTitle>
      <template #title> {{ props.title }} </template>
    </AMWCategoryPageTitle>
    <AMWCategories
      :items="props.items"
      :title="props.title"
      :content="props.content"
    />
  </AMWCategoryPage>
</template>
