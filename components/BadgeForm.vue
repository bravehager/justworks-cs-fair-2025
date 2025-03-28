<template>
  <form @submit.prevent="emit('submit', modelValue)" class="form">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="modelValue.name" required />
    </div>

    <div>
      <label for="title">Title</label>
      <input type="text" id="title" v-model="modelValue.title" required />
    </div>

    <div>
      <label for="location">Location</label>
      <input type="text" id="location" v-model="modelValue.location" required />
    </div>

    <div>
      <label for="salary">Salary</label>
      <input type="text" id="salary" v-model="modelValue.salary" required />
    </div>

    <div>
      <label for="description">Description</label>
      <input
        type="textarea"
        id="description"
        v-model="modelValue.description"
        required
      />
    </div>

    <div>
      <label for="borough">Borough</label>
      <select id="borough" v-model="modelValue.borough" required>
        <option value="Manhattan">Manhattan</option>
        <option value="Brooklyn">Brooklyn</option>
        <option value="Queens">Queens</option>
        <option value="The Bronx">The Bronx</option>
        <option value="Staten Island">Staten Island</option>
      </select>
    </div>

    <BadgeAvatar :name="modelValue.name" />

    <button type="submit">Save</button>
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
  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input {
    margin-bottom: 1rem;
  }
}
</style>
