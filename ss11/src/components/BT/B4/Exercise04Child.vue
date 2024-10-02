<template>
  <div>
    <p>Age: {{ props.age }}</p>
  </div>
</template>

<script setup>
import { onUpdated } from 'vue';

const props = defineProps(["age"])

onUpdated(()=>{
    alert("Giá trị của biến age đã thay đổi")
})
</script>

<style>

</style>