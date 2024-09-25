<script setup lang="ts">
import { VPTeamPage } from 'vitepress/theme'
import KWTeams from './AMWTeams.vue'
import { useData } from '../composables/data'

const { frontmatter: fm } = useData()
</script>

<template>
  <VPTeamPage>
    <KWTeams
      :title="fm.teams.title"
      :lead="fm.teams.lead"
      :moreText="fm.teams.moreText"
      :moreLink="fm.teams.moreLink"
    />
  </VPTeamPage>
</template>
