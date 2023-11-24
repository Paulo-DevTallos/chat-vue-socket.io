<script setup>
import { ref, defineEmits } from 'vue';
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
    <input
      type="text"
      placeholder="Insira seu nome"
      v-model="registerData.name"
      class="w-full h-10 border pl-2 mb-2 rounded"
    />
    <input
      type="email"
      placeholder="Insira seu E-mail"
      v-model="registerData.email"
      class="w-full h-10 border pl-2 mb-2 rounded"
    />
    <input
      type="password"
      placeholder="Insira sua senha"
      v-model="registerData.password"
      class="w-full h-10 border pl-2 mb-2 rounded"
    />
    <MainButton class="bg-primary">
      Cadastrar
    </MainButton>
  </form>
</template>
