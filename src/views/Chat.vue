<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import MainHeader from '@/components/MainHeader/index.vue';
import ContactsList from '@/components/ContactsList/index.vue';
import BaseInput from '@/components/BaseInput/index.vue';
import user_profile from '/img/user-empty-profile.jpg';
import chatAnimation from '@/assets/lottie-animations/chat-animation.json';

const mainChatContent = ref(false);
const isModalActive = ref(false);
const isConversationEmpty = ref(true);

const search = ref('');

const toggleProfileCard = () => {
  mainChatContent.value = !mainChatContent.value;
  isModalActive.value = !isModalActive.value;
};
</script>

<template>
  <div class="max-w-full flex h-screen">
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
        <div
          @click="toggleProfileCard"
          class="action-icon float-left border-2 rounded p-3 text-xl"
        >
          <Icon icon="ic:round-more-vert" />
        </div>
      </figure>
      <div class="px-6 pb-5 border-b-2">
        <BaseInput
          v-model="search"
          :placeholder_msg="'Pesquisar um contato'"
        />
      </div>
      <ContactsList />
    </aside>
    <div id="chat-content" class="w-3/4 flex">
      <div v-if="isConversationEmpty" class="w-full flex items-center justify-center">
        <div>
          <vue3-lottie
            class="border-2 rounded-full border-transparent"
            style="background-color: rgb(236, 245, 250);"
            :animationData="chatAnimation"
            :speed="1"
            :height="300"
            :width="300"
          />
          <div class="text-center mb-5">
            <h1>Nenhuma conversa iniciada</h1>
            <small>Selecione um contato e inicie uma conversa</small>
          </div>
        </div>
      </div>
      <div
        v-else
        class="main-content"
        :class="{ 'size_content': mainChatContent }"
      >
        <MainHeader />
        <div>
          <div style="height: 75dvh;">
            caixa de conversa
          </div>
          <div>
            <textarea
              class="border w-full h-full resize-none px-4 pt-2 overflow-hidden"
              placeholder="Digite uma mensagem..."
            ></textarea>
          </div>
        </div>
      </div>
      <div
        class="card-profile bg-grayslace"
        :class="{ 'is_active': isModalActive }"
      >
        <div class="p-6">
          card do perfil do usuario
        </div>
      </div>
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

#chat-content .main-content {
  width: 100%;
  padding: 0 1.25rem;
  transition: width 0.3s ease-in-out;
}

#chat-content .card-profile {
  box-shadow: -2px -2px 10px #00000045;
  width: 0%;
	height: 100vh;
  overflow: hidden;
  transition: width 0.3s ease-in-out;
}

#chat-content .card-profile.is_active {
  width: 40%;
  visibility: visible;
  opacity: 1;
}
.size_content {
  width: 70%;
}
</style>
