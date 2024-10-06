<template>
  <div>
    <div class="p-4 flex gap-3 items-center">
      <RouterLink to="/b8">Dashboard</RouterLink>
      <RouterLink to="/b8/product">Product</RouterLink>
      <RouterLink to="/b8/account">Account</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.router-link-exact-active {
  background-color: blue;
  color: #fff;
  font-weight: 700;
}
</style>
