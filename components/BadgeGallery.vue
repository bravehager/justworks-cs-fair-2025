<template>
  <div class="badge-gallery">
    <div
      v-for="badge in badges"
      :key="badge.id"
      class="badge"
      :style="{ backgroundColor: badge.color }"
    >
      <div>
        <strong>{{ badge.name }}</strong> is a
        <strong>{{ badge.title }}</strong> in
        <strong>{{ badge.location }}</strong> earning
        <strong>{{ badge.salary }}</strong>
      </div>
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

<style scoped>
.badge-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.badge {
  border-radius: 20px;
  padding: 1rem;
}
</style>
