<template>
  <div
    style="
      padding: 20px;
      display: flex;
      justify-content: space-around;
      gap: 10%;
    "
  >
    <div style="width: 100%">
      <v-btn
        style="background-color: blue; color: #fff"
        @click="openForm(false)"
      >
        Thêm sản phẩm
      </v-btn>
      <v-table>
        <thead>
          <tr>
            <th class="text-left"> # </th>
            <th class="text-left"> Name </th>
            <th class="text-left"> Image </th>
            <th class="text-left"> Price </th>
            <th class="text-left"> Quantity </th>
            <th class="text-left"> Option </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="product.id">
            <td>{{ index + 1 }}</td>
            <td>{{ product.name }}</td>
            <td><img :src="product.image" alt="" width="100" height="90" /></td>
            <td>{{ product.price }}$</td>
            <td>{{ product.quantity }}</td>
            <td>
              <v-btn
                variant="tonal"
                style="color: #fff; margin-right: 10px; background-color: blue"
                @click="getProductById(product.id)"
              >
                Chi tiết
              </v-btn>
              <v-btn
                variant="tonal"
                style="
                  color: #fff;
                  margin-right: 10px;
                  background-color: orange;
                "
                @click="openForm(true, product)"
              >
                Sửa
              </v-btn>
              <v-btn
                variant="tonal"
                style="color: #fff; margin-right: 10px; background-color: red"
                @click="deleteProductById(product.id)"
              >
                Xóa
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>

    <Form @validate="validateForm" @clearError="clearError" @close="closeForm" :action="action" :newProduct="newProduct" :errors="errors"></Form>
  </div>
</template>

<script setup>
import Form from "@/components/Form.vue";
import { onMounted, ref } from "vue";

const productToChoose = ref();
const products = ref([]);
const form = ref(false);
const newProduct = ref({ name: "", image: "", price: "", quantity: "" });
const errors = ref({ name: "", image: "", price: "", quantity: "" });
const action = ref(false);

const getAllProduct = async () => {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();
  products.value = data;
};

onMounted(() => {
  getAllProduct();
});

const validateForm = () => {
  let isValid = true;
  const check = products.value.filter(
    (product) => product.name === newProduct.value.name
  );
  console.log(check);

  if (!newProduct.value.name) {
    errors.value.name = "Tên sản phẩm là bắt buộc.";
    isValid = false;
  }
  if (check.length > 0) {
    errors.value.name = "Tên sản phẩm đã tồn tại.";
    isValid = false;
  }
  if (!newProduct.value.image) {
    errors.value.image = "Hình ảnh là bắt buộc.";
    isValid = false;
  }
  if (!newProduct.value.price || newProduct.value.price <= 0) {
    errors.value.price = "Giá phải là số dương.";
    isValid = false;
  }
  if (!newProduct.value.quantity || newProduct.value.quantity <= 0) {
    errors.value.quantity = "Số lượng phải là số dương.";
    isValid = false;
  }

  if (isValid) {
    if (action.value) {
      updateProductById(productToChoose.id);
    } else {
      addProduct();
    }
  }
};

const addProduct = async () => {
  const productToAdd = {
    ...newProduct.value,
    price: Number(newProduct.value.price),
    quantity: Number(newProduct.value.quantity),
  };

  await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productToAdd),
  });

  newProduct.value = { name: "", image: "", price: "", quantity: "" };
  form.value = false;
  getAllProduct();
};

const clearError = (field) => {
  errors.value[field] = "";
};

const getProductById = async (id) => {
  const res = await fetch(`http://localhost:3000/products/${id}`);
  const data = await res.json();
  console.log(data);
};

const deleteProductById = async (id) => {
  const check = confirm("Bạn thực sự muốn xóa sản phẩm này?");
  if (check) {
    await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    getAllProduct();
  }
};

const updateProductById = async (id) => {
  const updatedProduct = {
    ...newProduct.value,
    price: Number(newProduct.value.price),
    quantity: Number(newProduct.value.quantity),
  };

  await fetch(`http://localhost:3000/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProduct),
  });
  getAllProduct();
};

const openForm = (act, product) => {
  action.value = act;
  productToChoose.value = product;
  form.value = true;
  act
    ? (newProduct.value = {
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: product.quantity,
      })
    : (newProduct.value = {
        name: "",
        image: "",
        price: 0,
        quantity: 0,
      });
  errors.value = { name: "", image: "", price: "", quantity: "" };
};

const closeForm = () => {
  form.value = false;
};
</script>
