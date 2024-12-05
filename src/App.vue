<template>
  <div>
    <h1>Agenda</h1>
    <p>Nombre d'évenements: {{  eventCount }}</p>
    <ul>
      <li v-for="event in events" :key="event.id">
        {{ event.title }} - {{ event.date }} - {{ event.state }}
        <button @click="toggleEventState(event.id)">Changer l'état</button>
      </li>
    </ul>
    <router-link to="/ajout">Ajouter un événement</router-link>
    <RouterView />
  </div>
</template>

<script setup>
  import { ref, computed, provide } from "vue";

  const events = ref([
    { id: 1, date: "2023-10-01", title: "Événement 1", state: "à venir" },
    { id: 2, date: "2023-10-02", title: "Événement 2", state: "terminé" },
  ]);

  
  const addEvent = (event) => {
    events.value.push(event);
  };

  const toggleEventState = (id) => {
    const event = events.value.find((event) => event.id === id);
    if (event) {
      event.state = event.state === "à venir" ? "terminé" : "à venir";
    }
  };

  const eventCount = computed(() => events.value.length);

  provide("addEvent", addEvent);
</script>

<style scoped></style>
