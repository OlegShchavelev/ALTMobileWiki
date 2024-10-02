<script setup lang="ts">
import type { AMWTheme } from '../types/index'
import AMWAppPageSection from './AMWAppPageSection.vue'
import AMWAppRows from './AMWAppRows.vue'
import apps from '../../../docs/system/apps-gnome/apps.json'

export interface App {
  title: string
  lead?: string
  size?: 'small' | 'medium'
}

defineProps<{
  rows: App[]
}>()
</script>

<template>
  <AMWAppPageSection v-for="row in rows">
    <template #title> {{ row.title }}</template>
    <template v-if="row.lead" #lead> {{ row.lead }}</template>
    <template #rows>
      <AMWAppRows :rows="apps" />
    </template>
  </AMWAppPageSection>
</template>

<style scoped>
.AMWAppPageSection + .AMWAppPageSection {
  margin-top: 64px;
}

@media (min-width: 768px) {
  .AMWAppPageSection + .AMWAppPageSection {
    margin-top: 96px;
  }
}
</style>
