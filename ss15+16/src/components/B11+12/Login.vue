<template>
  <div>
    <div class="border w-1/3 p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ml-6 mt-6">
        <h1 class="font-bold text-2xl text-center pb-4">Login account</h1>
        <div class="my-4">
            <p class="font-semibold mb-2">Your email</p>
            <input type="email" placeholder="name@company.com" class="border w-full p-2 rounded bg-slate-100">
        </div>
        <div class="my-4">
            <p class="font-semibold mb-2">Password</p>
            <input type="email" placeholder="**********" class="border w-full p-2 rounded bg-slate-100">
        </div>
        <div class="my-5">
            <router-link to="/b11-12"><button class="p-2 text-white bg-blue-600 rounded-lg w-full">Login an account</button></router-link>
        </div>
        <div class="my-5 text-center">
            <p class="text-slate-300">Don't have an account? <router-link to="/b11-12/register" class="text-slate-600 font-bold">Register here</router-link></p>
        </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style>

</style>