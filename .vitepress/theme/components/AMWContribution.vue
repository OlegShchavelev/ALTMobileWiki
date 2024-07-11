<script setup lang="ts">
import { contributions } from '../../data/contributions';
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme';

import { useData } from 'vitepress'
const { frontmatter } = useData();


const { members } = defineProps({
    size: {
        type: String,
        default: 'medium',
    },
    members: {
        type: Object,
        default: () => {
            return contributions ?? [];
        },
    },
});

</script>

<template>
    <VPTeamPage>
        <VPTeamPageTitle>
            <template v-if="frontmatter.longtitle" #title>
                {{ frontmatter.longtitle }}
            </template>
        </VPTeamPageTitle>
        <VPTeamMembers :members="members" />
    </VPTeamPage>
</template>

<style scoped>
.VPTeamPage {
    margin: 0;
}
</style>