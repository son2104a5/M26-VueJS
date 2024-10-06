<template>
  <div>
    <div class="flex gap-5">
        <router-link :to="`/employees/${id}/profile`">Profile</router-link>
        <router-link :to="`/employees/${id}/projects`">Project</router-link>
        <router-link :to="`/employees/${id}/contact`">Contact</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
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

const route = useRoute();
const employee = ref(null);
const id = route.params.id;

onMounted(() => {
  employee.value = getEmployeeById(id);
});

const getEmployeeById = (id) => {
  return employees.find((emp) => emp.id === parseInt(id));
};
</script>
