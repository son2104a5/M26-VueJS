<template>
  <div>
    <strong>Họ và tên: {{ formatName(user) }}</strong>
  </div>
</template>

<script setup>
  const user = {
    firstName: 'Nguyễn Đắc',
    lastName: 'Sơn'
  };
  const formatName = (user) => {
    return user.firstName + ' ' + user.lastName
  }

</script>

<style scoped>

</style>