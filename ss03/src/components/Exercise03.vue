<template>
  <div>
    <input type="text" v-bind:disabled="isDisable" v-bind:value="value">
  </div>
</template>

<script setup>
const isDisable = true
const value = isDisable ? "" : "Cho phép nhập"
</script>

<style>

</style>