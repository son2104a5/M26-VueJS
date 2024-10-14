<template>
  <div class="shopping-cart">
    <h2>Shopping cart</h2>
    <div class="cart-item" v-for="(item, index) in cartItems" :key="index">
      <img :src="item.image" alt="" width="100" height="100" />
      <div>
        <h3>{{ item.name }}</h3>
        <input
          type="number"
          v-model.number="item.quantity"
          min="1"
          class="quantity-input"
        />
        <p>Quantity: {{ item.quantity }}</p>
      </div>
      <div class="cart-item-actions">
        <p>$ {{ item.price * item.quantity }}</p>
        <button class="update-cart" @click="updateCart(item)">Update</button>
        <button class="remove-item" @click="openModal(item.id)">Remove</button>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <p class="subtotal">Subtotal </p>
      <h2>$ {{ subtotal }}</h2>
    </div>

    <Modal
      v-if="showModal"
      title="Confirm Removal"
      message="Are you sure you want to remove this item?"
      @confirm="removeFromCart(selectedItem)"
      @cancel="showModal = false"
    />

    <DeleteModal
      v-if="modalVisible"
      :isVisible="modalVisible"
      :onConfirm="confirmDelete"
      :onCancel="closeModal"
    />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import DeleteModal from "./DeleteModal.vue";

const store = useStore();

const cartItems = computed(() => store.state.cart.cart);

const subtotal = computed(() =>
  cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
);

onMounted(() => {
  store.dispatch("getCartAPI");
});

const showModal = ref(false);

const updateCart = (item) => {
  const availableStock = getProductStock(item.id);
  if (item.quantity <= availableStock) {
    store.dispatch("updateCartItemQuantity", { productId: item.id, quantity: item.quantity });
    alert(`${item.name} quantity updated to ${item.quantity}`);
  } else {
    alert(`Quantity exceeds available stock of ${availableStock}`);
  }
};

const modalVisible = ref(false);
let selectedItem = null;

const openModal = (item) => {
  selectedItem = item;
  modalVisible.value = true;
};

const closeModal = () => {
  modalVisible.value = false;
  selectedItem = null;
};

const confirmDelete = () => {
  store.dispatch("removeFromCart", selectedItem.id);
  modalVisible.value = false;
  selectedItem = null;
  alert("Delete product successfully");
};
</script>

<style scoped>
.shopping-cart {
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.cart-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  align-items: center;
  gap: 40px;
}
.cart-item-actions {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}
.quantity-input {
  width: 50px;
  padding: 5px;
  margin-right: 10px;
}
.update-cart,
.remove-item {
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
}
.update-cart {
  border: 1px solid;
  border-radius: 5px;
}
.remove-item {
    border: none;
    background-color: #fff;
    color: blue;
}
.subtotal {
  font-weight: bold;
  text-align: left;
  font-size: 24px;
}
</style>
