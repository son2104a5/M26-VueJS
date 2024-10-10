<template>
  <div class="student-management">
    <Header @openModal="openModalAdd" />

    <ListStudent
      :students="students"
      @editStudent="openModalEdit"
      @deleteStudent="openModalDelete"
    />

    <Pagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @prevPage="prevPage"
      @nextPage="nextPage"
      @goToPage="goToPage"
    />

    <StudentForm
      v-if="showFormModal"
      :errors="errors"
      :student="activeStudent"
      :isEdit="isEdit"
      @closeModal="closeModal"
      @submitForm="submitForm"
    />

    <DeleteConfirmModal
      v-if="showDeleteModal"
      :student="activeStudent"
      @closeModal="closeDeleteModal"
      @confirmDelete="deleteStudent"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import Header from "./Header.vue";
import Pagination from "./Pagination.vue";
import StudentForm from "./StudentForm.vue";
import DeleteConfirmModal from "./DeleteConfirmModal.vue";
import ListStudent from "./ListStudent.vue";

const students = ref([]);
const currentPage = ref(1);
const totalPages = ref(5);
const showFormModal = ref(false);
const showDeleteModal = ref(false);
const isEdit = ref(false);
const activeStudent = ref({
  student_name: "",
  email: "",
  address: "",
  phone: "",
});

const errors = ref({
  student_name: "",
  email: "",
  address: "",
  phone: "",
});

const openModalAdd = () => {
  resetForm();
  isEdit.value = false;
  showFormModal.value = true;
};

const openModalEdit = (student) => {
  activeStudent.value = { ...student };
  isEdit.value = true;
  showFormModal.value = true;
};

const openModalDelete = (student) => {
  activeStudent.value = { ...student };
  showDeleteModal.value = true;
};

const closeModal = () => {
  showFormModal.value = false;
  resetForm();
};

const closeDeleteModal = () => {
  showDeleteModal.value = false;
};

const resetForm = () => {
  activeStudent.value = {
    student_name: "",
    email: "",
    address: "",
    phone: "",
  };
  errors.value = {
    student_name: "",
    email: "",
    address: "",
    phone: "",
  };
};

const submitForm = () => {
  if (validateForm()) {
    if (isEdit.value) {
      axios
        .put(
          `http://localhost:3000/students/${activeStudent.value.id}`,
          activeStudent.value
        )
        .then(() => {
          getAllStudent();
          closeModal();
        });
    } else {
      axios
        .post("http://localhost:3000/students", activeStudent.value)
        .then(() => {
          getAllStudent();
          closeModal();
        });
    }
  }
};

const deleteStudent = () => {
  axios
    .delete(`http://localhost:3000/students/${activeStudent.value.id}`)
    .then(() => {
      getAllStudent();
      closeDeleteModal();
    });
};

const getAllStudent = () => {
  axios.get("http://localhost:3000/students").then((response) => {
    students.value = response.data;
  });
};

const validateForm = () => {
  let isValid = true;
  errors.value = {
    student_name: "",
    email: "",
    address: "",
    phone: "",
  };

  if (!newStudent.value.student_name) {
    errors.value.student_name = "Tên sinh viên là bắt buộc";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!newStudent.value.email) {
    errors.value.email = "Email là bắt buộc";
    isValid = false;
  } else if (!emailRegex.test(newStudent.value.email)) {
    errors.value.email = "Email không hợp lệ";
    isValid = false;
  }

  if (!newStudent.value.address) {
    errors.value.address = "Địa chỉ là bắt buộc";
    isValid = false;
  }

  const phoneRegex = /^[0-9]+$/;
  if (!newStudent.value.phone) {
    errors.value.phone = "Số điện thoại là bắt buộc";
    isValid = false;
  } else if (!phoneRegex.test(newStudent.value.phone)) {
    errors.value.phone = "Số điện thoại không hợp lệ";
    isValid = false;
  }

  return isValid;
};


onMounted(() => {
  getAllStudent();
});
</script>
