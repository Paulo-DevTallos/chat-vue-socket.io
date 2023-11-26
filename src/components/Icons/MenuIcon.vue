<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  icon: {
    type: String,
  },
  command_name: {
    type: String,
  },
  command_action: {
    type: String,
  },
});

const emit = defineEmits(['triggedButton']);

const triggedButton = () => {
  emit('triggedButton', props.command_action);
};
</script>

<template>
  <div
    :title="props.command_name"
    @click="triggedButton"
    class="icon-menu border-2"
  >
    <Icon :icon="`ic:${props.icon}`" />
  </div>
</template>

<style scoped>
.icon-menu {
  cursor: pointer;
  color: #a8a8a8;
  padding: 20px;
  font-size: 1.5rem;
  border-radius: 6px;
  transition: .3s ease-in;
}

.icon-menu:hover {
  border-color: #004AAD;
  color: #004AAD;
}
</style>
