<template>
  <div>
    <input
      v-model="inputValue"
      ref="inputRef"
      @keyup="handleKeyup"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
const inputValue = ref("");
const inputRef = ref(null);

const handleKeyup = (event) => {
  if (event.key === "Enter") {
    if (event.shiftKey) {
      alert(inputValue.value);
      inputValue.value = "";
      inputRef.value.focus();
    } else {
      alert("Bạn cần nhấn Shift + Enter");
    }
  }
};
</script>

<style scoped>
input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
