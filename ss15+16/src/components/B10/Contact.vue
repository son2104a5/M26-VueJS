<template>
  <div>
    <h3>Liên hệ</h3>
    <p>Email: {{ employee.email }}</p>
    <p>Địa chỉ: {{ employee.address }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
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

const employee = computed(() => {
  return employees.find((e) => e.id === id);
});

</script>
