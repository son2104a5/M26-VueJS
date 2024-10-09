<template>
    <div>
      <ul v-for="product in products" :key="product.id">
        <li>{{ product.name }}</li>
        <li><img :src="product.image" alt="" width="100"></li>
        <li>{{ product.price }}$</li>
        <li>{{ product.quantity }}</li>
        <v-btn @click="getProductById(product.id)">Get detail</v-btn>
        <v-btn @click="updateProductById(product.id)">Update</v-btn>
        <v-btn @click="deleteProductById(product.id)">Delete</v-btn>
      </ul>
      <v-btn @click="addProduct">Add Product</v-btn>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  
  const products = ref([])
  
  const getAllProduct = async() => {
    const res = await fetch('http://localhost:3000/products')
    const data = await res.json()
    products.value = data
  }
  
  onMounted(()=>{
    getAllProduct()
  })
  
  const getProductById = async(id) => {
    const res = await fetch(`http://localhost:3000/products/${id}`)
    const data = await res.json()
    console.log(data)
  }
  
  const deleteProductById = async(id) => {
    await fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE',
    })
    getAllProduct()
  }
  
  const addProduct = async() => {
    const newProduct = {
      name: 'Product New',
      image: '',
      price: 100,
      quantity: 1,
    }
    
    await fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
    getAllProduct()
  }
  
  const updateProductById = async(id) => {
    const updatedProduct = {
      name: 'Product Updated',
      image: '',
      price: 200,
      quantity: 2,
    }
  
    await fetch(`http://localhost:3000/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
    getAllProduct()
  }
  </script>
  
  <style>
  
  </style>