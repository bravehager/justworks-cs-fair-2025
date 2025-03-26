<template>
  <div class="links">
    <NuxtLink class="page-link" to="/">Back to badges</NuxtLink>
    <NuxtLink
      class="page-link"
      :to="{ name: 'badges-badgeId-edit', params: { badgeId: badge.id } }"
    >
      Edit
    </NuxtLink>
  </div>
  <div class="badge-container">
    <Badge :badge="badge" :transition-name="`badge-${badge.id}`" />
  </div>
</template>

<script setup lang="ts">
import type { Badge } from "~/types";

const route = useRoute();

const badge = await $fetch<Badge>(`/api/badges/${route.params.badgeId}`);
</script>

<style scoped>
.links {
  display: flex;
  gap: 1rem;
}

.badge-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
