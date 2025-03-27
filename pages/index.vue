<template>
  <BadgeGallery :badges="badges" />
</template>

<script setup lang="ts">
import type { Badge } from "~/db/schema";

const badges = await $fetch<Badge[]>("/api/badges");
</script>
