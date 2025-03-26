<template>
  <div class="badge" :style="{ backgroundColor: badge.color }">
    <div class="badge-content">
      <BadgeAvatar :name="badge.name" />
      <div class="badge-text">
        <strong>{{ badge.name }}</strong> is a
        <strong>{{ badge.title }}</strong> in
        <strong>{{ badge.location }}</strong> earning
        <strong>{{ badge.salary }}</strong> from
        <strong>{{ badge.borough }}</strong>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Badge } from "~/types";

defineProps<{
  badge: Badge;
  transitionName?: string;
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
  view-transition-name: v-bind(transitionName);
}

.badge-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.badge-text {
  text-align: center;
  line-height: 1.4;
}
</style>
