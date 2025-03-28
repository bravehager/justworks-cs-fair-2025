<template>
  <div class="select-wrapper">
    <select v-model="modelValue" v-bind="$attrs">
      <slot />
    </select>
    <PhosphorIconCaretDown size="1rem" class="caret" />
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel<string>({ required: true });
</script>

<style scoped>
.select-wrapper {
  position: relative;
  width: fit-content;
}

.caret {
  position: absolute;
  right: var(--space-sm);
  top: 0;
  bottom: 0;
  margin: auto;
  pointer-events: none;
}
</style>
