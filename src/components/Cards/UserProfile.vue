<script setup>
import MenuIcon from '../Icons/MenuIcon.vue';

import user_profile from '/img/user-empty-profile.jpg';
</script>

<template>
  <div
    class="card-profile bg-grayslace"
  >
    <div class="px-6 py-12">
      <figure class="flex justify-center items-center flex-col">
        <img :src="user_profile" alt="Imagem do usuário" class="rounded-full w-3/4" />
        <figcaption class="text-primary w-9/12 text-center mt-6">
          <h2 class="font-medium text-3xl">Paulo Sérgio</h2>
          <span class="text-slate-500 font-normal text-lg">Meu cargo</span>
        </figcaption>
      </figure>
      <div>
        <nav class="mt-6">
          <h3 class="pb-6 text-slate-500">Ações do usuário</h3>
          <ul class="flex">
            <li>
              <MenuIcon />
            </li>
            <li>Adicionar novo contato</li>
            <li>Ver minha agenda</li>
            <li>Lista de favoritos</li>
          </ul>
        </nav>
      </div>
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
