<template>
  <div class="modal-overlay">
    <div class="modal">
      <h2>Xóa sinh viên</h2>
      <p
        >Bạn có chắc muốn xóa sinh viên
        <strong>{{ student.student_name }}</strong
        >?</p
      >
      <div class="form-actions">
        <button type="button" @click="$emit('closeModal')">Hủy</button>
        <button type="button" @click="$emit('confirmDelete')"
          >Xác nhận xóa</button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  student: Object,
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  text-align: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}

.modal h2 {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
}

.modal p {
  margin-bottom: 20px;
  font-size: 16px;
}

.form-actions {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.form-actions button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.form-actions button:first-child {
  background-color: #ccc;
}

.form-actions button:last-child {
  background-color: #d9534f;
  color: white;
}

</style>
