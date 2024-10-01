<template>
  <div>
    <input type="color" v-model="color">
    <p>Mã màu: {{ color }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const color = ref("")
</script>

<style>

</style>