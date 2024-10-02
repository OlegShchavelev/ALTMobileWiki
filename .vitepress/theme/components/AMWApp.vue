<script setup lang="ts">
import { VPHomeContent } from 'vitepress/theme'
import { useData } from '../composables/data'
import AMWAppPage from './AMWAppPage.vue'
import AMWAppPageTitle from './AMWAppPageTitle.vue'
import AMWAppSection from './AMWAppSection.vue'

const { frontmatter: fm } = useData()
</script>

<template>
  <AMWAppPage>
    <AMWAppPageTitle>
      <template v-if="fm.longtitle" #title> {{ fm.longtitle }} </template>
      <template v-if="fm.introtext" #lead>{{ fm.introtext }}</template>
    </AMWAppPageTitle>
    <AMWAppSection :rows="fm.rows" />
    <VPHomeContent>
      <Content />
    </VPHomeContent>
  </AMWAppPage>
</template>
