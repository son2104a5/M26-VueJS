<template>
  <div>
    <p>Tiến độ hoàn thành: {{ data }} %</p>
    <input type="range" v-model="data">
  </div>
</template>

<script setup>
import { ref } from 'vue';

const data = ref("")
</script>

<style>

</style>