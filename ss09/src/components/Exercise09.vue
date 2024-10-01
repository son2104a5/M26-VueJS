<template>
  <div>
    <h3>Đăng ký tài khoản</h3>
    <p>Tên sinh viên</p>
    <input type="text" v-model="name" />
    <p style="color: red" :hidden="nameErr"
      >* Tên sinh viên không được để trống</p
    >
    <p>Email</p>
    <input type="email" v-model="email" />
    <p style="color: red" :hidden="emailErr2">* Email không được phép trùng</p>
    <p style="color: red" :hidden="emailErr">* Email không được để trống</p>
    <p>Mật khẩu</p>
    <input type="password" v-model="password" />
    <p style="color: red" :hidden="passwordErr"
      >* Mật khẩu không được để trống</p
    >
    <p>Số điện thoại</p>
    <input type="tel" v-model="phone" />
    <p style="color: red" :hidden="phoneErr"
      >* Số điện thoại không được để trống</p
    >
    <p><button @click="register">Đăng ký</button></p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const password = ref("");
const phone = ref("");

const nameErr = ref(true);
const emailErr = ref(true);
const emailErr2 = ref(true);
const passwordErr = ref(true);
const phoneErr = ref(true);

const students = ref(JSON.parse(localStorage.getItem("students")) || [])
const register = () => {
  if (name.value === "") {
    nameErr.value = false;
    if (email.value === "") {
      emailErr.value = false;
    }
    if (password.value === "") {
      passwordErr.value = false;
    }
    if (phone.value === "") {
      phoneErr.value = false;
    }
    return;
  } else {
    nameErr.value = true;
    emailErr.value = true;
    emailErr2.value = true;
    passwordErr.value = true;
    phoneErr.value = true;
  }
  if (
    email.value !== "" &&
    students.value.find((student) => student.email == email.value)
  ) {
    emailErr2.value = false;
  } else {
    const newStudent = {
      name: name.value,
      email: email.value,
      password: password.value,
      phone: phone.value,
    };

    name.value = "";
    email.value = "";
    password.value = "";
    phone.value = "";
    students.push(newStudent);
    alert("Đăng ký tài khoản thành công")
    localStorage.setItem("students", JSON.stringify(students));
  }
};
</script>

<style></style>
