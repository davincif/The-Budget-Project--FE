<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { RouterView } from 'vue-router';
import router from './router';
import { useLoggedUserStore } from './stores/LoggedUser';

const userStore = useLoggedUserStore();

onMounted(() => {
  setDebugModeListerns();
});

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

//#region Debugger mode related code.
// watch(() => userStore.debugMode, onDebugModeChange);

function setDebugModeListerns() {
  console.log('setDebugModeListerns');
  document.addEventListener('keyup', (event) => {
    // code
    console.log('event', event.key, event);
  });
}
//#endregion Debugger mode related code .
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
