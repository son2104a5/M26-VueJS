<template>
    <div>
        <input type="number" v-bind:value="number" @input="handleInput">
        <p>Giá trị hiện tại: {{ number }}</p>
        <p>Giá trị bình phương: {{ number * number }}</p>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const number = ref(0)
const handleInput = (event) => {
    number.value = event.target.value
}
watch(number, (newValue, oldValue) => {
    console.log("Giá trị number thay đổi từ", oldValue, "thành", newValue)
})
</script>

<style>

</style>