<template>
  <div>
    <h2>Child</h2>
    <p>Giá trị nhận về từ componet cha: {{ props.propName }}</p>
    <p>Tên: {{ props.fullName }}</p>
    <p>Tuổi: {{ props.age }}</p>
    <slot name="intro"> </slot>
    <p>nơi hiển thị slot của học lập trình vue</p>
    <slot :item="data" name="contact"> </slot>
    <p>nơi hiển thị slot của phần tìm hiểu slot</p>
  </div>
</template>

<script setup>
// const props = defineProps({ propName: "", age: "", fullName: "" })
const props = defineProps(["propName", "age", "fullName"]);
console.log("Giá trị của props", props);
const data = 'k23_ptit'
</script>

<style></style>
