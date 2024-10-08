<template>
  <div>
    <nav>
      <router-link to="/" exact-active-class="active">Home</router-link>
      <router-link to="/about" active-class="active">About</router-link>
      <router-link to="/contact" active-class="active">Contact</router-link>
    </nav>

    <router-view v-slot="{ Component }">
      <Suspense>
        <!-- Thành phần các component sử dụng cơ chế lazy loading -->
        <template #default>
          <div>
            <!-- Wrapping in a div ensures a single root node -->
            <component :is="Component" />
          </div>
        </template>
        <!-- Hiệu ứng loading trước khi tải trang -->
        <template #fallback>
          <div>Loading ....</div>
        </template>
      </Suspense>
    </router-view>
  </div>
</template>

<script setup></script>
<style scoped>
.active {
  background-color: red;
  padding: 5px;
}
nav {
  position: sticky;
  top: 0;
}
</style>
