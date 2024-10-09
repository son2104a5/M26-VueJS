<template>
  <div>
    <h1>VUE API</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
        <button @click="updateUser(user.id)">Cập nhật</button>
        <button @click="deleteUser(user.id)">Xóa</button>
      </li>
    </ul>
    
    <button @click="addUser">Thêm dữ liệu vào json-server</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const users = ref([])
// Hàm lấy dữ liệu từ json-server
const getData = async() => {
  const res = await fetch('http://localhost:3000/users')
  const data = await res.json()
  users.value = data
}
onMounted(()=>{
  getData()
})

// Khai báo hàm thêm user
const addUser = async() => {
  const newUser = {
    name: 'Ben'
  }
  await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
  getData()
}

// Khai báo hàm xóa user
const deleteUser = async(id) => {
  await fetch(`http://localhost:3000/users/${id}`, {
    method: 'DELETE'
  })
  users.value = users.value.filter(user => user.id!== id)
  getData()
}

// Khai báo hàm cập nhật user
const updateUser = async(id) => {
  const updatedUser = {
    name: 'John'
  }
  await fetch(`http://localhost:3000/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedUser)
  })
  getData()
}
</script>

<style>

</style>