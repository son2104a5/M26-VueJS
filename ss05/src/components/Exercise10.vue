<template>
  <div>
    <button @click="addRandomNumber">Random number</button>
    <ul>
      <li v-for="number in numbers" :key="number">{{ number }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Exercise10",
  data() {
    return {
      numbers: [],
    };
  },
  methods: {
    addRandomNumber() {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      this.numbers.push(randomNumber);
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
