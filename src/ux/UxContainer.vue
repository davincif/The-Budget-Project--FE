<script setup lang="ts">
import { UxContainer } from './UxInterfaces';

const { center, isLoading } = defineProps(UxContainer);
</script>

<template>
  <section
    class="ux-container relative overflow-hidden p-4"
    :class="[{ 'grid place-items-center': center }]"
    :aria-busy="isLoading"
  >
    <slot />

    <UxShimmerOverlay :isLoading="isLoading" />
  </section>
</template>
