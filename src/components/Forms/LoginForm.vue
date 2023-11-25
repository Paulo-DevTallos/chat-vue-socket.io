<script setup>
import { ref, defineEmits } from "vue";
import BaseInput from "@/components/BaseInput/index.vue";
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
    <BaseInput
      v-model="formData.email"
      :placeholder_msg="'Digite seu E-mail'"
      class="mb-2"
    />
    <BaseInput
      v-model="formData.password"
      :hidePasswordRevealer="true"
      :placeholder_msg="'Digite sua senha'"
    />
    <MainButton class="bg-primary">
      Login
    </MainButton>
  </form>
</template>
