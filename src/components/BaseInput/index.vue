<script setup>
import { computed, ref, defineProps } from 'vue';
import PasswordRevealer from '@/components/Icons/PasswordRevealer.vue';

const inputType = ref('password');
const inputValue = ref('');

const props = defineProps({
  placeholder_msg: {
    type: String,
  },
  hidePasswordRevealer: {
    type: Boolean,
  }
});

const computedProps = {
  isPasswordVisible: computed(() => inputType.value === 'text'),
  hidePasswordRevealer: computed(() => {
    return !props.hidePasswordRevealer ? (inputType.value = 'text') : 'password';
  }),
};

const togglePassword = () => {
  inputType.value = computedProps.isPasswordVisible.value ? 'password' : 'text';
};
</script>

<template>
  <div tabindex="0" class="w-full h-10 pl-2 rounded border input-container">
    <input
      v-bind="$attrs"
      :type="inputType"
      v-if="computedProps.hidePasswordRevealer.value"
      :placeholder="placeholder_msg"
      class="set-input"
    />
    <PasswordRevealer
      @toggleRevealer="togglePassword"
      v-if="props.hidePasswordRevealer"
      :is_password="computedProps.isPasswordVisible.value"
    />
  </div>
</template>

<style scoped>
.input-container {
  background: #fff;
  display: flex;
}

.input-container:focus-within {
  outline: 1px solid #004AAD;
}

.input-container .set-input {
  width: 90%;
  height: 100%;
  outline: none;
  padding: 0 8px;
}
</style>
