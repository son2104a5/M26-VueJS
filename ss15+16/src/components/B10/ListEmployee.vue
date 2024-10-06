<template>
  <div>
    <h2>Danh sách nhân viên</h2>
    <div class="flex gap-5 mt-4">
        <router-link v-for="(employee, index) in employees" :key="index" class="p-2 border">
            <p>Id: {{ employee.id }}</p>
            <p>Name: {{ employee.name }}</p>
            <p>Position: {{ employee.position }}</p>
            <button class="p-1 bg-slate-200 w-full border border-black" @click="viewDetails(employee.id)">Xem chi tiết</button>
        </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const employees = [
  { id: 1, name: "Nguyen Van A", position: "Developer" },
  { id: 2, name: "Nguyen Van B", position: "Designer" },
  { id: 3, name: "Nguyen Van C", position: "Manager" },
];

const router = useRouter();

const viewDetails = (id) => {
  router.push(`/employees/${id}`);
};
</script>
