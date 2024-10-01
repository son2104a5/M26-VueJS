<template>
  <div>
    <h3>Dữ liệu trong component con</h3>
    <h4>Id: {{ props.id }}</h4>
    <h4>Name: {{ props.name }}</h4>
    <h4>Price: {{ props.price }}</h4>
    <h4>Quantity: {{ props.quantity }}</h4>
  </div>
</template>

<script setup>
const props = defineProps(["id", "name", "price", "quantity"])
</script>

<style>

</style>