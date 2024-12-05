<template>
  <form @submit.prevent="submitForm">
    <label for="date">Date</label>
    <input type="date" id="date" v-model="date" required />
    <label for="title">Titre</label>
    <input type="text" id="title" v-model="title" required />
    <button type="submit">Ajouter</button>
  </form>
</template>

<script setup>
import { ref, inject } from 'vue';

const date = ref('');
const title = ref('');
const addEvent = inject('addEvent');

const submitForm = () => {
  const newEvent = {
    id: Date.now(),
    date: date.value,
    title: title.value,
    state: 'à venir',
  };
  addEvent(newEvent);
  date.value = '';
  title.value = '';
};


</script>

<style scoped>
/* Ajoutez votre style ici */
</style>