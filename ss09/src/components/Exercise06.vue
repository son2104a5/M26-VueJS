<template>
  <div>
    <p>Sở thích: {{ hobbies }}</p>
    <input type="checkbox" v-model="hobbies" value="Đá bóng"> Đá bóng <br>
    <input type="checkbox" v-model="hobbies" value="Bơi lội"> Bơi lội <br>
    <input type="checkbox" v-model="hobbies" value="Xem phim"> Xem phim <br>
    <input type="checkbox" v-model="hobbies" value="Code"> Code <br>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const hobbies = ref([])
</script>

<style>

</style>