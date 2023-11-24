<script setup>
</script>

<template>
  <div class="w-full flex h-screen">
    <aside style="background-color: red; width: 25%;">
      <figure>
        Aqui ficará a foto do usuário
        Nome do usuario
        <!-- <img src="" alt="Foto do usuário" />
        <figcaption>
          Nome do usuário
        </figcaption> -->
      </figure>
      <ul>
        <li>lista com os meus usuarios</li>
      </ul>
    </aside>
    <div style="background-color: yellow; width: 100%;">
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

</style>
