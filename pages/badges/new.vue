<template>
  <div class="header">
    <NuxtLink class="button btn-outline" to="/">
      <PhosphorIconArrowLeft size="1rem" />
      Back to Gallery
    </NuxtLink>
  </div>

  <main>
    <div class="badge-preview">
      <Badge :badge="form" />
      <p class="description">{{ form.description }}</p>
    </div>

    <div class="badge-form">
      <BadgeForm v-model="form" @submit="handleSubmit" />
    </div>
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

.badge-form {
  width: 100%;
  max-width: 30rem;
  flex-grow: 1;
  margin-top: var(--space-lg);
  padding: var(--space-xl);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-gray-200);
}

.badge-preview {
  flex-grow: 1;
  width: 100%;
  max-width: 30rem;
  margin-top: var(--space-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
}

.description {
  max-width: 30rem;
  text-align: center;
  font-size: var(--text-lg);
  font-style: italic;
}
</style>
