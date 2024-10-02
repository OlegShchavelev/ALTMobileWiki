<template>
  <div class="AMWCategoryPageContent">
    <p v-if="$slots.content" class="content">
      <slot name="content" />
    </p>
  </div>
</template>

<style scoped>
.AMWCategoryPageContent {
  padding: 48px 32px;
  text-align: center;
}

@media (min-width: 768px) {
  .AMWCategoryPageContent {
    padding: 64px 48px 48px;
  }
}

@media (min-width: 960px) {
  .AMWCategoryPageContent {
    padding: 80px 64px 48px;
  }
}

.content {
  margin: 0 auto;
  max-width: 512px;
}

@media (min-width: 768px) {
  .content {
    max-width: 592px;
  }
}
</style>
