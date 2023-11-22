<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["handleForm"]);

const handleForm = () => {
  emit("handleForm");
};

</script>

<template>
  <button @click="$emit('handleForm')">
    <slot></slot>
  </button>
</template>
