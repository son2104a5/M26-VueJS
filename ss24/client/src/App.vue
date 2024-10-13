<template>
  <div class="container">
    <div class="header">
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm"
        class="search-input"
        v-model="searchQuery"
        @input="filterPosts"
      />
      <select
        class="filter-select"
        v-model="filterStatus"
        @change="filterPosts"
      >
        <option value="">Lọc bài viết</option>
        <option value="published">Đã xuất bản</option>
        <option value="unpublished">Chưa xuất bản</option>
      </select>
      <button class="add-btn">Thêm mới bài viết</button>
    </div>

    <div class="table-container">
      <table class="post-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Hình ảnh</th>
            <th>Ngày viết</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in paginatedPosts" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ post.title }}</td>
            <td
              ><img :src="post.image" alt="Post Image" class="post-image"
            /></td>
            <td>{{ post.created_at }}</td>
            <td>
              <span
                :class="[
                  'status-chip',
                  post.status ? 'published' : 'unpublished',
                ]"
              >
                {{ post.status ? "Đã xuất bản" : "Ngừng xuất bản" }}
              </span>
            </td>
            <td>
              <button class="block-btn" @click="openModal(post)">{{ post.status ? 'Chặn' : 'Bỏ chặn' }}</button>
              <button class="edit-btn">Sửa</button>
              <button class="delete-btn">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      v-if="loading"
      style="
        position: fixed;
        background-color: rgba(0, 0, 0, 0.7);
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
      "
    >
      <v-progress-circular
        :size="100"
        :width="5"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>

    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Xác nhận</h2>
        <p>Bạn có chắc chắn muốn {{ selectedPost.status ? 'ngừng xuất bản' : 'xuất bản lại' }} bài viết?</p>
        <div class="modal-buttons">
          <button class="cancel-btn" @click="closeModal">Hủy</button>
          <button class="confirm-btn" @click="confirmBlock">Xác nhận</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, computed, onMounted } from "vue";

const posts = ref([]);
const searchQuery = ref("");
const filterStatus = ref("");
const pageLimit = 5;
const loading = ref(true);

const isModalOpen = ref(false);
const selectedPost = ref();

const getAllPosts = () => {
  axios
    .get("http://localhost:8080/posts")
    .then((response) => {
      posts.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      loading.value = false;
    });
};

const openModal = (post) => {
  selectedPost.value = post;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedPost.value = '';
};

const confirmBlock = () => {
  axios.patch(`http://localhost:8080/posts/${selectedPost.value.id}`, { status: !selectedPost.value.status })
    .then(() => {
      getAllPosts();
      closeModal();
    })
    .catch((error) => {
      console.log(error);
      closeModal();
    });
};

const paginatedPosts = computed(() => {
  let filteredPosts = posts.value;

  if (searchQuery.value) {
    filteredPosts = filteredPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  if (filterStatus.value) {
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.status ===
        (filterStatus.value === "published" ? "Đã xuất bản" : "Ngừng xuất bản")
    );
  }

  return filteredPosts.slice(0, pageLimit);
});

onMounted(() => {
  getAllPosts();
});
</script>

<style scoped>
.container {
  max-width: 1000px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.search-input {
  padding: 10px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.filter-select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-btn {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-btn:hover {
  background-color: #0056b3;
}

.table-container {
  max-height: 300px;
  overflow-y: auto;
}

.post-table {
  width: 100%;
  border-collapse: collapse;
}

.post-table th,
.post-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.post-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.status-chip {
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
}

.published {
  background-color: #d4edda;
  color: #155724;
}

.unpublished {
  background-color: #f8d7da;
  color: #721c24;
}

.block-btn,
.edit-btn,
.delete-btn {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.block-btn {
  background-color: orange;
  color: white;
}

.edit-btn {
  background-color: blue;
  color: white;
}

.delete-btn {
  background-color: red;
  color: white;
}

.block-btn:hover {
  background-color: darkorange;
}

.edit-btn:hover {
  background-color: darkblue;
}

.delete-btn:hover {
  background-color: darkred;
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
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
  border-radius: 8px;
  width: 400px;
  text-align: center;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.cancel-btn,
.confirm-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-btn {
  background-color: #ccc;
}

.confirm-btn {
  background-color: #007bff;
  color: white;
}

.confirm-btn:hover {
  background-color: #0056b3;
}

.cancel-btn:hover {
  background-color: #999;
}
</style>
