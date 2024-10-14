import { apiAddToCart, getCart, removeCartAPI, updateCartAPI } from "@/api/cartAPI";

const cart = {
  state: {
    cart: [],
  },
  mutations: {
    setCart: (state, payload) => {
      state.cart = payload;
    },
    addCartItem(state, item) {
      console.log(item);
      
      const existingItem = state.cart.find(i => i.productId === item.productId);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cart.push(item);
      }
    },
    updateCartItem(state, { productId, quantity }) {
      const item = state.cart.find(i => i.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
    removeCartItem(state, productId) {
      state.cart = state.cart.filter(i => i.id !== productId);
    },
  },
  actions: {
    async getCartAPI({ commit }) {
      try {
        const cart = await getCart();
        commit("setCart", cart);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    },
    async addToCart({ commit }, payload) {
      try {
        await apiAddToCart(payload);
        commit("addCartItem", payload);
        alert(`${payload.quantity} ${payload.name} added to the cart`);
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    },
    async updateCartItemQuantity({ commit }, { productId, quantity }) {
      const product = state.cart.find((p) => p.id === productId);
      if (product && quantity <= product.stock) {
        try {
          await updateCartAPI(productId, quantity);
          commit("updateCartItem", { productId, quantity });
          commit("updateProductStock", { productId, quantity });
        } catch (error) {
          console.error("Error updating cart item:", error);
        }
      } else {
        console.error("Quantity exceeds stock");
      }
    },
    async removeFromCart({ commit }, productId) {
      try {
        await removeCartAPI(productId);
        commit("removeCartItem", productId);
      } catch (error) {
        console.error("Error removing item:", error);
      }
    },
  },
};

export default cart;
