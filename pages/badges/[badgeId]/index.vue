<template>
  <div class="badge-container">
    <div class="badge-inner">
      <NuxtLink to="/">
        <Badge :badge="badge" :transition-name="`badge-${badge.id}`" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Badge } from "~/db/schema";

const route = useRoute();

const badge = await $fetch<Badge>(`/api/badges/${route.params.badgeId}`);
</script>

<style scoped>
.badge-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.badge-inner {
  width: 100%;
  max-width: 30rem;
}
</style>
