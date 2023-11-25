<script setup>
import { ref, defineEmits } from 'vue';
import BaseInput from '@/components/BaseInput/index.vue';
import MainButton from '@/components/MainButton/index.vue';

const registerData = ref({
  name: '',
  email: '',
  password: '',
});

const emit = defineEmits(['handleCreateUser']);

const handleCreateUser = () => {
  emit('handleCreateUser', registerData.value);
};
</script>

<template>
  <form @submit.prevent="handleCreateUser">
    <BaseInput
      v-model="registerData.name"
      :placeholder_msg="'Insira seu nome de usuário'"
      class="mb-2"
    />
    <BaseInput
      v-model="registerData.email"
      :placeholder_msg="'Insira seu melhor E-mail'"
      class="mb-2"
    />
    <BaseInput
      v-model="registerData.password"
      :hidePasswordRevealer="true"
      :placeholder_msg="'Insira sua senha mais segura'"
    />
    <MainButton class="bg-primary">
      Cadastrar
    </MainButton>
  </form>
</template>
