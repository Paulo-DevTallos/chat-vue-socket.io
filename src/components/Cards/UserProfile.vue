<script setup>
import MenuIcon from '../Icons/MenuIcon.vue';

import user_profile from '/img/user-empty-profile.jpg';
import profileActions from '../../configs/profile-actions';

const actionMenu = (action) => {
  switch(action) {
    case 'Evento 1':
      console.log(context.root)
      break;
    case 'Evento 2':
      alert('click para Evento 2');
      break;
    case 'Evento 3':
      alert('click para Evento 3');
      break;
    case 'Evento 4':
      alert('click para Evento 4');
      break;
    default:
      break;
  }
};
</script>

<template>
  <div
    class="card-profile bg-grayslace"
  >
    <div class="px-6 py-12">
      <figure class="flex justify-center items-center flex-col">
        <img :src="user_profile" alt="Imagem do usuário" class="rounded-full w-13/20" />
        <figcaption class="text-primary w-9/12 text-center mt-6">
          <h2 class="font-medium text-3xl">Paulo Sérgio</h2>
          <span class="text-slate-500 font-normal text-lg">Meu cargo</span>
        </figcaption>
      </figure>
      <nav class="mt-6">
        <h3 class="pb-6 text-slate-500">Ações do usuário</h3>
        <ul class="flex justify-between">
          <li v-for="command in profileActions" :key="command.id">
            <MenuIcon
              :icon="command.icon"
              :command_name="command.name"
              @triggedButton="actionMenu(command.action)"
            />
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.card-profile {
  box-shadow: -2px -2px 10px #00000045;
  width: 0%;
	height: 100vh;
  overflow: hidden;
  transition: width 0.3s ease-in-out;
}
</style>
