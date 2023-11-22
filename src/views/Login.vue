<script setup>
import logo from "../../public/img/dev-chat.png";
</script>

<template>
  <div class="container-login">
    <div class="content">
      <img :src="logo" alt="Logo DevChat" />
      <h1>Bem vindo ao ChatOn</h1>
      <h2>Faça login para continuar</h2>
      <button>Login</button>
      <button>Crie sua conta</button>
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

.container-login .content {
  text-align: center;
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

.container-login .content button {
  margin: 1.8rem 3px 0;
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: #004AAD;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}
</style>
