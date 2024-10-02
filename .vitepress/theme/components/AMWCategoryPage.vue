<template>
  <div class="AMWCategoryPage">
    <slot />
  </div>
</template>

<style scoped>
.AMWCategoryPage {
  margin: 96px 0;
}

@media (min-width: 768px) {
  .AMWCategoryPage {
    margin: 128px 0;
  }
}
</style>
