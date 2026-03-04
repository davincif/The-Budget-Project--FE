<script setup lang="ts">
const { center } = defineProps({
  center: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section class="p-4" :class="[{ 'grid place-items-center': center }]">
    <slot />
  </section>
</template>
