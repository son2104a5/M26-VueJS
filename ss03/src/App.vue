<template>
  <div>
    <!-- <p>Binding property</p>
    <ul style="list-style: decimal;">
      <li>v-bind</li>
      <li>v-if, v-else, v-else-if</li>
      <li>v-show</li>
      <li>v-for</li>
      <li>v-model</li>
    </ul>
    <p>event</p>
    <img v-bind:src="urlImg" alt="" width="300">
    <div v-bind:style="{fontSize: size}">Text example</div>
    <p>************************************</p>
    <p>v-if, v-else, v-else-if</p>
    <p v-if="isVIf">Hiển thị nếu điều kiện v-if đúng</p>
    <ul>
      <li v-if="age>30">Tuổi trung niên</li>
      <li v-else-if="age>18">Tuổi thanh niên</li>
      <li v-else-if="age>6">Tuổi trưởng thành</li>
      <li v-else>Thiếu nhi</li>
    </ul>
    <p>************************************</p>
    <p>v-show</p>
    <p v-show="isVShow">Hiển thị nếu điều kiện v-show thỏa mãn</p>
    <p>************************************</p>
    <p>v-for: hiển thị dữ liệu về mảng</p>
    <ul>
      <li v-for="(student, index) in students" :key="index">{{ student.name }}</li>
    </ul>
    <p>************************************</p>
    <p>v-model</p>
    <div>
      <input type="text" v-model="inputText">
      <p>Giá trị bạn nhập: {{ inputText }}</p>
    </div>
    <div>
      <input type="text" @input="handleChange" v-bind:value="inputText">
      <p>Giá trị bạn nhập: {{ inputText }}</p>
    </div>
    <p>***********************************</p>
    <p>event</p>
    <button @click="()=>{handleClick('hello')}">Click</button> -->

    <!-- Bài tập -->
    <h2>Bài 1:</h2>
    <Exercise01 />
    <h2>Bài 2:</h2>
    <Exercise02 />
    <h2>Bài 3:</h2>
    <Exercise03 />
    <h2>Bài 4:</h2>
    <Exercise04 />
    <h2>Bài 5:</h2>
    <Exercise05 />
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
import Exercise01 from "./components/Exercise01.vue";
import Exercise02 from "./components/Exercise02.vue";
import Exercise03 from "./components/Exercise03.vue";
import Exercise04 from "./components/Exercise04.vue";
import Exercise05 from "./components/Exercise05.vue";
import Exercise06 from "./components/Exercise06.vue";
import Exercise07 from "./components/Exercise07.vue";
import Exercise08 from "./components/Exercise08.vue";
import Exercise09 from "./components/Exercise09.vue";
import Exercise10 from "./components/Exercise10.vue";
// import { ref } from "vue";
// const urlImg =
//   "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp";
// const size = "24px";
// const isVIf = true;
// const age = 20;
// const isVShow = true;
// const students = [
//   {
//     id: 1,
//     name: "A",
//   },
//   {
//     id: 2,
//     name: "B",
//   },
//   {
//     id: 3,
//     name: "C",
//   },
// ];
// const inputText = ref("");
// //  khai báo hàn onChange
// const handleChange = (event) => {
//   console.log(event.target.value);
//   inputText.value = event.target.value;
// };
// const handleClick = (text) => {
//   console.log("Giá trị trả về", text);
// };
/*
  Phân biệt v-if và v-show:
  - đối với v-if nếu đk đúng thì render ra DOM còn sai thì không render ra DOM
  - đối với v-show thì đk đúng hay sai đều render ra DOM, chỉ khác nếu đk sai: display: none
  - ngoài ra đối với v-if thì có thể dùng thêm v-else và v-else-if
*/
</script>

<style></style>
