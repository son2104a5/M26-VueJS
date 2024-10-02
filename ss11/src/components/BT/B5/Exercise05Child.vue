<template>
  <div>
    <p>Đã hiển thị component</p>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onUnmounted } from 'vue';


const props = defineProps(["isShow"])

onBeforeUnmount(()=>{
    console.log("Component is about to be unmount");
})
onUnmounted(()=>{
    console.log("Component has been unmounted");  
})
</script>

<style>

</style>