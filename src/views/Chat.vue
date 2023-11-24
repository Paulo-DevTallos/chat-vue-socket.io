<script setup>
import user_profile from '/img/user-empty-profile.jpg';
</script>

<template>
  <div class="w-full flex h-screen">
    <aside class="bg-grayslace w-1/4">
      <figure class="flex items-center py-12 pl-6 h-16">
        <img
          :src="user_profile"
          alt="Foto do contato"
          class="rounded-full"
        />
        <figcaption class="text-primary">
          Paulo Sérgio
        </figcaption>
      </figure>
      <div class="px-6 pb-5 border-b-2">
        <input type="text" placeholder="Encontre um contato" class="w-full h-10 border pl-2 rounded" />
      </div>
      <ul class="contacts-list">
        <li class="flex pl-6  py-3">
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
        <li class="flex pl-6  py-3">
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
    </aside>
    <div class="w-3/4 px-6">
      <header>
        header do contato selecionado
      </header>
      <div>
        <div>
          caixa de conversa
        </div>
        <div>
          caixa de envio de mensagem
        </div>
      </div>
    </div>
    <div v-if="false" style="width: 30%;">
      perfil do contato selecionado
    </div>
  </div>
</template>

<style scoped>
img {
  margin-right: 14px;
  width: 55px;
}

figure figcaption {
  font-size: 1.3rem;
  font-weight: 700;
}

.contacts-list {
  margin-top: 20px;
}
</style>
