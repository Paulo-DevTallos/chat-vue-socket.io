<script setup>
import { ref } from 'vue';
import user_profile from '/img/user-empty-profile.jpg';

const listContacts = ref([
  {
    id: 1,
    name: 'Guilherme Martins',
    last_message: 'Última mensagem env...',
    time: '9:45 AM',
    user_profile,
  },
  {
    id: 2,
    name: 'Aldo Souza',
    last_message: 'Última mensagem',
    time: '10:23 AM',
    user_profile,
  },
  {
    id: 3,
    name: 'Luiz Brito',
    last_message: 'Última mensagem',
    time: '10:35 AM',
    user_profile,
  },
]);
</script>

<template>
  <ul class="mt-6 px-6">
    <li
      v-for="contact in listContacts"
      :key="contact.id"
      class="flex px-1 py-3 hover:bg-slate-200 border-b-1 border-slate-200"
    >
      <div>
        <img
          :src="contact.user_profile"
          :alt="`Foto do contato ${contact.name}`"
          class="rounded-full"
        />
      </div>
      <div class="flex w-full">
        <div class="pl-3" style="width: 80%;">
          <h3 class="font-medium text-base text-primary mb-2">
            {{ contact.name }}
          </h3>
          <p class="text-slate-500 leading-4 text-sm font-medium">
            {{ contact.last_message }}
          </p>
        </div>
        <div style="width: 20%;" class="text-right">
          <small class="text-slate-500 font-medium">
            {{ contact.time }}
          </small>
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
