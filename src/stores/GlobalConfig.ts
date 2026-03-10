import { defineStore } from 'pinia';
import { readonly, ref } from 'vue';

export const useGlobalConfigStore = defineStore('globalConfig', () => {
  const debugMode = ref(false);
  const isLoading = ref(false);

  function toggleDebugMode() {
    setLoadingDebugMode(!debugMode.value);
  }

  function setLoadingDebugMode(newDebugState: boolean) {
    if (newDebugState === debugMode.value) {
      return;
    }

    debugMode.value = newDebugState;
  }

  function toggleLoading() {
    setLoading(!isLoading.value);
  }

  function setLoading(newLoadingState: boolean) {
    if (isLoading.value === newLoadingState) {
      return;
    }

    isLoading.value = newLoadingState;
  }

  return {
    debugMode: readonly(debugMode),
    isLoading: readonly(isLoading),
    toggleDebugMode,
    setLoadingDebugMode,
    toggleLoading,
    setLoading,
  };
});
