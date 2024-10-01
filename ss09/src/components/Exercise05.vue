<template>
  <div>
    <p>Giới tính: {{ gender }}</p>
    <input type="radio" v-model="gender" value="Nam" /> Nam
    <br>
    <input type="radio" v-model="gender" value="Nữ" /> Nữ
    <br>
    <input type="radio" v-model="gender" value="Khác"> Khác
  </div>
</template>

<script setup>
import { ref } from 'vue';

const gender = ref("")
</script>

<style>

</style>