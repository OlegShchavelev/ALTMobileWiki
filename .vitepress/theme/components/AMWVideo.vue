<script setup lang="ts">
import { computed } from 'vue'

export interface Props {
  id?: string
  rel?: number
  showinfo?: number
  controls?: number
}

const props = withDefaults(defineProps<Props>(), {
  rel: 0,
  showinfo: 0,
  controls: 1
})

const url = computed(
  () =>
    `https://www.youtube.com/embed/${props.id}?rel=${props.rel}&showinfo=${props.showinfo}&controls=${props.controls}`
)
</script>

<template>
  <div v-if="url" class="video-responsive">
    <iframe
      width="100%"
      height="400"
      :src="url"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<style scoped>
.video-responsive {
  margin-top: 1em;
  margin-bottom: 2em;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
}

@media (max-width: 767px) {
  .video-responsive {
    padding-left: 0;
    padding-right: 0;
    border-radius: 0;
    width: auto;
    margin: 0.85rem -1.5rem;
    border-radius: 0;
  }
}
</style>
