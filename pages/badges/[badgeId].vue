<template>
  <NuxtLink class="page-link" to="/">Back to badges</NuxtLink>
  <div class="container">
    <Badge :badge="badge" :transition-name="`badge-${badge.id}`" />
  </div>
</template>

<script setup lang="ts">
import type { Badge } from "~/types";

const route = useRoute();

const badge = await $fetch<Badge>(`/api/badges/${route.params.badgeId}`);
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
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
