<script setup lang="ts">
import { useData } from '../composables/data'

import AMWCategoryPage from './AMWCategoryPage.vue'
import AMWCategoryPageTitle from './AMWCategoryPageTitle.vue'
import AMWCategories from './AMWCategories.vue'
import AMWCategoryPageContent from './AMWCategoryPageContent.vue'

const { frontmatter: fm } = useData()
</script>

<template>
  <AMWCategoryPage>
    <AMWCategoryPageTitle>
      <template #title> {{ fm.categories.title }} </template>
      <template #lead v-if="fm.categories.lead">{{
        fm.categories.lead
      }}</template>
    </AMWCategoryPageTitle>
    <AMWCategories :items="fm.categories.items" />
    <AMWCategoryPageContent>
      <template v-if="fm.categories.content" #content>
        {{ fm.categories.content }}
      </template>
    </AMWCategoryPageContent>
  </AMWCategoryPage>
</template>
