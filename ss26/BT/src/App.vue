<template>
  <div>
    <h2>Bài 1:</h2>
    <Profile />
    <h2>Bài 2:</h2>
    <ListUser />
    <h2>Bài 3:</h2>
    <ListProduct />
    <h2>Bài 4:</h2>
    <Counter />
    <h2>Bài 5:</h2>
    <RandomNumber />
    <h2>Bài 6:</h2>
    <ChangeState />
    <h2>Bài 7:</h2>
    <DarkMode />
    <h2>Bài 8:</h2>
    <ChangeLanguage />
  </div>
</template>

<script setup>
import Profile from '@/components/Profile.vue'
import ListUser from './components/ListUser.vue';
import ListProduct from './components/ListProduct.vue';
import Counter from './components/Counter.vue';
import RandomNumber from './components/RandomNumber.vue';
import ChangeState from './components/ChangeState.vue';
import DarkMode from './components/DarkMode.vue';
import ChangeLanguage from './components/ChangeLanguage.vue';
</script>

<style>

</style>