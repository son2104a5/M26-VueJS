<template>
    <div>
      <h3>Thời gian hiện tại: {{ hour }} : {{ minute }} : {{ second }}</h3>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  
  const second = ref(0);
  const minute = ref(0);
  const hour = ref(0);
  
  onMounted(() => {
    const updateTime = () => {
      const date = new Date();
      second.value = date.getSeconds();
      minute.value = date.getMinutes();
      hour.value = date.getHours();
    };
  
    updateTime(); // Update time immediately on mount
    setInterval(updateTime, 1000); // Update every second
  });
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  