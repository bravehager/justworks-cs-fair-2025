<template>
  <BadgeGallery :badges="badges" />
</template>

<script setup lang="ts">
const badges = await $fetch("/api/badges");
</script>
