<script setup>
import { defineEmits, defineProps, ref } from 'vue';
import { Icon } from '@iconify/vue';

const props = defineProps({
  is_password: {
    type: Boolean,
  },
});

const emit = defineEmits(['toggleRevealer']);

const toggleRevealer = () => {
  emit('toggleRevealer');
};
</script>

<template>
  <span @click="toggleRevealer" class="cursor-pointer flex items-center justify-center w-1/20">
    <Icon icon="carbon:view" v-if="is_password" />
    <Icon icon="carbon:view-off" v-else />
  </span>
</template>
