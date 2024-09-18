<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme'
import { useData } from '../composables/data'

const { frontmatter: fm } = useData()
</script>

<template>
  <VPHomeSponsors
    v-if="fm.sponsors.data"
    :message="fm.sponsors.message"
    :data="fm.sponsors.data"
  />
</template>

<style scoped>
.VPHomeSponsors:deep(.VPSponsorsGrid.big .vp-sponsor-grid-image) {
  max-width: 170px;
  max-height: 120px;
}
</style>
