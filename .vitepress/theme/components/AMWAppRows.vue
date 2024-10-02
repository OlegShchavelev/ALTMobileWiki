<script setup lang="ts">
import type { AMWTheme } from '../types/index'
import { computed } from 'vue'
import AMWAppRowsItem from './AMWAppRowsItem.vue'

interface Props {
  size?: 'small' | 'medium'
  rows: AMWTheme.AppRows[]
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium'
})

const classes = computed(() => [props.size, `count-${props.rows.length}`])
</script>

<template>
  <div class="AMWAppRows" :class="classes">
    <div class="container">
      <div v-for="row in rows" :key="row.name" class="item">
        <AMWAppRowsItem :size="size" :row="row" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.AMWAppRows.small .container {
  grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
}

.AMWAppRows.small.count-1 .container {
  max-width: 276px;
}
.AMWAppRows.small.count-2 .container {
  max-width: calc(276px * 2 + 24px);
}
.AMWAppRows.small.count-3 .container {
  max-width: calc(276px * 3 + 24px * 2);
}

.AMWAppRows.medium .container {
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
}

@media (min-width: 375px) {
  .AMWAppRows.medium .container {
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  }
}

.AMWAppRows.medium.count-1 .container {
  max-width: 368px;
}
.AMWAppRows.medium.count-2 .container {
  max-width: calc(368px * 2 + 24px);
}

.container {
  display: grid;
  gap: 24px;
  margin: 0 auto;
  max-width: 1152px;
}
</style>
