<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="handleClick">Increment</button>
  </div>
</template>

<script setup>
import { onUpdated, ref } from 'vue';

const count = ref(0)
const handleClick = () => count.value++
onUpdated(()=>{
    document.title = count.value
})
</script>

<style>

</style>