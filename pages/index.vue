<template>
  <div class="header">
    <div class="header-left"></div>
    <img class="logo" src="~/assets/justworks-logo.svg" />
    <div class="header-right">
      <div>
        <label for="borough">Borough</label>
        <Select id="borough" v-model="borough" required>
          <option value=""></option>
          <option value="Manhattan">Manhattan</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Queens">Queens</option>
          <option value="The Bronx">The Bronx</option>
          <option value="Staten Island">Staten Island</option>
        </Select>
      </div>

      <div>
        <NuxtLink class="button btn-outline" to="/badges/new">
          <PhosphorIconPlus size="1rem" />
          New Badge
        </NuxtLink>
      </div>
    </div>
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
  left: var(--space-md);
  right: var(--space-md);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: var(--space-md);
}

.header-left {
  display: flex;
  gap: var(--space-md);
  justify-content: flex-start;
  align-items: flex-end;
}

.header-center {
  flex-grow: 1;
}

.header-right {
  display: flex;
  gap: var(--space-md);
  justify-content: flex-end;
  align-items: flex-end;
}

.badge-gallery {
  padding-top: var(--space-4xl);
}
</style>
