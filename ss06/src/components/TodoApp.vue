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
    <p
      >Công việc đã hoàn thành: {{ completedTasks }}/{{ tasks.length }} công
      việc</p
    >
    <div v-if="showModal" class="modal">
      <p>Bạn có chắc chắn muốn xóa công việc này?</p>
      <button @click="deleteTask(taskToDelete)">Xóa</button>
      <button @click="showModal = false">Hủy</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      tasks: JSON.parse(localStorage.getItem("tasks")) || [],
      showModal: false,
      taskToDelete: null,
    };
  },
  computed: {
    completedTasks() {
      return this.tasks.filter((task) => task.completed).length;
    },
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push({ name: this.newTask, completed: false });
        this.newTask = "";
        this.saveTasks();
      }
    },
    confirmDelete(index) {
      this.taskToDelete = index;
      this.showModal = true;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.saveTasks();
      this.showModal = false;
    },
    saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
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
