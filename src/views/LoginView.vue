<script setup lang="ts">
import UxButton from '@/ux/UxButton.vue';
import UxContainer from '@/ux/UxContainer.vue';
import UxInput from '@/ux/UxInput.vue';
import UXTitle from '@/ux/UXTitle.vue';
import { ref } from 'vue';

const user = ref({
  name: '',
  password: '',
});
const isLoading = ref(false);

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
        id="userName"
        class="mb-2"
        autocomplete="username"
        label="User Name"
        :isLoading="isLoading"
        :v-model="user.name"
      />
      <UxInput
        id="userPassword"
        label="User Password"
        type="password"
        :isLoading="isLoading"
        :v-model="user.password"
      />

      <UxButton id="loginSubmit" class="w-full mt-8" :isLoading>Login</UxButton>
    </main>
  </UxContainer>
</template>
