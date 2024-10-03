<script setup lang="ts">
import { VPTeamPageTitle, VPTeamMembers, VPButton } from 'vitepress/theme'
import AMWTeamPageAction from './AMWTeamPageAction.vue'
import teams from '../../data/teams.yaml'

defineProps<{
  title: string
  lead?: string
  moreLink?: string
  moreText?: string
}>()
</script>

<template>
  <VPTeamPageTitle>
    <template v-if="title" #title> {{ title }} </template>
    <template v-if="lead" #lead>{{ lead }}</template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="teams.slice(0, 6)" />
  <AMWTeamPageAction>
    <template v-if="moreLink" #action>
      <VPButton :text="moreText" class="button" size="big" :href="moreLink" />
    </template>
  </AMWTeamPageAction>
</template>
