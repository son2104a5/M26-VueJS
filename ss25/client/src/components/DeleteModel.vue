<template>
  <div
    style="
      position: fixed;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
    "
  >
    <div style="width: 30%; background-color: #fff; padding: 20px; border-radius: 4px;">
      <div style="display: flex; justify-content: space-between;">
        <h2>Xác nhận</h2>
        <p @click="setModal" style="cursor: pointer;">X</p>
      </div>
      <div
        style="display: flex; gap: 20px; align-items: center; margin: 20px;"
      >
        <v-icon icon="fa-circle-exclamation" color="red"></v-icon>
        <p v-if="actionToDelete === 'job'">
          Bạn có chắc chắn muốn xóa công việc <span style="font-weight: 600;">{{ jobToChoose }}</span> không?
        </p>
        <p v-else-if="actionToDelete === 'completed'">Bạn có chắc chắn muốn xóa những công việc đã hoàn thành không?</p>
        <p v-else>Bạn có chắc chắn muốn xóa tất cả công việc không?</p>
      </div>
      <div style="display: flex; gap: 20px; justify-content: flex-end; align-items: center;">
        <v-btn @click="setModal">Hủy</v-btn>
        <v-btn color="error" @click="confirmDeleteTask">Xóa</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["jobToChoose", "actionToDelete"]);
const emit = defineEmits(["closeModal", "confirmDelete"]);

const setModal = () => {
  emit("closeModal");
};

const confirmDeleteTask = () => {
  emit("confirmDelete");
};
</script>

<style scoped></style>
