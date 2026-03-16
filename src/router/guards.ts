import { useLoggedUserStore } from '@/stores/LoggedUser';
import type { RouteLocationNormalizedGeneric } from 'vue-router';

function guaranteeLoggedUser(toRoute: RouteLocationNormalizedGeneric) {
  const userStore = useLoggedUserStore();
  const isUserLogged = userStore.isLogged();

  if (toRoute.meta.requireGuest && isUserLogged) {
    return false;
  }

  if (toRoute.meta.requireLogin && !isUserLogged) {
    return { name: 'login' };
  }

  return true;
}

export const guards = [guaranteeLoggedUser];
