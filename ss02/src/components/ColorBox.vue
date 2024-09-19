<template>
  <div>
    <p class="box1">Box</p>
    <p class="box2">Box</p>
    <p class="box3">Box</p>
  </div>
</template>

<script></script>

<style scoped>
div {
  display: flex;
  gap: 10px;
}
p {
  color: white;
}
.box1 {
  background-color: red;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
}
.box2 {
  background-color: blue;
  text-align: center;
  line-height: 200px;
  width: 200px;
  height: 200px;
}
.box3 {
  text-align: center;
  line-height: 200px;
  background-color: green;
  width: 200px;
  height: 200px;
}
</style>
