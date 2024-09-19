<template>
  <div>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script setup>
const handleClick = () => {
    console.log("Clicked");
}
</script>

<style>

</style>