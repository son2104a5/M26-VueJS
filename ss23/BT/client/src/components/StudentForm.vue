<template>
  <div class="modal-overlay">
    <div class="modal">
      <h2>{{ isEdit ? "Sửa sinh viên" : "Thêm mới sinh viên" }}</h2>
      <form @submit.prevent="$emit('submitForm')">
        <div class="form-group" :class="{ error: errors.student_name }">
          <label>Tên sinh viên</label>
          <input v-model="student.student_name" type="text" />
          <span v-if="errors.student_name" class="error-msg">{{
            errors.student_name
          }}</span>
        </div>
        <div class="form-group" :class="{ error: errors.email }">
          <label>Email</label>
          <input v-model="student.email" type="email" />
          <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
        </div>
        <div class="form-group" :class="{ error: errors.address }">
          <label>Địa chỉ</label>
          <input v-model="student.address" type="text" />
          <span v-if="errors.address" class="error-msg">{{
            errors.address
          }}</span>
        </div>
        <div class="form-group" :class="{ error: errors.phone }">
          <label>Số điện thoại</label>
          <input v-model="student.phone" type="text" />
          <span v-if="errors.phone" class="error-msg">{{ errors.phone }}</span>
        </div>
        <div class="form-actions">
          <button type="button" @click="$emit('closeModal')">Cancel</button>
          <button type="submit">{{
            isEdit ? "Save Changes" : "Add Student"
          }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
defineProps({
  student: Object,
  errors: Object,
  isEdit: Boolean,
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
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.form-group.error input {
  border: 1px solid red;
}

.error-msg {
  color: red;
  font-size: 12px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

.form-actions button:first-child {
  background-color: #ccc;
}

.form-actions button:last-child {
  background-color: #5cb85c;
  color: white;
}
</style>
