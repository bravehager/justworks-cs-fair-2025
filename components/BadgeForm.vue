<template>
  <form @submit.prevent="handleSubmit" class="form">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="form.name" required />
    </div>

    <div>
      <label for="title">Title</label>
      <input type="text" id="title" v-model="form.title" required />
    </div>

    <div>
      <label for="location">Location</label>
      <input type="text" id="location" v-model="form.location" required />
    </div>

    <div>
      <label for="salary">Salary</label>
      <input type="text" id="salary" v-model="form.salary" required />
    </div>

    <div>
      <label for="borough">Borough</label>
      <select id="borough" v-model="form.borough" required>
        <option value="Manhattan">Manhattan</option>
        <option value="Brooklyn">Brooklyn</option>
        <option value="Queens">Queens</option>
        <option value="The Bronx">The Bronx</option>
        <option value="Staten Island">Staten Island</option>
      </select>
    </div>

    <BadgeAvatar :name="form.name" />

    <button type="submit">Save</button>
  </form>
</template>

<script setup lang="ts">
import type { Badge } from "~/db/schema";

const props = defineProps<{
  badge?: Badge;
}>();

const form = ref({
  name: props.badge?.name || "",
  title: props.badge?.title || "",
  location: props.badge?.location || "",
  salary: props.badge?.salary || "",
  borough: props.badge?.borough || "",
});

const router = useRouter();

async function handleSubmit() {
  let response;
  if (props.badge) {
    response = await $fetch(`/api/badges/${props.badge.id}`, {
      method: "put",
      body: form.value,
    });
  } else {
    response = await $fetch("/api/badges", {
      method: "post",
      body: form.value,
    });
  }
  if (response) {
    await router.push(`/badges/${response.id}`);
  }
}
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
