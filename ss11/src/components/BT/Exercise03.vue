<template>
  <div>
    <h3>Current conpany: {{ companies[index] }}</h3>
    <h3>Age: {{ age }}</h3>
    <button @click="handleClick">Random</button>
  </div>
</template>

<script setup>
import { onUpdated, ref } from 'vue';

const companies = ["Rikkei Academy", "Rikkei Education", "Rikkei Fukuoka"]
const age = ref(1)
const index = ref(0)

const handleClick = () => {
    age.value = Math.floor(Math.random() * 10)
}

onUpdated(()=>{
    index.value = Math.floor(Math.random() * companies.length)
})
</script>

<style>

</style>