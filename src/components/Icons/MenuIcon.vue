<script setup>
import { Icon } from '@iconify/vue';

const eventoDeClick = () => {
  alert('Evento de click');
};
</script>

<template>
  <div
    title="Editar perfil"
    @click="eventoDeClick"
    class="icon-menu border-2"
  >
    <Icon icon="ic:outline-edit" />
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
