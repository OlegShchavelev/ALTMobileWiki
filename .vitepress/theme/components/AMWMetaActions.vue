<script setup lang="ts">
interface Actions {
  id: string
  text: string
  target: string
  theme: string
  baseUrl: string
}

defineProps<{
  actions: Actions[]
}>()
</script>

<template>
  <div>
    <template v-for="action in actions">
      <a
        :href="(action.baseUrl ?? '') + action.id"
        :target="action.target"
        class="btn"
        :class="action.theme"
        >{{ $t('meta.actions.' + action.text) }}</a
      >
    </template>
  </div>
</template>

<style scoped>
.sisyphus {
  --amw-btn-bg: var(--vp-c-yellow-dimm-1);
  --amw-btn-color: var(--vp-c-yellow-darker);
  --amw-btn-hover-bg: var(--vp-c-yellow-dark);
  --amw-btn-hover-color: var(--vp-c-white);
}

.flatpak {
  --amw-btn-bg: var(--vp-c-blue-dimm-1);
  --amw-btn-color: var(--vp-c-blue-darker);
  --amw-btn-hover-bg: var(--vp-c-blue-dark);
  --amw-btn-hover-color: var(--vp-c-white);
}

.btn {
  padding: 8px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  display: grid;
  background-color: var(--amw-btn-bg);
  color: var(--amw-btn-color);
  font-weight: 700;
}

.btn:hover {
  background-color: var(--amw-btn-hover-bg);
  color: var(--amw-btn-hover-color);
}
</style>
