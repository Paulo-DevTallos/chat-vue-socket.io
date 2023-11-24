<script setup>
import { ref } from "vue";
import MainButton from "@/components/MainButton/index.vue";

const formData = ref({
  email: "",
  password: "",
});

const getDataToLogin = () => {
  console.log(formData.value);
}

</script>

<template>
  <form @submit.prevent="getDataToLogin">
    <input
      type="email"
      placeholder="Digite seu E-mail"
      v-model="formData.email"
      class="w-full h-10 border pl-2 mb-2 rounded"
    />
    <input
      type="password"
      placeholder="Digite sua senha"
      v-model="formData.password"
      class="w-full h-10 border pl-2 mb-2 rounded"
    />
    <MainButton class=" main-button bg-primary">
      Login
    </MainButton>
  </form>
</template>

<style scoped>
@import url('../../assets/components/button.styles.css');
</style>
