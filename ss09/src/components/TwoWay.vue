<template>
  <div>
    <input type="text" v-model="inputValue">
    <p>Giá trị value: {{ inputValue }}</p>
    <button @click="handleClick">Click</button>

    
    <ul>
        <li>
            <input type="checkbox" v-model="hobbies" value="đá bóng">
            Đá bóng
        </li>
        <li>
            <input type="checkbox" v-model="hobbies" value="cầu lông">
            Cầu lông
        </li>
        <li>
            <input type="checkbox" v-model="hobbies" value="bóng rổ">
            Bóng rổ
        </li>
    </ul>
    <p>Giá trị các sở thích được chọn: {{ hobbies }}</p>

    <p>type = radio</p>
    <input type="radio" v-model="gender" value="Nam">
    Nam
    <input type="radio" v-model="gender" value="Nữ">
    Nữ
    <p>Giá trị giới tính: {{ gender }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref("")
const handleClick = () => {
    inputValue.value = "K23_PTIT"
}
const hobbies = ref([])

const gender = ref("Nam")
</script>

<style>

</style>