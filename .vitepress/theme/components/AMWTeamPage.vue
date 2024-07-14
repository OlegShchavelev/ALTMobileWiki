<script setup lang="ts">
import { useData } from 'vitepress'
import { VPTeamPage, VPTeamPageTitle, VPTeamPageSection, VPTeamMembers } from 'vitepress/theme'

import { data as team } from '../loaders/gitlogDataLoader.data'
import { developersSection, membersSection, teamSorting } from '../../data/team'
import { sortMembers } from '../composables/sorters'

const { frontmatter, localeIndex } = useData()
</script>

<template>
  <ClientOnly>
    <VPTeamPage>
      <VPTeamPageTitle>
        <template v-if="frontmatter.longtitle" #title>
          {{ frontmatter.longtitle }}
        </template>
      </VPTeamPageTitle>

      <div v-if="teamSorting.includes('role')">
        <VPTeamPageSection class="team">
          <template #title>
            {{ developersSection[localeIndex].title }}
          </template>
          <template #lead>
            {{ developersSection[localeIndex].description }}
          </template>
          <template #members>
            <VPTeamMembers
              :members="
                sortMembers(team[localeIndex], teamSorting).filter((member) => member.title.includes('Разработчик') || member.title.includes('Developer'))
              "
            />
          </template>
        </VPTeamPageSection>

        <VPTeamPageSection class="team">
          <template #title>
            {{ membersSection[localeIndex].title }}
          </template>
          <template #lead>
            {{ membersSection[localeIndex].description }}
          </template>
          <template #members>
            <VPTeamMembers
              :members="
                sortMembers(team[localeIndex], teamSorting).filter((member) => !member.title.includes('Разработчик') && !member.title.includes('Developer'))
              "
            />
          </template>
        </VPTeamPageSection>
      </div>

      <div v-if="!teamSorting.includes('role')">
        <VPTeamMembers :members="sortMembers(team, teamSorting)" />
      </div>
    </VPTeamPage>
  </ClientOnly>
</template>

<style scoped>
.VPTeamPage {
  margin-top: 0;
}

.title {
  position: relative;
  display: inline-block;
  padding: 0 24px;
  letter-spacing: 0;
  line-height: 32px;
  font-size: 20px;
  font-weight: 500;
  background-color: var(--vp-c-bg);
}

.team {
  margin-bottom: 40px;
}
</style>