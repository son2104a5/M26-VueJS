import { getAllProducts } from "@/api/productsAPI";
import { apiAddToCart } from "@/api/cartAPI";

const products = {
  state: {
    products: [],
  },
  mutations: {
    setProducts: (state, payload) => {
      state.products = payload;
    },
    updateProductStock(state, { productId, quantity }) {
      const product = state.products.find(p => p.id === productId);
      product.quantity -= quantity;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const products = await getAllProducts();
        commit("setProducts", products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
  }
};

export default products;
