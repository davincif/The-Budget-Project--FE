import { defineStore } from 'pinia';
import { readonly, ref } from 'vue';
import type { UserInfo } from './LoggedUser.model';

export const useLoggedUserStore = defineStore('userInfo', () => {
  const info = ref<UserInfo | null>(null);

  function isLogged(): boolean {
    return info.value != null;
  }

  function logIn() {
    console.error('NOT IMPLEMENTED');
  }

  function logOut() {
    info.value = null;
  }

  return { info: readonly(info), isLogged, logIn, logOut };
});
