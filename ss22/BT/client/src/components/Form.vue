<template>
  <div style="width: 30%" v-if="form">
      <h2 style="text-align: center">{{
        action ? "Sửa thông tin sản phẩm" : "Thêm sản phẩm"
      }}</h2>
      <p>Tên sản phẩm</p>
      <input
        v-model="newProduct.name"
        @input="clearError('name')"
        style="
          border: 1px solid;
          border-radius: 4px;
          padding: 5px;
          margin: 5px;
          width: 100%;
        "
        type="text"
        placeholder="Enter product name"
      />
      <p v-if="errors.name" style="color: red">{{ errors.name }}</p>

      <p>Hình ảnh (url)</p>
      <input
        v-model="newProduct.image"
        @input="clearError('image')"
        style="
          border: 1px solid;
          border-radius: 4px;
          padding: 5px;
          margin: 5px;
          width: 100%;
        "
        type="text"
        placeholder="Enter image URL"
      />
      <p v-if="errors.image" style="color: red">{{ errors.image }}</p>

      <p>Giá</p>
      <input
        v-model="newProduct.price"
        @input="clearError('price')"
        style="
          border: 1px solid;
          border-radius: 4px;
          padding: 5px;
          margin: 5px;
          width: 100%;
        "
        type="number"
        placeholder="Enter price"
      />
      <p v-if="errors.price" style="color: red">{{ errors.price }}</p>

      <p>Số lượng</p>
      <input
        v-model="newProduct.quantity"
        @input="clearError('quantity')"
        style="
          border: 1px solid;
          border-radius: 4px;
          padding: 5px;
          margin: 5px;
          width: 100%;
        "
        type="number"
        placeholder="Enter quantity"
      />
      <p v-if="errors.quantity" style="color: red">{{ errors.quantity }}</p>

      <div
        style="
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-top: 10px;
        "
      >
        <v-btn
          style="background-color: slategray; color: #fff"
          @click="closeForm"
        >
          Đóng
        </v-btn>
        <v-btn
          style="background-color: blue; color: #fff"
          @click="validateForm"
        >
          {{ action ? "Sửa" : "Thêm" }}
        </v-btn>
      </div>
    </div>
</template>

<script setup>

</script>

<style>

</style>