import { defineStore } from 'pinia';
import { readonly, ref } from 'vue';
import type { UserInfo } from './LoggedUser.model';

export const useLoggedUserStore = defineStore('userInfo', () => {
  const info = ref<UserInfo | null>(null);
  const debugMode = ref(false);

  function isLogged(): boolean {
    return info.value != null;
  }

  function logIn() {
    console.error('NOT IMPLEMENTED');
  }

  function logOut() {
    info.value = null;
  }

  function toggleDebugMode(setTo?: boolean) {
    if (setTo == null || setTo == undefined) {
      debugMode.value = !debugMode.value;
    } else {
      debugMode.value = setTo;
    }
  }

  return {
    info: readonly(info),
    debugMode,
    toggleDebugMode,
    isLogged,
    logIn,
    logOut,
  };
});
