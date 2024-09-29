<template>
  <div>
    <p>Acreage: {{ calculateArea }}</p>
    <button @click="handleClick">Change data</button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const width = ref(10)
const height = 20

const calculateArea = computed(()=>{
  return width.value * height
})
const handleClick = () => {
    width.value += 10
}
</script>

<style>

</style>