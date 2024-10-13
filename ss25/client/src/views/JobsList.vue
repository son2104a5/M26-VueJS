<template>
  <div style="width: 100%">
    <div v-for="job in jobFilter" :key="job.id" class="listJobs">
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <div style="display: flex; gap: 10px; align-items: center;">
          <v-checkbox-btn
            @click="changeStatus(job.id, job.status)"
            v-model="job.status"
          ></v-checkbox-btn>
          <span :class="job.status ? 'line' : ''">{{ job.job_name }}</span>
        </div>
        <div style="display: flex; gap: 10px">
          <v-icon
            icon="fa-solid fa-pen"
            color="orange"
            @click="openEditModal(job)"
          ></v-icon>
          <v-icon
            icon="fa-solid fa-trash"
            color="red"
            @click="openDeleteModal(job.job_name, 'job')"
          ></v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, watch } from "vue";

const props = defineProps(["jobs", "action"]);
const emit = defineEmits(["getAllJobs", "modalDelete", "editJob"]);

const jobFilter = ref([]);

const changeStatus = (id, status) => {
  axios.patch(`http://localhost:8080/jobs/${id}`, {
    status: !status,
  });
  emit("getAllJobs");
};

const openDeleteModal = (name, job) => {
  emit("modalDelete", name, job);
};

const openEditModal = (job) => {
  emit("editJob", job);
};

const filterJobs = () => {
  if (props.action === "all") {
    jobFilter.value = props.jobs;
  } else if (props.action === "completed") {
    jobFilter.value = props.jobs.filter((job) => job.status);
  } else {
    jobFilter.value = props.jobs.filter((job) => !job.status);
  }
};

watch(
  () => [props.jobs, props.action],
  filterJobs,
  { immediate: true }
);
</script>

<style scoped>
.listJobs {
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  width: 100%;
  margin-bottom: 20px;
}
.line {
  text-decoration: line-through;
}
</style>
