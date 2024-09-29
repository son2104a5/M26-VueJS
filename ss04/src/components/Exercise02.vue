<template>
  <div>
    <p>Company: {{ data.company }}</p>
    <p>Age: {{ data.age }}</p>
    <button @click="handleClick">Change data</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const data = reactive({
    company: 'Rikkei Academy',
    age: 3
})
const handleClick = () => {
    data.age--;
}
</script>

<style>

</style>