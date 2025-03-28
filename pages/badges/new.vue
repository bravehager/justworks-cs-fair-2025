<template>
  <NuxtLink class="all-badges button btn-outline" to="/">
    All Badges
  </NuxtLink>

  <div class="badge-form">
    <BadgeForm v-model="badge" @submit="handleSubmit" />
  </div>
  <div class="badge-preview">
    <BadgePreview />
  </div>
</template>

<script setup lang="ts">
import type { Badge } from "~/db/schema";

const router = useRouter();

const badge = ref<Omit<Badge, "id" | "createdAt" | "updatedAt">>({
  name: "",
  title: "",
  location: "",
  salary: "",
  borough: "",
});

async function handleSubmit() {
  const response = await $fetch("/api/badges", {
    method: "post",
    body: badge.value,
  });
  await router.push(`/badges/${response.id}`);
}
</script>

<style scoped>
.all-badges {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
}


.badge-form {
  padding: var(--space-xl);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-gray-200);
}
</style>
