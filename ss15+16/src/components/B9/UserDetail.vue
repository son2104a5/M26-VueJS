<template>
  <div>
    <h2>Thông tin chi tiết</h2>
    <p>Id: {{ user.id }}</p>
    <p>UserName: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Address: {{ user.address }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const users = [
  {
    id: 1,
    name: "Nguyen Van A",
    email: "nva@gmail.com",
    address: "Ha Noi",
  },
  {
    id: 2,
    name: "Nguyen Van B",
    email: "nvb@gmail.com",
    address: "Ha Nam",
  },
  {
    id: 3,
    name: "Nguyen Van C",
    email: "nvc@gmail.com",
    address: "Ninh Binh",
  },
];

const userId = parseInt(useRoute().params.id);

const user = users.find((u) => u.id === userId);
</script>
