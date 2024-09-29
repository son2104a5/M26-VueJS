<template>
  <div>
    <p>Mảng {{ numbers }}</p>
    <p><b>Các số chẵn từ mảng:</b></p>
    <span  v-for="(number, index) in newNumbers" :key="index">{{ number }}</span>
  </div>
</template>

<script setup>
const numbers = [1,2,3,4,5,6,7,8,9,10]
const newNumbers = numbers.map(number => {
    if (number % 2 === 0) {
        return number
    }
})
</script>

<style scoped>
span {
    margin-right: 10px
}
</style>