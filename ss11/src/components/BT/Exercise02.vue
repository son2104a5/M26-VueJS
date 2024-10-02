<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="incrementCount()">Counter</button>
  </div>
</template>

<script setup>
import { onUpdated, ref } from 'vue';

const count = ref(0)

const incrementCount = () => {
  count.value++;
}
onUpdated(()=>{
    console.log("Dữ liệu đã được thay đổi");
})
</script>

<style>

</style>