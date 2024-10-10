<template>
  
</template>

<script setup>
import axios from 'axios';
import { onMounted } from 'vue';

const getStudentById = () => {
    axios.get('http://localhost:3000/students/1')
    .then(response => {
        console.log(response.data);
     })
     .catch(error => {
        console.log("Không tìm thấy bản ghi");
        console.log(error);
     });
}
onMounted(()=>{
    getStudentById();
})
</script>

<style>

</style>