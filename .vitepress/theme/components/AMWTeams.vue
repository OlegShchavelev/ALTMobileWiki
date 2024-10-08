<script setup lang="ts">
import { computed } from 'vue'
import { useData } from '../composables/data'
import { VPTeamPageTitle, VPTeamMembers, VPButton } from 'vitepress/theme'
import AMWTeamPageAction from './AMWTeamPageAction.vue'
import teams from '../../data/teams.data.yaml'

const { site } = useData()
const lang = computed(() => site.value.lang.replace('ru-RU', 'ru'))

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
  <VPTeamMembers
    :members="
      teams
        .map((team: any) => ({
          ...team,
          name: team.name[lang] ?? team.name,
          desc:
            typeof team.desc === 'object' && Object.keys(team.desc).length
              ? team.desc[lang]
              : team.desc
        }))
        .slice(0, 6)
    "
  />
  <AMWTeamPageAction>
    <template v-if="moreLink" #action>
      <VPButton :text="moreText" class="button" size="big" :href="moreLink" />
    </template>
  </AMWTeamPageAction>
</template>
