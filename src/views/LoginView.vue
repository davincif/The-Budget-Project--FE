<script setup lang="ts">
import UxContainer from '@/ux/UxContainer.vue';
import UXTitle from '@/ux/UXTitle.vue';
import { ref } from 'vue';

const userNumber = ref('');
const password = ref('');
const isLoading = ref(false);
const enabled = ref(true);

const login = () => {
  console.error('NOT IMPLEMENTED');
};
</script>

<template>
  <UxContainer center>
    <div class="mb-1 place-items-center">
      <img src="/src/assets/TBP-clean.svg" class="max-w-50" />
      <UXTitle class="m-4">The Budget Project</UXTitle>
      <UXTitle heading="h3" class="w-full text-end mb-1">~ by <bold>davincif</bold></UXTitle>
    </div>

    <main>
      <p>IN CONSTRUCTION</p>
    </main>
  </UxContainer>
</template>
