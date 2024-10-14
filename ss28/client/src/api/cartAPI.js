import axios from "axios";

export const getCart = async () => {
  const res = await axios.get("http://localhost:3000/cart");
  return res.data;
};

export const apiAddToCart = async (product) => {
  try {
    const res = await axios.post("http://localhost:3000/cart", product);
    return res.data;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};

export const updateCartAPI = async (productId, quantity) => {
  try {
    const res = await axios.put(`http://localhost:3000/cart/${productId}`, {
      quantity,
    });
    return res.data;
  } catch (error) {
    console.error("Error updating cart item:", error);
    throw error;
  }
};

export const removeCartAPI = async (productId) => {
  try {
    const res = await axios.delete(`http://localhost:3000/cart/${productId}`);
    return res.data;
  } catch (error) {
    console.error("Error removing item from cart:", error);
    throw error;
  }
};
