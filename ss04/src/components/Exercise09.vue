<template>
  <div>
    <h2>Danh sách bài viết</h2>
    <h4 v-for="(item, index) in data" :key="index">
        <p>Id: {{ item.id }}</p>
        <p>Title: {{ item.title }}</p>
        <p>Content: {{ item.content }}</p>
        <p>Author: {{ item.author }}</p>
        <p>-------------------------------------------------------------</p>
    </h4>
  </div>
</template>

<script setup>
const data = [
    { id: 1, title: 'Tại sao phải học React', content: 'Học React để đi làm', author: 'Linda'},
    { id: 2, title: 'Làm thế nào để đưa React vào thiết kế web', content: 'Thiết kế web với React', author: 'Chantal'},
    { id: 3, title: 'Chuyển đổi hướng dẫn React thành Angular', content: 'Hướng dẫn chuyển đổi', author: 'Quait'}
]
</script>

<style>

</style>