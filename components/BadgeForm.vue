<template>
  <h1>Create a badge</h1>

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
      <label for="color">Color</label>
      <input type="color" id="color" v-model="form.color" required />
    </div>

    <BadgeAvatar :name="form.name" />

    <button type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
const defaultColor = "#0070d4";

const form = ref({
  name: "",
  title: "",
  location: "",
  salary: "",
  color: defaultColor,
});

const router = useRouter();

async function handleSubmit() {
  await $fetch("/api/badges", {
    method: "post",
    body: form.value,
  });
  await router.push("/");
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
