<script setup lang="ts">
import { computed } from 'vue';
import { UxBase } from './UxInterfaces';
import UxShimmerOverlay from './UxShimmerOverlay.vue';

const { heading, isLoading } = defineProps({
  ...UxBase,
  heading: {
    type: String,
    default: 'h1',
    validator(value: string) {
      const availableHeadings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
      return availableHeadings.includes(value);
    },
  },
});

const tag = computed(() => {
  const availableHeadings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  return availableHeadings.includes(heading) ? heading : 'p';
});
</script>

<template>
  <component :is="tag" :aria-busy="isLoading">
    <span class="relative inline-block overflow-hidden align-middle">
      <span :class="{ 'opacity-0': isLoading }">
        <slot />
      </span>

      <UxShimmerOverlay :isLoading="isLoading" />
    </span>
  </component>
</template>

<style lang="css" scoped>
@layer base {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 !important;
  }
}
</style>
