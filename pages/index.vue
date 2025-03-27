<template>
  <NuxtLink class="new-badge button btn-outline" to="/badges/new">
    <PhosphorIconPlus size="1rem" />
    New Badge
  </NuxtLink>
  <div class="badge-gallery">
    <BadgeGallery :badges="badges" />
  </div>
</template>

<script setup lang="ts">
import type { Badge } from "~/db/schema";

const badges = await $fetch<Badge[]>("/api/badges");
</script>

<style scoped>
.new-badge {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
}

.badge-gallery {
  padding-top: var(--space-3xl);
}
</style>
