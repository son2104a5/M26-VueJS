<template>
  <div style="display: flex; flex-direction: column; align-items: center;">
    <h2>Firebase</h2>
    <img :src="downloadURL" width="300" height="300">
    <input type="file" @input="handleInputChange" />
    <button @click="uploadFile">Upload</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  ref as storageRef,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import storage from "./firebase/config";

const file = ref(null);
const downloadURL = ref(null);

const handleInputChange = (e) => {
  file.value = e.target.files[0];
};

const uploadFile = async () => {
  if (!file.value) {
    console.error("No file selected.");
    return;
  }
  try {
    const storageReference = storageRef(storage, `uploads/${file.value.name}`)
    await uploadBytes(storageReference, file.value)
    downloadURL.value = await getDownloadURL(storageReference);
  } catch (error) {
    console.error("Error uploading file: ", error);
  }
};
</script>

<style></style>
