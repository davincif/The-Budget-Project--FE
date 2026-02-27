<script setup lang="ts">
const { center } = defineProps({
  center: {
    type: Boolean,
    default: false,
  },
  _class: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <section class="p-4" :class="[{ 'grid place-items-center': center }, _class]">
    <slot />
  </section>
</template>
