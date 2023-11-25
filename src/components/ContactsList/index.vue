<script setup>
import user_profile from '/img/user-empty-profile.jpg';
</script>

<template>
  <ul class="mt-6">
    <li class="flex pl-6 py-3">
      <div>
        <img
          :src="user_profile"
          alt="Foto do contato"
          class="rounded-full"
        />
      </div>
      <div class="flex">
        <div>
          <h3>Nome do contato</h3>
          <p>Última mensagem</p>
        </div>
        <div>
          <p>10:35 AM</p>
        </div>
      </div>
    </li>
    <li class="flex pl-6 py-3">
      <div>
        <img
          :src="user_profile"
          alt="Foto do contato"
          class="rounded-full"
        />
      </div>
      <div class="flex">
        <div>
          <h3>Nome do contato</h3>
          <p>Última mensagem</p>
        </div>
        <div>
          <p>10:35 AM</p>
        </div>
      </div>
    </li>
    <li class="flex pl-6 py-3">
      <div>
        <img
          :src="user_profile"
          alt="Foto do contato"
          class="rounded-full"
        />
      </div>
      <div class="flex">
        <div>
          <h3>Nome do contato</h3>
          <p>Última mensagem</p>
        </div>
        <div>
          <p>10:35 AM</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
img {
  margin-right: 14px;
  width: 55px;
}
</style>
