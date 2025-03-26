<template>
  <NuxtLink class="page-link" to="/badges/new">Create a new badge</NuxtLink>
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

.page-link {
  display: block;
  margin-bottom: 1rem;
  border: 1px solid #000;
  padding: 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: #000;
  background-color: #0070d4;
  width: fit-content;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}
</style>
