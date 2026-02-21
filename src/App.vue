<script setup lang="ts">
import { watch } from 'vue';
import { RouterView } from 'vue-router';
import router from './router';
import { useLoggedUserStore } from './stores/LoggedUser';

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
</template>

<style scoped></style>
