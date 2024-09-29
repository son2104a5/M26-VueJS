<template>
  <div>
    <button @click="handleClick1">Hiện</button> <button @click="handleClick2">Ẩn</button>
    <p v-show="isShow">Thông báo: <strong>Welcome to Rikkei Education</strong></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(true)
const handleClick1 = () => {
    isShow.value = true;
}

const handleClick2 = () => {
    isShow.value = false;
}
</script>

<style>

</style>