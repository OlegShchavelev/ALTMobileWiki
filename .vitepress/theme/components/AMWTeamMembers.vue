<script setup lang="ts">
import { VPTeamPageSection, VPTeamMembers } from 'vitepress/theme'
import { type Collaborator, type AMWTheme } from '../types/index'
import teams from '../../data/teams.yaml'

export interface Member {
  title: string
  lead?: string
  collaborator: Collaborator
  size?: 'small' | 'medium'
}

defineProps<{
  members: Member[]
}>()
</script>

<template>
  <VPTeamPageSection v-for="member in members">
    <template #title> {{ member.title }}</template>
    <template v-if="member.lead" #lead> {{ member.lead }}</template>
    <template #members>
      <VPTeamMembers
        :size="member.size"
        :members="
          teams.filter((team) =>
            team.collaborator.includes(member.collaborator)
          )
        "
      />
    </template>
  </VPTeamPageSection>
</template>

<style scoped>
.VPTeamPageSection + .VPTeamPageSection {
  margin-top: 64px;
}

@media (min-width: 768px) {
  .VPTeamPageSection + .VPTeamPageSection {
    margin-top: 96px;
  }
}
</style>
