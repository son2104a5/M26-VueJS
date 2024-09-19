<!-- Vue 2 -->

components: { Card }, components: { ColorBox },<!-- <template>
  <div>
    <h1>Session 02</h1>
    <h1>Xin chào {{ fullName }}</h1>
    <p>Giá trị count: {{ count }}</p>
    <button @click="handleClick">Click</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      key: 'value',
      fullName: 'Nguyễn Văn A',
      age: 20,
      obj: {
        id: 1,
        name: 'A'
      },
      count: 0
    }
  },
  /**
   * 
   */
  methods: {
    handleClick(){
      this.count++
    }
  }
}
</script>

<style>

</style> -->

<!-- Vue 3 -->

<script setup>
import Card from "./components/Card.vue";
import ColorBox from "./components/ColorBox.vue";
import ListCourse from "./components/ListCourse.vue";
import Calculation from "./components/Calculation.vue";
import UserInfo from "./components/UserInfo.vue";
import FormatName from "./components/FormatName.vue";
</script>

<template>
  <div>
    <h1>Bài 1:</h1>
    <ListCourse />
    <h1>Bài 2:</h1>
    <ColorBox />
    <h1>Bài 3:</h1>
    <Card />
    <h1>Bài 4:</h1>
    <Calculation />
    <h1>Bài 5:</h1>
    <UserInfo />
    <h1>Bài 6:</h1>
    <FormatName />
    <h1>Bài 7:</h1>
    <h1>Bài 8:</h1>
    <h1>Bài 9:</h1>
    <h1>Bài 10:</h1>
  </div>
</template>

<style></style>
