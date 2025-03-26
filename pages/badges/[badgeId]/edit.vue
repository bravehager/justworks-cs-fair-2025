<template>
  <h1>Edit badge</h1>
  <BadgeForm :badge="badge" />
</template>

<script setup lang="ts">
import type { Badge } from "~/types";

const route = useRoute();

const badge = await $fetch<Badge>(`/api/badges/${route.params.badgeId}`);
</script>
