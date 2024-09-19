<template>
  <div>
    <a :href="link" @click="checkLink($event)">Click me</a>
  </div>
</template>

<script setup>
const link = "http://www.google.com"
const checkLink = (event) => {
    if (this.link === "http://www.google.com") {
        event.preventDefault();
        alert("Đường dẫn không hợp lệ");
    }
}
</script>

<style>

</style>