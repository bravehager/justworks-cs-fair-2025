<template>
  <div class="row">
    <NuxtLink class="page-link" :to="{ name: 'badges-new' }">
      Create a new badge
    </NuxtLink>
    <div class="page-link">
      <label for="borough">Check out Badges by borough</label>
      <select id="borough" v-model="borough" required>
        <option value="manhattan">Manhattan</option>
        <option value="brooklyn">Brooklyn</option>
        <option value="queens">Queens</option>
        <option value="the_bronx">The Bronx</option>
        <option value="staten_island">Staten Island</option>
      </select>
    </div>
  </div>

  <BadgeGallery :badges="badges" />
</template>

<script setup lang="ts">
const borough = ref("Manhattan");
const badges = await $fetch("/api/badges");
</script>
