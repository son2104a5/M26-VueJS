<template>
  <button @click="handleClick">{{ text }}</button>
</template>

<script setup>
import { ref, computed } from "vue";

const isShow = ref(true);
const text = computed(() => (isShow.value ? "Hiện" : "Ẩn"));

const handleClick = () => {
  isShow.value = !isShow.value;
};
</script>

<style></style>
