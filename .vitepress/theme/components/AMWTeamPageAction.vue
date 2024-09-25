<template>
  <div class="VPTeamPageAction">
    <slot name="action" />
  </div>
</template>

<style scoped>
.VPTeamPageAction {
  padding: 48px 32px;
  text-align: center;
}

@media (min-width: 768px) {
  .VPTeamPageAction {
    padding: 64px 48px 48px;
  }
}

@media (min-width: 960px) {
  .VPTeamPageAction {
    padding: 80px 64px 48px;
  }
}
</style>
