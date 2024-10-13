<template>
  <div>
    <p>header</p>
    <p>giá trị của count: {{ store.state.count }}</p>
    <p>count lấy theo getters: {{ store.getters.getCount }}</p>
    <button @click="increase">increase</button>
    <button @click="handleClick">increase after 1s</button>
    <ul>
        <li v-for="(todo, index) in store.state.todos" :key="index">
            {{ todo.title }}
        </li>
    </ul>
    <button @click="getDoneTodos">Lấy ra các công việc đã hoàn thành</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore()

console.log(store);

const getDoneTodos = () => {
    console.log(store.getters.doneTodos);
}

const increase = () => {
    store.commit('increment', {
        amount: 5
    })
}
const handleClick = () => {
    store.dispatch('incrementAsync')
}
</script>

<style>

</style>