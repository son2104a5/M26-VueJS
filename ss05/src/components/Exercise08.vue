<template>
  <div>
    <button @click="sortAscending">Tăng dần</button>
    <button @click="sortDescending">Giảm dần</button>
    <ul>
      <li v-for="number in numbers" :key="number">{{ number }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Exercise08",
  data() {
    return {
      numbers: [5, 2, 9, 1, 6],
    };
  },
  methods: {
    sortAscending() {
      this.numbers.sort((a, b) => a - b);
    },
    sortDescending() {
      this.numbers.sort((a, b) => b - a);
    },
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
</style>