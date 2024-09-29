<template>
  <div>
    <h2>Giỏ hàng</h2>
    <ul>
        <li v-for="(product, index) in products" :key="index">{{ product.name }} - Số lượng: {{ product.quantity }} <button @click="()=>handleClick(index)">Tăng số lượng</button></li>
    </ul>
    <p>Tổng số lượng sản phẩm: {{ total }}</p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const products = ref([
    { id: 1, name: 'Mèn mén loại 1', quantity: 3},
    { id: 2, name: 'Mèn mén loại 2', quantity: 2},
    { id: 3, name: 'Mèn mén loại 3', quantity: 1}
])
const total = computed(()=>{
    return products.value.reduce((sum, product) => sum + product.quantity, 0)
})
const handleClick = (index) => {
    products.value[index].quantity++
}
</script>

<style>

</style>