<template>
  <div class="badge" :style="{ backgroundColor: badge.color }">
    <BadgeAvatar :name="badge.name" />
    <div>
      <strong>{{ badge.name }}</strong> is a
      <strong>{{ badge.title }}</strong> in
      <strong>{{ badge.location }}</strong> earning
      <strong>{{ badge.salary }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Badge } from "~/types";

defineProps<{
  badge: Badge;
}>();
</script>

<style scoped>
.badge {
  max-width: 200px;
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
