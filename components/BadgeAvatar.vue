<template>
  <img :src="avatarUrl" class="badge-avatar" />
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();

const colors = [
  "e5f3ff",
  "b6e5ff",
  "6dc8ff",
  "52b0ff",
  "0092f6",
  "0070d4",
  "0e57b5",
  "1e3d92",
  "15246d",
  "f3b715",
  "ad5e0d",
  "753204",
  "643f00",
  "ddf3ea",
  "98E2C5",
  "65c9a3",
  "00a46b",
  "008354",
  "005133",
  "154d38",
  "fff0eb",
  "ff9f82",
  "fb7f59",
  "df5a31",
  "cb431d",
  "af2c10",
  "832512",
  "762615",
  "f4ebfc",
  "baaaf9",
  "8a73e5",
  "5f43ca",
  "4529b4",
  "423674",
];

const avatarUrl = computed(() => {
  const url = new URL("https://api.dicebear.com/9.x/bottts/svg");
  url.searchParams.set("seed", props.name);
  url.searchParams.set("backgroundColor", "transparent");
  url.searchParams.set("baseColor", colors.join(","));
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
