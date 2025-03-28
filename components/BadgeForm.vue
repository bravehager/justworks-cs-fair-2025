<template>
  <form @submit.prevent="emit('submit', modelValue)" class="form">
    <div>
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        v-model="modelValue.name"
        required
        placeholder="John Doe"
      />
    </div>

    <div>
      <label for="title">Title</label>
      <input
        type="text"
        id="title"
        v-model="modelValue.title"
        required
        placeholder="Software Engineer"
      />
    </div>

    <div>
      <label for="salary">Salary</label>
      <input
        type="text"
        id="salary"
        v-model="modelValue.salary"
        required
        placeholder="$1,000,000"
      />
    </div>

    <div>
      <label for="location">Location</label>
      <input
        type="text"
        id="location"
        v-model="modelValue.location"
        required
        placeholder="New York, NY"
      />
    </div>

    <div>
      <label for="description">About me</label>
      <textarea id="description" v-model="modelValue.description" />
    </div>

    <div>
      <label for="borough">Borough</label>
      <Select id="borough" v-model="modelValue.borough" required>
        <option value=""></option>
        <option value="Manhattan">Manhattan</option>
        <option value="Brooklyn">Brooklyn</option>
        <option value="Queens">Queens</option>
        <option value="The Bronx">The Bronx</option>
        <option value="Staten Island">Staten Island</option>
      </Select>
    </div>

    <button class="button btn-accent" type="submit">Save</button>
  </form>
</template>

<script setup lang="ts">
import type { Badge } from "~/db/schema";

const modelValue = defineModel<Omit<Badge, "id" | "createdAt" | "updatedAt">>({
  required: true,
});

const emit = defineEmits<{
  (e: "submit", badge: Omit<Badge, "id" | "createdAt" | "updatedAt">): void;
}>();
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    width: 100%;
  }
}
</style>
