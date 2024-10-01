<template>
  <div>
    <ProductChildren :id="id" :name="name" :price="price" :quantity="quantity"/>
  </div>
</template>

<script setup>
import ProductChildren from './ProductChildren.vue';
const id = 1
const name = 'Bưởi Ba Roi'
const price = 12.000
const quantity = 10

</script>

<style>

</style>