<template>
  <div>
    <Exercise05Child :isShow="isShow" v-if="isShow"/>
    <button @click="handleClick">Toggle</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Exercise05Child from './Exercise05Child.vue';

const isShow = ref(false)
const handleClick = () => {
    isShow.value = !isShow.value;
}
</script>

<style>

</style>