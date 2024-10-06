<template>
  <div class="pl-5">
    <div class="flex gap-5 mt-4">
        <router-link v-for="(user, index) in users" :key="index" class="p-2 border">
            <p>Id: {{ user.id }}</p>
            <p>UserName: {{ user.name }}</p>
            <p>Email: {{ user.email }}</p>
            <p>Address: {{ user.address }}</p>
            <button class="p-1 bg-slate-200 w-full border border-black" @click="viewDetails(user)">Xem chi tiết</button>
        </router-link>
    </div>
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
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
const viewDetails = (user) => {
  // Chuyển hướng đến trang chi tiết người dùng
    router.push(`/user-detail/${user.id}`,{ name: 'UserDetails', params: { user } })
};
</script>
