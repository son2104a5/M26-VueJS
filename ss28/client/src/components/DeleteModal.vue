<template>
    <div v-if="isVisible" class="modal">
      <div class="modal-content">
        <h2>Xác nhận</h2>
        <p>Bạn có chắc chắn muốn xóa sản phẩm khỏi giỏ hàng?</p>
        <button @click="confirm" class="btn-delete">Xóa</button>
        <button @click="cancel" class="btn-cancel">Hủy</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const props = defineProps({
    isVisible: Boolean,
    onConfirm: Function,
    onCancel: Function
  });
  
  const confirm = () => {
    props.onConfirm();
  };
  
  const cancel = () => {
    props.onCancel();
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
  
  .btn-delete {
    background-color: red;
    color: white;
    padding: 10px 20px;
    margin-right: 10px;
  }
  
  .btn-cancel {
    background-color: gray;
    color: white;
    padding: 10px 20px;
  }
  </style>
  