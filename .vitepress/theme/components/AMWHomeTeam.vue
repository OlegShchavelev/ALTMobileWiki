<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPButton,
  VPTeamMembers
} from 'vitepress/theme'

import { sortMembers } from '../composables/sorters'
import { homeSorting, limit } from '../../data/team'
import { data as team } from '../loaders/gitlogDataLoader.data'

const { frontmatter, localeIndex } = useData()
const props = computed(() => frontmatter.value.teams ?? {})
</script>

<template>
  <ClientOnly>
    <VPTeamPage>
      <VPTeamPageTitle>
        <template #title v-if="props.title">{{ props.title }}</template>
      </VPTeamPageTitle>
      <VPTeamMembers
        :members="sortMembers(team[localeIndex], homeSorting).slice(0, limit)"
      />
      <div class="teamButton" v-if="props.moreLink">
        <VPButton
          :text="props.moreText"
          class="button"
          size="big"
          :href="props.moreLink"
        />
      </div>
    </VPTeamPage>
  </ClientOnly>
</template>

<style scoped>
.teamButton {
  margin-top: 40px;
  display: grid;
  place-items: center;
}
</style>
