<template>
  <div>
    <h3>----------- TodoAppComponent ------------</h3>
    <p>Id to delete: {{ id }}</p>
    <TodoItem :id="id" @deleteItem="deleteItem"/> 
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TodoItem from './TodoItem.vue';

const id = ref('')
const deleteItem = () => {
    id.value = 1
}
</script>

<style>

</style>