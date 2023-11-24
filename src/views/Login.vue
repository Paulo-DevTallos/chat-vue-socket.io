<script setup>
import { computed, ref } from "vue";
import logo from "/img/dev-chat.png";
import MainButton from "@/components/MainButton/index.vue";
import LoginForm from "@/components/Forms/LoginForm.vue";

const showForm = ref(true);
const formLogin = ref(false);
const formRegister = ref(false);
const showCommands = ref(true);

const welcomeCommandMessageLogin = ref('Faça login para continuar');

const computedProperties = computed(() => {
  const handle = {
    setWelcomeMessage: formRegister.value ? 'Crie sua conta para continuar' : welcomeCommandMessageLogin.value,
  }
  return handle;
});

const callFormLogin = () => {
  showForm.value = !showForm.value;
  formLogin.value = !formLogin.value;
};

const callFormRegister = () => {
  showForm.value = !showForm.value;
  formRegister.value = !formRegister.value;
};

const login = (data) => {
  console.log(data, 'Esses são os dados do login');
};
</script>

<template>
  <div class="container-login">
    <div class="content text-center">
      <img :src="logo" alt="Logo DevChat" class="mx-auto" />
      <h1>Bem vindo ao ChatOn</h1>
      <h2 v-html="computedProperties.setWelcomeMessage"></h2>
      <div id="demo" v-if="showCommands" class="relative -translate-y-1/2 ...">
        <transition name="slide-fade">
          <div v-if="showForm" class="absolute w-full">
            <MainButton
              @handleForm="callFormLogin"
              class="bg-primary"
            >
              Entrar
            </MainButton>
            <MainButton
            @handleForm="callFormRegister"
              class="bg-primary"
            >
              Crie sua conta
            </MainButton>
          </div>
          <div v-else class="absolute">
            <LoginForm v-if="formLogin" @handleSubmit="login" />
            <form v-if="formRegister">
              <input type="text" placeholder="Seu nome" />
              <input type="email" placeholder="Seu email" />
              <input type="password" placeholder="Sua senha" />
              <button>Cadastrar</button>
            </form>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
}

.container-login .content img {
  width: 150px;
}

.container-login .content h1 {
  font-size: 1.7rem;
  margin: 1rem 0 0;
}

.container-login .content h2 {
  font-size: 1.3rem;
}

.container-login .content h1,
.container-login .content h2 {
  font-weight: normal;
}

.container-login .content #demo {
  position: relative;
  margin: 20px 0 120px;
}

/** add animation to change resource in home view */
.container-login .content #demo .slide-fade-enter-active {
  transition: all .2s ease-out;
}

.container-login .content #demo .slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.container-login .content #demo .slide-fade-enter-from,
.container-login .content #demo .slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
