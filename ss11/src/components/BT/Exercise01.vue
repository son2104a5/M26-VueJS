<template>
  <div>
    <p>Mount component</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(()=>{
    console.log("Component mounted")
})
</script>

<style>

</style>