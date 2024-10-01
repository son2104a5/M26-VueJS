<template>
  <div>
    <h3>----------- ParentComponent -------------</h3>
    <p>Count: {{ count }}</p>
    <CountChildren @increase="increase"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CountChildren from './CountChildren.vue';

const count = ref(0)
const increase = () => {
    count.value++;
}
</script>

<style>

</style>