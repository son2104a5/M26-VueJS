<template>
  <div>
    <button @click="handleClick1">Hiển thị</button><button @click="handleClick2">Ẩn</button>
    <p v-if="isVisible"><b>Nội dung được hiển thị</b></p>
    <p v-else><b>Nội dung bị ẩn</b></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isVisible = ref(true)
const handleClick1 = () => {
    isVisible.value = true
}

const handleClick2 = () => {
    isVisible.value = false
}
</script>

<style>

</style>