<script setup>
import { ref, defineEmits } from "vue";
import MainButton from "@/components/MainButton/index.vue";

const formData = ref({
  email: "",
  password: "",
});

const emit = defineEmits(["handleSubmit"]);

const handleSubmit = () => {
  emit("handleSubmit", formData.value);
};

</script>

<template>
  <form @submit.prevent="handleSubmit">
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
    <MainButton class="bg-primary">
      Login
    </MainButton>
  </form>
</template>
