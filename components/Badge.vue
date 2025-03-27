<template>
  <div class="badge" :style="{ viewTransitionName: transitionName }">
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
        <div class="borough">{{ badge.borough }}</div>
      </div>
    </div>
    <div class="salary">
      <PhosphorIconCurrencyDollar size="1.5rem" color="var(--color-blue-500)" />
      <div class="salary-value">{{ badge.salary }}</div>
    </div>
    <div class="location">
      <PhosphorIconMapPin size="1.5rem" color="var(--color-blue-500)" />
      <div class="location-text">{{ badge.location }}</div>
    </div>
    <div class="footer">NYC Computer Science Fair</div>
  </div>
</template>

<script setup lang="ts">
import type { Badge } from "~/db/schema";

defineProps<{
  badge: Badge;
  transitionName?: string;
}>();
</script>

<style scoped>
.badge {
  border-radius: 1rem;
  background-color: var(--color-blue-100);
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  border: 0.15rem solid var(--color-blue-200);
  position: relative;
}

.lanyard {
  position: absolute;
  width: 6rem;
  height: 2rem;
  background: repeating-linear-gradient(
    90deg,
    var(--color-blue-500),
    var(--color-blue-500) calc(100% / 3),
    var(--color-blue-400) calc(100% / 3),
    var(--color-blue-400) calc(200% / 3)
  );
  border-radius: 0.5rem 0.5rem 0 0;
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
    color-mix(in srgb, var(--color-blue-500), var(--color-white) 75%);
  border-radius: 50%;
  left: 0;
  right: 0;
  top: 0.5rem;
  margin: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  gap: var(--space-md);
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
  color: var(--color-blue-500);
  margin-top: var(--space-xs);
}

.borough {
  font-size: var(--text-sm);
  background-color: var(--color-black);
  color: var(--color-white);
  padding: var(--space-sm) var(--space-md);
  border-radius: 1rem;
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

.footer {
  border-top: 1px solid
    color-mix(in srgb, var(--color-blue-400), var(--color-white) 75%);
  font-size: var(--text-sm);
  color: var(--color-gray-500);
  margin-top: var(--space-md);
  padding-top: var(--space-lg);
  padding-bottom: var(--space-sm);
  text-align: center;
}
</style>
