<script setup lang="ts">
import { DebugShortCuts } from '@/models/Debug';
import { useGlobalConfigStore } from '@/stores/GlobalConfig';
import { onMounted, ref, watch } from 'vue';

const globalConfigStore = useGlobalConfigStore();

const isListening = ref(false);

onMounted(() => {
  setDebugTogglerLister();

  if (globalConfigStore.debugMode) {
    setDebugsListeners();
  }
});

watch(
  () => globalConfigStore.debugMode,
  (debugMode) => {
    if (debugMode && !isListening.value) {
      setDebugsListeners();
    } else if (!debugMode && isListening.value) {
      clearDebugsListeners();
    }
  },
);

function setDebugTogglerLister() {
  document.addEventListener('keyup', (event) => {
    if (identifyShortcutCommand(event) === DebugShortCuts.DEBUG_ME) {
      globalConfigStore.toggleDebugMode();
    }
  });
}

function identifyShortcutCommand(
  event: KeyboardEvent,
): DebugShortCuts | undefined {
  const key = event.key.toUpperCase();

  if (
    event.ctrlKey &&
    // event.shiftKey &&
    event.altKey &&
    key === 'D'
  ) {
    return DebugShortCuts.DEBUG_ME;
  }

  if (key === 'L') {
    return DebugShortCuts.LOADING;
  }

  return undefined;
}

function setDebugsListeners() {
  if (isListening.value) {
    return;
  }

  clearDebugsListeners();
  isListening.value = true;
  document.addEventListener('keyup', debugShortcutExecuter);
}

function clearDebugsListeners() {
  isListening.value = false;
  document.removeEventListener('keyup', debugShortcutExecuter);
}

function debugShortcutExecuter(event: KeyboardEvent) {
  if (!isListening.value) {
    return;
  }

  const shortcut = identifyShortcutCommand(event);

  switch (shortcut) {
    case DebugShortCuts.LOADING:
      globalConfigStore.toggleLoading();
      break;
  }
}
</script>

<template>
  <p v-if="globalConfigStore.debugMode" class="absolute bottom-0">
    debug mode on
  </p>
</template>
