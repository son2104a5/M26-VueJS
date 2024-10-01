<template>
  <div>
    <h3>Đăng nhập tài khoản</h3>
    <p>Email</p>
    <input type="email" v-model="email">
    <p style="color: red;" :hidden="errEmail">* Email không được để trống</p>
    <p>Mật khẩu</p>
    <input type="password" v-model="password">
    <p style="color: red;" :hidden="errPassword">* Mật khẩu không được để trống</p>
    <p><button @click="login">Đăng nhập</button></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const students = ref(JSON.parse(localStorage.getItem("students")))
const email = ref('')
const password = ref('')

const errEmail = ref(true)
const errPassword = ref(true)

const login = () => {
    if(email.value === ''){
      errEmail.value = false
      if(password.value === ''){
        errPassword.value = false
      }
    }else{
      errEmail.value = true
      errPassword.value = true
      if(students.value.find(student => student.email === email.value)){
        if(students.value.find(student => student.password === password.value)){
          alert("Đăng nhập thành công")
        }else{
          alert("Đăng nhập thất bại")
        }
      } else {
        alert("Đăng nhập thất bại")
      }
    }
}
</script>

<style>

</style>