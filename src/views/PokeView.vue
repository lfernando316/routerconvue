<script setup>
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const router = useRouter();

const poke = ref();

const back = () => {
  router.push("/pokemons");
};

const getdata = async () => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
    );
    poke.value = data;
  } catch (error) {
    console.log(error);
    poke.value = null;
  }
};

getdata();
</script>

<template>
  <div v-if="poke">
    <img :src="poke?.sprites.front_default" />
    <h1>Poke name: {{ $route.params.name }}</h1>
  </div>
  <h1 v-else>No existe el pokemon</h1>
  <button @click="back" class="btn btn-outline-primary">Volver</button>
</template>
