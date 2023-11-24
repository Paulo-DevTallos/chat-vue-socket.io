<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["handleForm"]);

const handleForm = () => {
  emit("handleForm");
};
</script>

<template>
  <button @click="handleForm" class="main-button">
    <slot></slot>
  </button>
</template>

<style scoped>
@import url("../../assets/components/button.styles.css");
</style>
