<template>
  <div class="badge-gallery">
    <NuxtLink
      v-for="badge in badges"
      :key="badge.id"
      :to="`/badges/${badge.id}`"
      class="badge-link"
    >
      <Badge :badge="badge" :transition-name="`badge-${badge.id}`" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { Badge } from "~/types";

defineProps<{
  badges: Badge[];
}>();
</script>

<style scoped>
.badge-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.badge-link {
  transition: transform 0.3s ease;
}

.badge-link:hover {
  transform: translateY(-5px);
}
</style>
