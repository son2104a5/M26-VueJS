<template>
  <div>
    <h3>------------- ChildrenComponent ---------------</h3>
    <button style="padding: 10px;" @click="handleClick">Increment</button>
  </div>
</template>

<script setup>
const emit = defineEmits(["increase"])
const handleClick = () => {
    emit("increase")
}
</script>

<style>

</style>