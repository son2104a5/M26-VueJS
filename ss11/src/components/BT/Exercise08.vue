<template>
  <div>
    <h3>Chiều rộng cửa sổ: {{ sized }}px</h3>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const sized = ref(window.innerWidth)
    
onMounted(()=>{
  window.addEventListener('resize', () => {
    sized.value = window.innerWidth;
  });
})

</script>

<style>

</style>