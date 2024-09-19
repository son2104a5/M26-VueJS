<template>
    <div>
        <h2>Thông tin cá nhân:</h2>
        <ul>
            <li>Họ và tên: <span class="text">{{ user.fullName }}</span></li>
            <li>Giới tính: <span class="text">{{ user.gender }}</span></li>
            <li>Ngày sinh: <span class="text">{{ user.dateOfBirth }}</span></li>
            <li>Email: <span class="text">{{ user.email }}</span></li>
            <li>Dịa chỉ: <span class="text">{{ user.address }}</span></li>
        </ul>
    </div>
  
</template>

<script setup>
const user = {
    fullName: 'Nguyễn Đắc Sơn',
    gender: 'Nam',
    dateOfBirth: '21/08/2004',
    email: 'sonnguyen@gmail.com',
    address: 'Hà Nội'
}
</script>

<style scoped>
.text{
    font-weight: bold;
}
</style>