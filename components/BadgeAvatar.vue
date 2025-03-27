<template>
  <img :src="avatarUrl" class="badge-avatar" />
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();

const avatarUrl = computed(() => {
  const url = new URL("https://api.dicebear.com/9.x/bottts/svg");
  url.searchParams.set("seed", props.name);
  url.searchParams.set("backgroundColor", "transparent");
  return url.toString();
});
</script>

<style scoped>
.badge-avatar {
  width: 4rem;
  height: 4rem;
  border-radius: var(--radius-round);
  background-color: var(--color-white);
  padding: var(--space-xs);
  border: 0.15rem solid var(--color-gray-100);
  box-shadow: var(--color-box-shadow);
}
</style>
