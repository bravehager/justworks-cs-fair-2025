<template>
  <div class="header">
    <NuxtLink
      class="button btn-outline"
      :to="`/badges/${route.params.badgeId}`"
    >
      <PhosphorIconArrowLeft size="1rem" />
      Back
    </NuxtLink>
  </div>

  <main>
    <BadgeFormWithPreview v-model="form" @submit="handleSubmit" />
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (min-width: 48rem) {
  main {
    flex-direction: row-reverse;
    gap: var(--space-4xl);
  }
}
</style>
