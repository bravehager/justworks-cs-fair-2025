<template>
  <div class="badge-gallery">
    <NuxtLink
      v-for="badge in badges"
      :key="badge.id"
      :to="{ name: 'badges-badgeId', params: { badgeId: badge.id } }"
      prefetch-on="interaction"
    >
      <Badge :badge="badge" :transition-name="`badge-${badge.id}`" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { Badge } from "~/db/schema";

defineProps<{
  badges: Badge[];
}>();
</script>

<style scoped>
.badge-gallery {
  display: grid;
  gap: var(--space-lg);
  padding: var(--space-lg);
}

@media (min-width: 48rem) {
  .badge-gallery {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 64rem) {
  .badge-gallery {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
