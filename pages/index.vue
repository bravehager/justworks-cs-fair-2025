<template>
  <NuxtLink class="page-link" :to="{ name: 'badges-new' }">
    Create a new badge
  </NuxtLink>
  <BadgeGallery :badges="badges" />
</template>

<script setup lang="ts">
const badges = await $fetch("/api/badges");
</script>
