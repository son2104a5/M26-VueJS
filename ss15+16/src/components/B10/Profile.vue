<template>
  <div>
    <h3>Thông tin cá nhân</h3>
    <p>Id: {{ employee.id }}</p>
    <p>Tên: {{ employee.name }}</p>
    <p>Vị trí: {{ employee.position }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const employees = [
  {
    id: 1,
    name: "Nguyen Van A",
    position: "Developer",
    email: "nva@gmail.com",
    address: "Ha Noi",
  },
  {
    id: 2,
    name: "Nguyen Van B",
    position: "Designer",
    email: "nvb@gmail.com",
    address: "Ha Nam",
  },
  {
    id: 3,
    name: "Nguyen Van C",
    position: "Manager",
    email: "nvc@gmail.com",
    address: "Ninh Binh",
  },
];

const id = parseInt(useRoute().params.id);

const employee = employees.find((employee) => employee.id === id);

</script>
