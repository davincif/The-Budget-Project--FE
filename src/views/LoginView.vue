<script setup lang="ts">
import { ref } from 'vue';

const userNumber = ref('');
const password = ref('');
const isLoading = ref(false);

const login = () => {
  console.error('NOT IMPLEMENTED');
};
</script>

<template>
  <!-- TODO: TAILWIND TESTS. REMOVE IT! -->
  <main>
    <p class="">xablau</p>
    <button class="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
    <br />
    <button class="bg-sky-500 disabled:hover:bg-sky-500 ...">Save changes</button>
    <br />
    <div class="grid grid-cols-2 sm:grid-cols-3">
      <!-- ... -->
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
      <div>
        <span
          class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg"
        >
          <svg
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <!-- ... -->
          </svg>
        </span>
      </div>
      <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        Writes upside-down
      </h3>
      <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even
        works in outer space.
      </p>
    </div>
  </main>
</template>
