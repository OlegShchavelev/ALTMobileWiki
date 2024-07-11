<script setup lang="ts">
import { type Ref, computed } from 'vue'
import { useData } from 'vitepress'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue';

import { getThumb, getDeveloper, getKeywords,  getLists, getLinks } from '../composables/asidemeta'
const { frontmatter, theme } = useData()

import AMWAsideMetaList from './AMWAsideMetaList.vue'
import AMWAsideMetaKeyword from './AMWAsideMetaKeyword.vue'
import AMWAsideMetaLink from './AMWAsideMetaLink.vue'

const props = computed(() => {

    if (!frontmatter.value.appstream) {
        return
    }

    const { icon, name, summary, developer, url, keywords } = frontmatter.value.appstream
    const links = frontmatter.value.aggregation
    const config = theme.value.asideMeta

    return {
        thumb: getThumb(icon, name),
        title: summary,
        keywords: getKeywords(keywords, config.keywords),
        developer: getDeveloper(developer, config?.developer?.label),
        lists: getLists(url, config?.lists?.labels),
        links: getLinks(links, config.links)
    }
})

</script>

<template>

    <article v-if="props" class="AMWDocsAsideMeta">
        <figure class="figure" v-if="props.thumb.src">
            <VPImage :image="props.thumb.src" :alt="props.thumb.alt" />
        </figure>
        <div class="body">
            <div v-if="props.title" class="title">{{ props.title }}</div>
            <AMWAsideMetaKeyword :keywords="props.keywords" />
            <div v-if="props.developer" class="developers">
                <figure v-if="props.developer?.avatar" class="avatar">
                    <VPImage :image="props.developer?.avatar" :alt="props.developer?.name" />
                </figure>
                <div>
                    <div class="caption">{{ props.developer?.label }}</div>
                    <div class="name">{{ props.developer?.name }}
                        <span class="nickname">
                            {{ props.developer?.nickname }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <AMWAsideMetaList :lists="props.lists" />
        <AMWAsideMetaLink :links="props.links" />
    </article>
</template>

<style scoped>
.AMWDocsAsideMeta {
    overflow: hidden;
    background-color: var(--vp-c-bg-soft);
    border-radius: 12px;
    margin-top: 24px;
}

.AMWDocsAsideMeta:hover :deep(.VPImage) {
    filter: grayscale(0) invert(0);
}

.body {
    padding: 16px;
}

.title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
}

.title:last-child,
.title:only-child {
    margin-bottom: 0;
}

.figure {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 24px;
}

.figure> :deep(.VPImage) {
    filter: grayscale(1);
    transition: filter 0.25s;
    width: 128px;
    height: 128px;
}

.developers {
    margin-top: 12px;
    display: flex;
    gap: 12px;
}

.avatar {
    position: relative;
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 50%;
    box-shadow: var(--vp-shadow-3);
}

.caption {
    font-size: 12px;
    color: var(--vp-c-text-2);
    font-weight: 500;
}

.name {
    line-height: 1.5;
    font-size: 14px;
}

.nickname {
    display: block;
    font-size: 11px;
    color: var(--vp-c-text-3);
    font-weight: 500;
}
</style>