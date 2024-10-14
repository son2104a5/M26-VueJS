<template>
  <div>
    <div class="w-4/5 mx-auto mt-6 min-h-screen">
      <header class="flex justify-between items-center mb-6">
        <h3 class="text-xl font-bold">Nhân viên</h3>
        <button class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Thêm mới nhân viên
        </button>
      </header>

      <div class="flex justify-end items-center gap-3 mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm theo email"
          class="border border-gray-300 rounded-md px-4 py-2 w-[350px]"
        />
        <i class="fa-solid fa-arrows-rotate"></i>
      </div>

      <table class="table-auto w-full border border-gray-300 rounded-md">
        <thead class="bg-gray-100">
          <tr>
            <th class="border border-gray-300 px-4 py-2">STT</th>
            <th class="border border-gray-300 px-4 py-2">Họ và tên</th>
            <th class="border border-gray-300 px-4 py-2">Ngày sinh</th>
            <th class="border border-gray-300 px-4 py-2">Email</th>
            <th class="border border-gray-300 px-4 py-2">Địa chỉ</th>
            <th class="border border-gray-300 px-4 py-2">Trạng thái</th>
            <th class="border border-gray-300 px-4 py-2" colspan="3">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-gray-50">
            <td class="border border-gray-300 px-4 py-2 text-center">1</td>
            <td class="border border-gray-300 px-4 py-2">Nguyễn Văn A</td>
            <td class="border border-gray-300 px-4 py-2">28/02/1990</td>
            <td class="border border-gray-300 px-4 py-2">nvana@gmail.com</td>
            <td class="border border-gray-300 px-4 py-2">Ba Đình, Hà Nội</td>
            <td class="border border-gray-300 px-4 py-2">
              <div class="flex items-center gap-2">
                <span class="inline-block w-3 h-3 rounded-full bg-green-500"></span>
                <span>Đang hoạt động</span>
              </div>
            </td>
            <td class="border border-gray-300 px-4 py-2 text-center">
              <button class="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">
                Chặn
              </button>
            </td>
            <td class="border border-gray-300 px-4 py-2 text-center">
              <button class="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600">
                Sửa
              </button>
            </td>
            <td class="border border-gray-300 px-4 py-2 text-center">
              <button class="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <footer class="flex justify-between items-center mt-6">
        <select class="border border-gray-300 rounded-md px-3 py-2">
          <option>Hiển thị 10 bản ghi trên trang</option>
          <option>Hiển thị 20 bản ghi trên trang</option>
          <option>Hiển thị 50 bản ghi trên trang</option>
          <option>Hiển thị 100 bản ghi trên trang</option>
        </select>
        <ul class="flex items-center space-x-2">
          <li>
            <a href="#" class="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
              Previous
            </a>
          </li>
          <li>
            <a href="#" class="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
              1
            </a>
          </li>
          <li>
            <a href="#" class="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
              2
            </a>
          </li>
          <li>
            <a href="#" class="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
              3
            </a>
          </li>
          <li>
            <a href="#" class="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
              Next
            </a>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref(false);
const modalBlock = ref(false);
const modalDelete = ref(false);
</script>

<style scoped>

</style>
