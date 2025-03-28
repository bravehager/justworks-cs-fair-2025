<template>
  <div class="header">
    <NuxtLink class="button btn-outline" to="/">
      <PhosphorIconArrowLeft size="1rem" />
      Back to Gallery
    </NuxtLink>
  </div>

  <main>
    <div class="badge-form">
      <BadgeForm v-model="form" @submit="handleSubmit" />
    </div>
    <div class="badge-preview">
      <Badge :badge="form" />
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Badge } from "~/db/schema";

const route = useRoute();

const badge = await $fetch<Badge>(`/api/badges/${route.params.badgeId}`);

const form = ref<Omit<Badge, "createdAt" | "updatedAt">>(badge);

const router = useRouter();

async function handleSubmit() {
  await $fetch(`/api/badges/${route.params.badgeId}`, {
    method: "put",
    body: form.value,
  });
  await router.push(`/badges/${route.params.badgeId}`);
}
</script>

<style scoped>
.header {
  position: absolute;
  top: var(--space-md);
  left: var(--space-md);
}

main {
  padding: var(--space-4xl);
  display: flex;
  justify-content: center;
}

.badge-form {
  max-width: 30rem;
  flex-grow: 1;
  margin-top: var(--space-lg);
  padding: var(--space-xl);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-gray-200);
}

.badge-preview {
  flex-grow: 1;
  max-width: 30rem;
  margin-top: var(--space-lg);
  padding: var(--space-xl);
}
</style>
