<template>
  <div class="badge-avatar">
    <ClientOnly>
      <div v-html="svg"></div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();

import { createAvatar } from "@dicebear/core";
import { adventurerNeutral } from "@dicebear/collection";

const avatar = computed(() =>
  createAvatar(adventurerNeutral, {
    size: 100,
    seed: props.name,
    backgroundColor: [],
  })
);

const svg = computed(() => avatar.value?.toString());
</script>

<style scoped>
.badge-avatar {
  width: 100px;
  height: 100px;
}
</style>
