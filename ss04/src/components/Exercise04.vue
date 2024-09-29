<template>
  <div>
    <input type="text" @input="handleChange">
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const data = ref('')
watch(data, (newValue, oldValue) => {
    console.log(`Giá trị thay đổi từ "${oldValue}" thành "${newValue}"`)
})
const handleChange = (event) => {
    data.value = event.target.value;
}
</script>

<style>

</style>