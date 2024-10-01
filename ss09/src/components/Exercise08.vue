<template>
  <div>
    <h3>Thêm mới tài khoản</h3>
    <p>Họ và tên</p>
    <input type="text" v-model="userName">
    <p>Email</p>
    <input type="email" v-model="email">
    <p>Mật khẩu</p>
    <input type="password" v-model="password">
    <p>Nhập lại mật khẩu</p>
    <input type="password" v-model="rePassword">
    <br><br>
    <button @click="handleClick">Thêm mới</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const userName = ref("")
const email = ref("")
const password = ref("")
const rePassword = ref("")

const handleClick = () => {
    const newUser = {
        userName: userName.value,
        email: email.value,
        password: password.value,
        rePassword: rePassword.value
    }

    userName.value = ""
    email.value = ""
    password.value = ""
    rePassword.value = ""

    console.log(newUser);
    
}
</script>

<style>

</style>