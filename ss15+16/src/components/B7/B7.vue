<template>
  <div>
    <div class="p-4 flex gap-3 items-center">
        <RouterLink to="/b7">Home</RouterLink>
        <RouterLink to="/b7/product">Product</RouterLink>
        <RouterLink to="/b7/detail">Detail</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.router-link-exact-active {
    border-radius: 5px;
    padding: 10px;
    background-color: rgb(26, 114, 214);
    color: white;
}
</style>