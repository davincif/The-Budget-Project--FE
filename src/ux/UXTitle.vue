<script setup lang="ts">
const props = defineProps({
  heading: {
    type: String,
    default: 'h1',
    validator(value: string) {
      const availableHeadings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
      return availableHeadings.includes(value);
    },
  },
});

const { heading } = props;
</script>

<template>
  <h1 v-if="heading == 'h1'">
    <slot />
  </h1>
  <h2 v-else-if="heading == 'h2'">
    <slot />
  </h2>
  <h3 v-else-if="heading == 'h3'">
    <slot />
  </h3>
  <h4 v-else-if="heading == 'h4'">
    <slot />
  </h4>
  <h5 v-else-if="heading == 'h5'">
    <slot />
  </h5>
  <h6 v-else-if="heading == 'h6'">
    <slot />
  </h6>
  <p v-else>NOT RECOGNIZED HEADING</p>
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
