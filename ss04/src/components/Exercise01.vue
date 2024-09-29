<template>
    <div>
        <button @click="increase">Click {{ count }} lần</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref('0')
const increase = () => {
    count.value++
}
</script>

<style>

</style>