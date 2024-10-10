<template>
  <div class="pagination">
    <span>Hiển thị 5/10 bản ghi</span>
    <ul class="pagination-list">
      <li><button @click="$emit('prevPage')">Trước</button></li>
      <li v-for="n in totalPages" :key="n">
        <button @click="$emit('goToPage', n)">{{ n }}</button>
      </li>
      <li><button @click="$emit('nextPage')">Sau</button></li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  currentPage: Number,
  totalPages: Number,
});
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.pagination-list {
  list-style: none;
  display: flex;
  gap: 5px;
}

.pagination-list button {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
