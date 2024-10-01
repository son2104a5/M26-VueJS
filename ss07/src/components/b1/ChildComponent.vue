<template>
  <div>
    <h3>--------- ChildComponent ----------</h3>
    <p>ChildComponent: {{ props.company }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["company"])
</script>

<style>

</style>