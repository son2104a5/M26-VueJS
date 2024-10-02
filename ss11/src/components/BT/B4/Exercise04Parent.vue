<template>
  <div>
    <Exercise04Child :age="age"/>
    <button @click="handleClick">Increase age</button>
  </div>
</template>

<script setup>
import Exercise04Child from './Exercise04Child.vue';

import { ref } from 'vue';

const age = ref(1)
const handleClick = () => {
    age.value++;
}
</script>

<style>

</style>