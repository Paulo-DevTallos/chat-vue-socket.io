<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  icon: {
    type: String,
  },
  command_name: {
    type: String,
  },
});

const eventoDeClick = () => {
  alert(props.command_name);
};
</script>

<template>
  <div
    :title="props.command_name"
    @click="eventoDeClick"
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
