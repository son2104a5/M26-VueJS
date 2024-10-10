<template>
  <div class="modal">
    <div class="modal-content">
      <slot></slot>
      <button @click="$emit('close')" class="close-btn">×</button>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["close"]);
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  position: relative;
  width: 400px;
  border-radius: 5px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
