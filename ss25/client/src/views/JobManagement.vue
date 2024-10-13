<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    "
  >
    <div class="formJob">
      <h2>Quản lí công việc</h2>
      <div class="formInput">
        <v-text-field
          v-model="jobName"
          label="Nhập tên công việc"
          variant="outlined"
          style="width: 100%"
          :error="!!error"
          :error-messages="[error]"
        ></v-text-field>
        <v-btn variant="tonal" width="100%" base-color="blue" @click="addJob">
          Thêm công việc
        </v-btn>
      </div>
      <div class="formOption">
        <v-btn
          variant="elevated"
          :base-color="active == 'all' ? 'blue' : ''"
          @click="setAction('all')"
        >
          Tất cả
        </v-btn>
        <v-btn
          variant="elevated"
          :base-color="active == 'completed' ? 'blue' : ''"
          @click="setAction('completed')"
        >
          Hoàn thành
        </v-btn>
        <v-btn
          variant="elevated"
          :base-color="active == 'incompleted' ? 'blue' : ''"
          @click="setAction('incompleted')"
        >
          Đang thực hiện
        </v-btn>
      </div>

      <JobsList
        :jobs="jobs"
        @getAllJob="getAllJob"
        :action="active"
        @modalDelete="setModalDelete"
        @editJob="openEditModal"
      />

      <div
        style="
          width: 100%;
          display: flex;
          gap: 35px;
          padding-left: 20px;
          padding-right: 20px;
        "
      >
        <v-btn
          variant="tonal"
          color="red"
          @click="setModalDelete('', 'completed')"
        >
          Xóa công việc hoàn thành
        </v-btn>
        <v-btn variant="tonal" color="red" @click="setModalDelete('', 'all')">
          Xóa tất cả công việc
        </v-btn>
      </div>
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
      "
    >
      <v-progress-circular
        :size="100"
        :width="5"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>

    <DeleteModel
      v-if="modalDelete"
      @getAllJob="getAllJob"
      @closeModal="closeModal"
      :jobToChoose="jobToChoose"
      :actionToDelete="actionToDelete"
      @confirmDelete="confirmDeleteTask"
    />

    <v-dialog v-model="isEditModalOpen" max-width="500px">
      <v-card>
        <v-card-title>Sửa công việc</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="updatedJobName"
            label="Tên công việc"
            :error="!!editError"
            :error-messages="[editError]"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="red" @click="closeEditModal">Hủy</v-btn>
          <v-btn color="blue" @click="updateJob">Cập nhật</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import JobsList from "./JobsList.vue";
import DeleteModel from "@/components/DeleteModel.vue";

const active = ref("all");
const jobs = ref([]);
const jobName = ref("");
const error = ref("");
const loading = ref(false);
const modalDelete = ref(false);
const jobToChoose = ref("");
const actionToDelete = ref("");
const isEditModalOpen = ref(false);
const updatedJobName = ref("");
const editError = ref("");
const jobToEdit = ref(null);

const setModalDelete = (name, action) => {
  modalDelete.value = true;
  jobToChoose.value = name;
  actionToDelete.value = action;
};

const closeModal = () => {
  modalDelete.value = false;
};

const setAction = (action) => {
  active.value = action;
};

const getAllJob = () => {
  loading.value = true;
  axios
    .get("http://localhost:8080/jobs")
    .then((response) => {
      jobs.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      loading.value = false;
    });
};

const confirmDeleteTask = () => {
  if (actionToDelete.value === "job") {
    const jobToDelete = jobs.value.find(
      (job) => job.job_name === jobToChoose.value
    );

    if (jobToDelete && jobToDelete.id) {
      axios
        .delete(`http://localhost:8080/jobs/${jobToDelete.id}`)
        .then(() => {
          getAllJob();
          closeModal();
        })
        .catch((error) => {
          console.error("Error deleting job:", error);
        });
    }
  } else if (actionToDelete.value === "completed") {
    axios
      .delete(`http://localhost:8080/jobs?status=true`)
      .then(() => {
        getAllJob();
        closeModal();
      })
      .catch((error) => {
        console.error("Error deleting completed jobs:", error);
      });
  } else {
    axios
      .delete("http://localhost:8080/jobs")
      .then(() => {
        getAllJob();
        closeModal();
      })
      .catch((error) => {
        console.error("Error deleting all jobs:", error);
      });
  }
};

const addJob = () => {
  if (!jobName.value.trim()) {
    error.value = "Tên công việc không được để trống";
    return;
  }
  axios
    .post("http://localhost:8080/jobs", { job_name: jobName.value })
    .then(() => {
      getAllJob();
      jobName.value = "";
      error.value = "";
    })
    .catch((error) => {
      console.error("Lỗi khi thêm công việc:", error);
    });
};

const openEditModal = (job) => {
  jobToEdit.value = job;
  updatedJobName.value = job.job_name;
  console.log(job);
  isEditModalOpen.value = true;
};

const closeEditModal = () => {
  isEditModalOpen.value = false;
  editError.value = "";
};

const updateJob = () => {
  if (!updatedJobName.value.trim()) {
    editError.value = "Tên công việc không được để trống";
    return;
  }

  const jobExists = jobs.value.some(
    (job) => job.name === updatedJobName.value && job.id !== jobToEdit.value.id
  );
  if (jobExists) {
    editError.value = "Tên công việc đã tồn tại";
    return;
  }

  axios
    .put(`http://localhost:8080/jobs/${jobToEdit.value.id}`, {
      job_name: updatedJobName.value,
    })
    .then(() => {
      getAllJob();
      closeEditModal();
    })
    .catch((error) => {
      console.error("Lỗi khi cập nhật công việc:", error);
    });
};

onMounted(() => {
  getAllJob();
});
</script>

<style scoped>
.formJob {
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  width: 40%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
.formInput {
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  width: 100%;
}
.formOption {
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
}
</style>
