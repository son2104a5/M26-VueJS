<template>
  <div>
    <form action="#">
        <p><strong>Form</strong></p>
        <input type="text">
        <button @click="handleClick">Submit</button>
    </form>
  </div>
</template>

<script setup>
const handleClick = () => {
    console.log("Form submision prevented!");
}
</script>

<style>

</style>