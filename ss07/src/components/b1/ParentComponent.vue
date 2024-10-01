<template>
  <div>
    <h3>---------- Parent Component ----------</h3>
    <p>Parent Company: {{ company }}</p>
    <ChildComponent :company="company"/>
  </div>
</template>

<script setup>
import ChildComponent from './ChildComponent.vue';

const company = "Rikkei Academy"
</script>

<style>

</style>