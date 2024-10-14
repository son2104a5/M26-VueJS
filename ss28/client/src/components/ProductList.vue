<template>
  <div class="product-list">
    <h2>List Product</h2>
    <div class="product-item" v-for="(product, index) in products" :key="index">
      <img :src="product.image" class="product-image" />
      <div class="product-details">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>Total: {{ product.quantity }}</p>
      </div>
      <div class="product-actions">
        <input
          type="number"
          min="1"
          class="quantity-input"
          v-model.number="inputValues[index]"
          :max="product.quantity"
        />
        <p>Price: $ {{ product.price }}</p>
        <button class="add-to-cart" :disabled="product.quantity === 0" @click="addToCart(product, inputValues[index])"
          >Add to cart</button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const products = computed(() => store.state.products.products);
const inputValues = ref([1, 1, 1]);

onMounted(() => {
  store.dispatch("fetchProducts");
});

const addToCart = (product, quantity) => {
  store.dispatch("addToCart", { 
    productId: product.id,
    name: product.name,
    price: product.price,
    quantity: quantity,
    image: product.image
  });
};
</script>

<style scoped>
.product-list {
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.product-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  gap: 20px;
}
.product-image {
  width: 50px;
  height: 50px;
  margin-right: 15px;
}
.product-details {
  flex: 1;
}
.quantity-input {
  width: 50px;
  padding: 5px;
  margin-right: 10px;
}
.add-to-cart {
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.add-to-cart:disabled {
  padding: 5px 10px;
  background-color: #797979;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: no-drop;
}
</style>
