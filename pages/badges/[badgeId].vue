<template>
  <div class="container">
    <Badge :badge="badge" />
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
  height: 100vh;
}
</style>
