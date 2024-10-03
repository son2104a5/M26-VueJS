<template>
  <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Quản trị viên
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</template>

<script setup>
const items = ["Thông tin cá nhân", "Đổi mật khẩu", "Đăng xuất"]
</script>

<style>

</style>