<template>
  <div>
    <h1>Profile Page</h1>
    <input type="text" v-model="username">
    <router-link to="/">Home</router-link>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';

const username = ref("")

onBeforeRouteLeave((to, from, next)=>{
  if (username.value) {
    const isConfirm = confirm("Bạn có xác nhận muốn rời trang không?")
    if (isConfirm) {
      // Lưu dữ liệu
      // Cho phép điều hướng
      next()
    } else {
      // Từ chối điều hướng
      next(false)
    }
  }
})
</script>
<style></style>
