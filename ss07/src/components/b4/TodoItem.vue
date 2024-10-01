<template>
  <div>
    <h3>-------------- TodoItem ---------------</h3>
    <button style="padding: 10px" @click="handleClick">Delete</button>
  </div>
</template>

<script setup>
const props = defineProps(["id"])
const emit = defineEmits(["deleteItem"])
const handleClick = () => {
    emit("deleteItem")
}
</script>

<style>

</style>