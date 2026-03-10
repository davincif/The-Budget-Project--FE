<script setup lang="ts">
import { UxBase } from './UxInterfaces';
import UxShimmerOverlay from './UxShimmerOverlay.vue';

const { isLoading } = defineProps({
  ...UxBase,
  id: { type: String, required: true },
  type: { type: String, default: 'text' },
});
</script>

<template>
  <button
    class="p-4 border rounded-sm h-12 relative"
    :aria-busy="isLoading"
    :id
    :name="id"
  >
    <slot />

    <UxShimmerOverlay :isLoading="isLoading" />
  </button>
</template>

<style scoped>
/*
@layer base {
  p-4 border rounded-sm h-12
}
*/
</style>
