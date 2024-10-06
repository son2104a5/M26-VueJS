<!-- <template>
  <div>
    <h1 class="text-3xl font-bold">Vue Router</h1>
    <a href="/">Click home</a> || <a href="/about">Click about</a> || <a href="/contact">Click contact</a> // Load lại trang
    <router-link to="/">Click home</router-link> || <router-link to="/about">Click about</router-link> || <router-link to="/contact">Click contact</router-link> || 
    <button @click="redirectPage">Redirect</button>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView, useRouter } from 'vue-router';
const router = useRouter()
Khai báo hàm điều hướng sang các trang khác
const redirectPage = () => {
  router.push('/') // Điều hướng sang trang mình muốn
  // router.replace('/')  // Cũng điều hướng nhưng không lưu lại lịch sử truy cập, khi quay về sẽ về lại trang chủ
}
</script>

<style>

</style> -->

<template>
  <RouterView />
</template>

<script>
export default {

}
</script>

<style>

</style>