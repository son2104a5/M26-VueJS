<template>
  <button @click="() => handleClick('Rikkei Academy')">Get param</button>
</template>

<script setup>
const handleClick = (text) => {
    console.log(text);
}
</script>

<style>

</style>