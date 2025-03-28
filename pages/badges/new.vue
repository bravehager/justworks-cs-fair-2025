<template>
  <div class="header">
    <NuxtLink class="button btn-outline" to="/">
      <PhosphorIconArrowLeft size="1rem" />
      Back to Gallery
    </NuxtLink>
  </div>

  <main>
    <BadgeFormWithPreview v-model="form" @submit="handleSubmit" />
  </main>
</template>

<script setup lang="ts">
import type { Badge } from "~/db/schema";

const form = ref<Omit<Badge, "id" | "createdAt" | "updatedAt">>({
  name: "",
  title: "",
  location: "",
  salary: "",
  borough: "",
  description: "",
});

const router = useRouter();

async function handleSubmit() {
  const response = await $fetch("/api/badges", {
    method: "post",
    body: form.value,
  });
  await router.push(`/badges/${response.id}`);
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
