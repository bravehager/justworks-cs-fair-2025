<template>
  <div class="badge-preview">
    <Badge
      :badge="form"
      :transition-name="form.id ? `badge-${form.id}` : 'badge-new'"
    />
    <p class="description">{{ form.description }}</p>
  </div>

  <div class="badge-form">
    <BadgeForm v-model="form" @submit="emit('submit', form)" />
  </div>
</template>

<script setup lang="ts">
import type { BadgeForm } from "~/db/schema";

const form = defineModel<BadgeForm>({
  required: true,
});

const emit = defineEmits<{
  (e: "submit", form: BadgeForm): void;
}>();
</script>

<style scoped>
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
