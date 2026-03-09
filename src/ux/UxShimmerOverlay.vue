<script setup lang="ts">
import { UxBase } from './UxInterfaces';

const { isLoading } = defineProps(UxBase);
</script>

<template>
  <transition name="loading-overlay">
    <div
      v-if="isLoading"
      class="absolute inset-0 z-10 pointer-events-none bg-white/75"
      aria-hidden="true"
    >
      <div class="absolute inset-0 shimmer-layer" />
    </div>
  </transition>
</template>
