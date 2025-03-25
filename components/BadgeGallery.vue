<template>
  <div class="badge-gallery">
    <Badge v-for="badge in badges" :key="badge.id" :badge="badge" />
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
</style>
