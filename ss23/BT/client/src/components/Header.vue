<template>
  <div class="header">
    <h2>Quản lý <span>sinh viên</span></h2>
    <button class="add-btn" @click="$emit('openModal')"
      >+ Thêm mới sinh viên</button
    >
  </div>
</template>

<script setup></script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #35495e;
  color: white;
  padding: 10px;
}

.header h2 {
  margin: 0;
}

.header span {
  font-weight: bold;
}

.add-btn {
  background-color: #5cb85c;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>
