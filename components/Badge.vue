<template>
  <div
    class="badge"
    :class="color"
    :style="{ viewTransitionName: transitionName }"
  >
    <div class="lamination"></div>
    <div class="lanyard"></div>
    <div class="pin"></div>
    <div class="header">
      <div class="header-left">
        <BadgeAvatar :name="badge.name" />
        <div>
          <div class="name">{{ badge.name }}</div>
          <div class="title">{{ badge.title }}</div>
        </div>
      </div>
      <div class="header-right">
        <div v-if="badge.borough" class="borough">{{ badge.borough }}</div>
      </div>
    </div>
    <div class="salary">
      <PhosphorIconCurrencyDollar size="1.5rem" color="var(--color-500)" />
      <div>{{ badge.salary }}</div>
    </div>
    <div class="location">
      <PhosphorIconMapPin size="1.5rem" color="var(--color-500)" />
      <div>{{ badge.location }}</div>
    </div>
    <div class="footer">NYC Computer Science Fair 2025</div>
  </div>
</template>

<script setup lang="ts">
import type { Badge, BadgeForm } from "~/db/schema";

const props = defineProps<{
  badge: Badge | BadgeForm;
  transitionName?: string;
}>();

const colors = {
  Manhattan: "purple",
  Brooklyn: "red",
  Queens: "green",
  "The Bronx": "yellow",
  "Staten Island": "blue",
} as Record<string, string>;

const color = computed(() => colors[props.badge.borough] ?? "blue");

// Generate a random tilt between -3 and 3 degrees, using
// the badge ID as the seed.
const tilt = computed(() => {
  const seed = (props.badge?.id ?? -3) + 42;
  const tilt = (seed % 6) - 3;
  return `${tilt}deg`;
});
</script>

<style scoped>
.badge {
  --color-100: var(--color-gray-100);
  --color-200: var(--color-gray-200);
  --color-400: var(--color-gray-400);
  --color-500: var(--color-gray-500);

  width: 100%;
  border-radius: var(--radius-md);
  background-color: var(--color-100);
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  border: 0.15rem solid var(--color-200);
  position: relative;
  box-shadow: var(--color-box-shadow);

  --tilt: v-bind(tilt);
  transform: rotate(var(--tilt));
  transition: transform 0.3s ease;
}

.badge.blue {
  --color-100: var(--color-blue-100);
  --color-200: var(--color-blue-200);
  --color-400: var(--color-blue-400);
  --color-500: var(--color-blue-500);
}

.badge.red {
  --color-100: var(--color-red-100);
  --color-200: var(--color-red-200);
  --color-400: var(--color-red-400);
  --color-500: var(--color-red-500);
}

.badge.green {
  --color-100: var(--color-green-100);
  --color-200: var(--color-green-200);
  --color-400: var(--color-green-400);
  --color-500: var(--color-green-600);
}

.badge.yellow {
  --color-100: var(--color-yellow-100);
  --color-200: var(--color-yellow-200);
  --color-400: var(--color-yellow-400);
  --color-500: var(--color-yellow-600);
}

.badge.purple {
  --color-100: var(--color-purple-100);
  --color-200: var(--color-purple-200);
  --color-400: var(--color-purple-400);
  --color-500: var(--color-purple-600);
}

.badge:hover {
  --tilt: 0deg;
  transform: translateY(-5px);
}

.lamination {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    135deg,
    var(--color-500),
    var(--color-500) 25%,
    var(--color-400) 25%,
    var(--color-400) 50%
  );
  opacity: 0.1;
  border-radius: var(--radius-md);
}

.lanyard {
  position: absolute;
  width: 6rem;
  height: 2rem;
  background: repeating-linear-gradient(
    90deg,
    var(--color-500),
    var(--color-500) calc(100% / 3),
    var(--color-400) calc(100% / 3),
    var(--color-400) calc(200% / 3)
  );
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  left: 0;
  right: 0;
  top: -1rem;
  margin: auto;
}

.pin {
  position: absolute;
  width: 1rem;
  height: 1rem;
  background-color: var(--color-white);
  border: 0.15rem solid
    color-mix(in srgb, var(--color-500), var(--color-white) 75%);
  border-radius: var(--radius-round);
  left: 0;
  right: 0;
  top: 0.5rem;
  margin: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  gap: var(--space-md);
  pointer-events: none;
}

.header-left {
  display: flex;
  gap: var(--space-md);
}

.name {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-oatley-bold);
}

.title {
  font-size: var(--text-lg);
  color: var(--color-500);
  margin-top: var(--space-xs);
}

.borough {
  font-size: var(--text-sm);
  background-color: var(--color-black);
  color: var(--color-white);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
}

.salary {
  display: flex;
  gap: var(--space-sm);
  align-items: center;
}

.location {
  display: flex;
  gap: var(--space-sm);
  align-items: center;
}

.description {
  display: flex;
  gap: var(--space-sm);
  align-items: center;
}

.footer {
  border-top: 1px solid
    color-mix(in srgb, var(--color-400), var(--color-white) 75%);
  font-size: var(--text-sm);
  color: var(--color-gray-500);
  margin-top: var(--space-md);
  padding-top: var(--space-lg);
  padding-bottom: var(--space-sm);
  text-align: center;
}
</style>
