<script setup>
import MainButton from '@/components/MainButton/index.vue';
</script>

<template>
  <form>
    <input
      type="text"
      placeholder="Insira seu nome"
      class="w-full h-10 border pl-2 mb-2 rounded"
    />
    <input
      type="email"
      placeholder="Insira seu E-mail"
      class="w-full h-10 border pl-2 mb-2 rounded"
    />
    <input
      type="password"
      placeholder="Insira sua senha"
      class="w-full h-10 border pl-2 mb-2 rounded"
    />
    <MainButton class="bg-primary">
      Cadastrar
    </MainButton>
  </form>
</template>
