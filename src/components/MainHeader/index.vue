<script setup>
import user_profile from '/img/user-empty-profile.jpg';
</script>

<template>
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
</template>

<style scoped>
header img {
  margin-right: 14px;
  width: 55px;
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
