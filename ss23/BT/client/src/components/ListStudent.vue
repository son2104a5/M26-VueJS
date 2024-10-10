<template>
    <table class="student-table">
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th>Tên sinh viên</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Số điện thoại</th>
          <th>Lựa chọn</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td><input type="checkbox" /></td>
          <td>{{ student.student_name }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.address }}</td>
          <td>{{ student.phone }}</td>
          <td>
            <button @click="$emit('editStudent', student.id)" class="edit-btn">✏️</button>
            <button @click="$emit('deleteStudent', student.id)" class="delete-btn">🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>
  defineProps({
    students: Array,
  });
  </script>
  
  <style scoped>
  .student-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  
  .student-table th, .student-table td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  .edit-btn, .delete-btn {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .edit-btn {
    color: #f0ad4e;
  }
  
  .delete-btn {
    color: #d9534f;
  }
  </style>
  