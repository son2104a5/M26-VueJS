<template>
  <div>
    <p class="block" v-bind:class="isActive ? 'active' : ''">Block</p>
  </div>
</template>

<script setup>
const isActive = true
const backgroundColor = "blue"
</script>

<style>
.block{
    background-color: v-bind(backgroundColor);
    padding: 10px;
}
.active{
    color: #fff;
}
</style>