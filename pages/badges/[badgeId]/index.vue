<template>
  <NuxtLink class="back-to-gallery button btn-outline" to="/">
    <PhosphorIconArrowLeft size="1rem" />
    Back to Gallery
  </NuxtLink>
  <div class="badge-container">
    <h1>{{ badge.name }}’s Badge</h1>
    <div class="badge-inner">
      <NuxtLink to="/">
        <Badge :badge="badge" :transition-name="`badge-${badge.id}`" />
      </NuxtLink>
    </div>

    <div>
      <p class="description">{{ badge.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Badge } from "~/db/schema";

const route = useRoute();

const badge = await $fetch<Badge>(`/api/badges/${route.params.badgeId}`);
</script>

<style scoped>
.back-to-gallery {
  position: absolute;
  top: var(--space-md);
  left: var(--space-md);
}

.badge-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: var(--space-md);
  padding-bottom: var(--space-xl);
}

.badge-inner {
  width: 100%;
  max-width: 30rem;
}

.description {
  max-width: 30rem;
  text-align: center;
  font-size: var(--text-xl);
  font-style: italic;
}
</style>
