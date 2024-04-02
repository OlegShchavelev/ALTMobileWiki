<template>
    <VPTeamPage>
        <VPTeamPageTitle>
            <template v-if="frontmatter.title" #title>
                {{ frontmatter.title }}
            </template>
        </VPTeamPageTitle>
        <VPTeamMembers :members="members" />
    </VPTeamPage>
</template>

<script setup>
import { contributions } from '../../data/contributions';

import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme';
import { useData } from 'vitepress'
const { frontmatter } = useData();

const { members, size } = defineProps({
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

<style scoped>
.VPTeamPage {
    margin: 0;
}
</style>