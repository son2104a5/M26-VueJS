<template>
  <div>
    <button
      v-for="(button, index) in buttons"
      :key="index"
      :class="{ active: activeIndex === index + 1 }"
      @click="activeIndex = index + 1"
    >
      {{ button }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Exercise07",
  data() {
    return {
      buttons: ["Button 1", "Button 2", "Button 3"],
      activeIndex: 1,
    };
  },
};
</script>

<style scoped>
button {
  margin: 5px;
  padding: 10px;
  border: none;
  cursor: pointer;
}
button.active {
  background-color: red;
  color: #fff;
}
</style>
