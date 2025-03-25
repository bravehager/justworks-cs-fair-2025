<template>
  <div v-for="badge in badges" :key="badge.id">
    <div :style="{ backgroundColor: badge.color }">
      <strong>{{ badge.name }}</strong> is a
      <strong>{{ badge.title }}</strong> in
      <strong>{{ badge.location }}</strong> earning
      <strong>{{ badge.salary }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Badge {
  id: number;
  name: string;
  title: string;
  location: string;
  salary: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

defineProps<{
  badges: Badge[];
}>();
</script>
