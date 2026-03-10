<script setup lang="ts">
import { UxContainer } from './UxInterfaces';
import UxShimmerOverlay from './UxShimmerOverlay.vue';

const { center, isLoading } = defineProps(UxContainer);
</script>

<template>
  <section
    class="relative overflow-hidden p-4"
    :class="[{ 'grid place-items-center': center }]"
    :aria-busy="isLoading"
  >
    <slot />

    <UxShimmerOverlay :isLoading="isLoading" />
  </section>
</template>
