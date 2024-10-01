<template>
  <div>
    <label for="">Email</label>
    <br>
    <input type="text" v-model="inputValue">
    <p>Gía trị: {{ inputValue }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref("")
</script>

<style>

</style>