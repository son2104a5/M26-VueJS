<template>
  <div>
    <h1>Quản lý công việc</h1>
    <input v-model="newTask" placeholder="Enter your job" />
    <button @click="addTask">Add Job</button>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.completed" @change="saveTasks" />
        <span :class="{ completed: task.completed }">{{ task.name }}</span>
        <button @click="confirmDelete(index)">Delete</button>
      </li>
    </ul>
    <p>Công việc đã hoàn thành: {{ completedTasks }} / {{ tasks.length }} công việc</p>
    <div v-if="showModal" class="modal">
      <p>Bạn có chắc chắn muốn xóa công việc này?</p>
      <button @click="deleteTask(taskToDelete)">Xóa</button>
      <button @click="showModal = false">Hủy</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const newTask = ref("");
const tasks = ref(JSON.parse(localStorage.getItem("tasks")) || []);
const showModal = ref(false);
const taskToDelete = ref(null);

const completedTasks = computed(() => {
  return tasks.value.filter((task) => task.completed).length;
});

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push({ name: newTask.value, completed: false });
    newTask.value = "";
    saveTasks();
  }
};

const confirmDelete = (index) => {
  taskToDelete.value = index;
  showModal.value = true;
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
  saveTasks();
  showModal.value = false;
};

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks.value));
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
