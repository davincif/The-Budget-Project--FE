<script setup lang="ts">
import { useGlobalConfigStore } from '@/stores/GlobalConfig';
import UxButton from '@/ux/UxButton.vue';
import UxContainer from '@/ux/UxContainer.vue';
import UxInput from '@/ux/UxInput.vue';
import UXTitle from '@/ux/UXTitle.vue';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const user = ref({
  name: '',
  password: '',
});

const globalConfigStore = useGlobalConfigStore();
const { isLoading } = storeToRefs(globalConfigStore);

const login = () => {
  console.warn('NOT IMPLEMENTED');
};
</script>

<template>
  <UxContainer center>
    <div class="mb-12 place-items-center">
      <img src="/src/assets/TBP-clean.svg" class="max-w-50" />
      <UXTitle :isLoading class="m-4">The Budget Project</UXTitle>
      <UXTitle :isLoading heading="h3" class="w-full text-end">
        ~ by davincif
      </UXTitle>
    </div>

    <main>
      <UxInput
        id="userName"
        class="mb-2"
        autocomplete="username"
        label="User Name"
        :isLoading
        :v-model="user.name"
      />
      <UxInput
        id="userPassword"
        label="User Password"
        type="password"
        :isLoading
        :v-model="user.password"
      />

      <UxButton id="loginSubmit" class="w-full mt-8" :isLoading @click="login">
        Login
      </UxButton>
    </main>
  </UxContainer>
</template>
