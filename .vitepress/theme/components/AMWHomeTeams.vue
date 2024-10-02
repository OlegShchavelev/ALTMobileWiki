<script setup lang="ts">
import { VPTeamPage } from 'vitepress/theme'
import AMWTeams from './AMWTeams.vue'
import { useData } from '../composables/data'

const { frontmatter: fm } = useData()
</script>

<template>
  <VPTeamPage>
    <AMWTeams
      :title="fm.teams.title"
      :lead="fm.teams.lead"
      :moreText="fm.teams.moreText"
      :moreLink="fm.teams.moreLink"
    />
  </VPTeamPage>
</template>
