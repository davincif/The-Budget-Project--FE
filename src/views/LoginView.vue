<script setup lang="ts">
import { Switch } from '@headlessui/vue';
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
  <!-- TODO: TAILWIND TESTS. REMOVE IT! -->
  <main>
    <p class="">xablau</p>

    <Switch
      v-model="enabled"
      :class="enabled ? 'bg-blue-600' : 'bg-gray-200'"
      class="relative inline-flex h-6 w-11 items-center rounded-full"
    >
      <span class="sr-only">Enable notifications</span>
      <span
        :class="enabled ? 'translate-x-6' : 'translate-x-1'"
        class="inline-block h-4 w-4 transform rounded-full bg-white transition"
      />
    </Switch>
    <br />
    <Switch v-model="enabled" as="template" v-slot="{ checked }">
      <button
        class="relative inline-flex h-6 w-11 items-center rounded-full"
        :class="checked ? 'bg-blue-600' : 'bg-gray-200'"
      >
        <span class="sr-only">Enable notifications</span>
        <span
          :class="checked ? 'translate-x-6' : 'translate-x-1'"
          class="inline-block h-4 w-4 transform rounded-full bg-white transition"
        />
      </button>
    </Switch>
  </main>
</template>
