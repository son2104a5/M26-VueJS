<template>
  <div>
    <h3>Thêm mới sản phẩm</h3>
    <p>Mã sản phẩm</p>
    <input type="text" v-model="productCode">
    <p>Tên sản phẩm</p>
    <input type="text" v-model="productName">
    <p>Giá</p>
    <input type="text" v-model="price">
    <p>Số lượng</p>
    <input type="number" v-model="quantity">
    <br><br>
    <button @click="handleClick">Thêm mới</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const productCode = ref("")
const productName = ref("")
const price = ref("")
const quantity = ref("")

const handleClick = () => {
    const newProduct = {
      productCode: productCode.value,
      productName: productName.value,
      price: Number(price.value),
      quantity: Number(quantity.value)
    }
    productCode.value = ""
    productName.value = ""
    price.value = ""
    quantity.value = ""
    console.log(newProduct);
}
</script>

<style>

</style>