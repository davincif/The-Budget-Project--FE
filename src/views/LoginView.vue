<script setup lang="ts">
import UxButton from '@/ux/UxButton.vue';
import UxContainer from '@/ux/UxContainer.vue';
import UxInput from '@/ux/UxInput.vue';
import UXTitle from '@/ux/UXTitle.vue';
import { ref } from 'vue';

// const userNumber = ref('');
// const password = ref('');
const isLoading = ref(false);
// const enabled = ref(true);

const login = () => {
  console.error('NOT IMPLEMENTED');
};
</script>

<template>
  <UxContainer center>
    <div class="mb-12 place-items-center">
      <img src="/src/assets/TBP-clean.svg" class="max-w-50" />
      <UXTitle :isLoading="isLoading" class="m-4">The Budget Project</UXTitle>
      <UXTitle :isLoading="isLoading" heading="h3" class="w-full text-end">
        ~ by davincif
      </UXTitle>
    </div>

    <main>
      <UxInput
        class="mb-2"
        id="userName"
        autocomplete="username"
        label="User Name"
        :isLoading="isLoading"
      />
      <UxInput id="userPassword" label="User Password" :isLoading="isLoading" />

      <UxButton id="loginSubmit" class="w-full mt-4" :isLoading>Login</UxButton>
    </main>
  </UxContainer>
</template>
