<!-- <template>
  <div>
    <h1>Lifecycle</h1>
    
      React:
      1. Khởi tạo create: khởi tạo state, props
      2. Mount: gắn kết đưa vào DOM
      3. Update: quá trình cập nhật thay đổi state (re-render)
      4. Unmount: loại bỏ khỏi DOM
      VueJS cũng tương tự gồm 4 giai đoạn
      khởi tạo - gắn kết - cập nhật - loại bỏ
   
      <Lifecycle v-if="isShow"/>
      <button @click="unmountComponent">Click</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Lifecycle from './components/Lifecycle.vue';

const isShow = ref(true)
const unmountComponent = () => {
  isShow.value = !isShow.value;
}
</script>

<style>

</style> -->

<template>
  <div>
    <h2>Bài 1:</h2>
    <Exercise01 />
    <h2>Bài 2:</h2>
    <Exercise02 />
    <h2>Bài 3:</h2>
    <Exercise03 />
    <h2>Bài 4:</h2>
    <Exercise04Parent />
    <h2>Bài 5:</h2>
    <Exercise05Parent />
    <h2>Bài 6:</h2>
    <Exercise06 />
    <h2>Bài 7:</h2>
    <Exercise07 />
    <h2>Bài 8:</h2>
    <Exercise08 />
    <h2>Bài 9:</h2>
    <Exercise09 />
    <h2>Bài 10:</h2>
    <Exercise10 />
  </div>
</template>

<script setup>
import Exercise01 from './components/BT/Exercise01.vue';
import Exercise02 from './components/BT/Exercise02.vue';
import Exercise03 from './components/BT/Exercise03.vue';
import Exercise04Parent from './components/BT/B4/Exercise04Parent.vue';
import Exercise05Parent from './components/BT/B5/Exercise05Parent.vue';
import Exercise06 from './components/BT/Exercise06.vue';
import Exercise07 from './components/BT/Exercise07.vue';
import Exercise08 from './components/BT/Exercise08.vue';
import Exercise09 from './components/BT/Exercise09.vue';
import Exercise10 from './components/BT/Exercise10.vue';


</script>

<style>

</style>