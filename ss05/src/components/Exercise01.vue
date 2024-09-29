<template>
  <div>
    <button @click="handleClick">Hiện</button>
    <p v-if="isShow">Rikkei Education</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(false)

const handleClick = () => {
  isShow.value = true
}
</script>

<style>

</style>