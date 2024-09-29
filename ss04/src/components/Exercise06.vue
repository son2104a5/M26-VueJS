<template>
  <div>
    <input type="number" @input="handleInput" v-bind:value="money">
    <button @click="handleClick">Add to cart</button>
    <p>Tổng tiền trong giỏ hàng: {{ total }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const money = ref(0)
const total = ref(0)
const handleInput = (event) => {
    money.value = Number(event.target.value)
}
const handleClick = () => {
    total.value += money.value
    money.value = 0
}
</script>

<style>

</style>