<template>
  <div>
    <input type="text" v-bind:value="inputValue">
    <button @click="handleClick">Click</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref("Rikkei Academy")
const handleClick = () => {
    inputValue.value = "K23_PTIT"
}
</script>

<style>

</style>