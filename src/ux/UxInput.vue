<script setup lang="ts">
import { computed, ref } from 'vue';
import { UxInput } from './UxInterfaces';
import UxShimmerOverlay from './UxShimmerOverlay.vue';

const { id, autocomplete, label, isLoading } = defineProps(UxInput);
const emits = defineEmits<{ onFocus: [event: FocusEvent]; onBlur: [] }>();
const value = defineModel<string>();

const isFocused = ref(false);

const hasContent = computed(() => value.length > 0);
const shouldLabelFloat = computed(() => isFocused.value || hasContent.value);

function onFocus(payload: FocusEvent) {
  isFocused.value = true;

  emits('onFocus', payload);
}

function onBlur() {
  isFocused.value = false;

  emits('onBlur');
}
</script>

<template>
  <div class="flex flex-col relative" :aria-busy="isLoading">
    <label
      :for="id"
      :class="[
        'absolute left-2 transition-all duration-200 ease-in-out pointer-events-none',
        shouldLabelFloat ? 'top-0 text-xs' : 'top-3 left-4 text-base',
      ]"
      class="opacity-60"
    >
      {{ label }}
    </label>

    <input
      v-model="value"
      @focus="onFocus"
      @blur="onBlur"
      class="p-4 border rounded-sm h-12"
      :name="id"
      :id
      :autocomplete
      :type
      :minlength
      :maxlength
    />

    <UxShimmerOverlay :isLoading="isLoading" />
  </div>
</template>
