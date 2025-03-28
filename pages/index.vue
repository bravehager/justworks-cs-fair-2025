<template>
  <div class="header">
    <div>
      <label for="borough">Borough</label>
      <select id="borough" v-model="borough" required>
        <option value=""></option>
        <option value="Manhattan">Manhattan</option>
        <option value="Brooklyn">Brooklyn</option>
        <option value="Queens">Queens</option>
        <option value="The Bronx">The Bronx</option>
        <option value="Staten Island">Staten Island</option>
      </select>
    </div>

    <NuxtLink class="button btn-outline" to="/badges/new">
      <PhosphorIconPlus size="1rem" />
      New Badge
    </NuxtLink>
  </div>

  <div class="badge-gallery">
    <BadgeGallery :badges="currentBadges" />
  </div>
</template>

<script setup lang="ts">
import type { Badge } from "~/db/schema";
const borough = ref("");
const badges = await $fetch<Badge[]>("/api/badges");

const currentBadges = computed(() => {
  if (borough.value) {
    return badges.filter((badge) => badge.borough === borough.value);
  }
  return badges;
});
</script>

<style scoped>
.header {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.badge-gallery {
  padding-top: var(--space-3xl);
}
</style>
