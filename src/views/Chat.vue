<script setup>
import { Icon } from '@iconify/vue';
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
        <figcaption class="text-primary w-9/12">
          Paulo Sérgio
        </figcaption>
        <div class="action-icon float-left border-2 rounded p-3 text-xl">
          <Icon icon="ic:round-more-vert" />
        </div>
      </figure>
      <div class="px-6 pb-5 border-b-2">
        <input
          type="text"
          placeholder="Encontre um contato"
          class="w-full h-10 border pl-2 rounded"
        />
      </div>
      <ul class="contacts-list">
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
    </aside>
    <div class="w-3/4 px-6">
      <header class="flex py-5 items-center border-b-4">
        <div>
          <img
            :src="user_profile"
            alt="Foto do contato"
            class="rounded-full"
          />
        </div>
        <div class="title">
          <h3>Nome do contato de uma conversa</h3>
          <div id="status"></div>
        </div>
        <div>
          Ações
        </div>
      </header>
      <div>
        <div style="height: 75dvh; background-color: blue;">
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
.action-icon {
  margin-right: 14px;
  cursor: pointer;
}

.action-icon:hover {
  background-color: #e5e5e5;
  transition: .2s ease-in-out;
}

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

header .title {
  display: flex;
  flex: 1;
  align-items: center;
}

header .title h3 {
  font-size: 1.2rem;
  font-weight: 400;
  color: #333;
}
header .title #status {
  width: 10px;
  height: 10px;
  padding: 5px;
  background: rgb(0, 206, 0);
  border-radius: 100%;
  margin-left: 10px;
}
</style>
