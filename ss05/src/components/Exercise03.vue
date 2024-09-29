<template>
  <div>
    <p>Quyền hạn của bạn là: <strong v-if="userRole === 'admin'">Admin</strong><strong v-else-if="userRole === 'user'">User</strong><strong v-else-if="userRole === 'guest'">Guest</strong></p>
  </div>
</template>

<script setup>
const userRole = "admin";
</script>

<style>

</style>