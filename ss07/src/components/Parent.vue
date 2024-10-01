<template>
  <div>
    <h1>parent</h1>
    <Child :default="item" :propName="message" :age="age" :fullName="fullName">
        <template #intro><h2>Học lập tình vuejs</h2></template>
        <template #contact><h3>Tìm hiểu slot trong vuejs</h3></template>
        <p>Giá trị nhận về từ component con: {{ item }}</p>
    </Child>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Child from './Child.vue';
let message = ref('Hello')
let age = ref(20)
let fullName = ref('Nguyễn Văn A')
</script>

<style>

</style>