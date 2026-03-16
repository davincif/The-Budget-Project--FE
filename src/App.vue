<script setup lang="ts">
import { useLoggedUserStore } from '@/stores/LoggedUser';
import { watch } from 'vue';
import { RouterView } from 'vue-router';
import Debug from './components/Debug.vue';
import router from './router';

const userStore = useLoggedUserStore();

// Expel user from the website if he's not logged; bring him to login page.
watch(
  () => userStore.info,
  (userInfo) => {
    if (userInfo) {
      return;
    }

    router.clearRoutes();
    router.push({ name: 'login' });
  },
);
</script>

<template>
  <RouterView />

  <Debug />
</template>
