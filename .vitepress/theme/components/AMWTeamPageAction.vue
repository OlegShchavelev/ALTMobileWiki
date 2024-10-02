<template>
  <div class="AMWTeamPageAction">
    <slot name="action" />
  </div>
</template>

<style scoped>
.AMWTeamPageAction {
  padding: 48px 32px;
  text-align: center;
}

@media (min-width: 768px) {
  .AMWTeamPageAction {
    padding: 64px 48px 48px;
  }
}

@media (min-width: 960px) {
  .AMWTeamPageAction {
    padding: 80px 64px 48px;
  }
}
</style>
