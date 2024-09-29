<template>
    <div>
      <h3>Danh sách các số thỏa mãn điều kiện:</h3>
      <ul>
        <li v-for="number in evenNumbers" :key="number">{{ number }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Exercise06',
    data() {
      return {
        numbers: [5, 12, 15, 22, 9, 18, 25, 30, 7, 33]
      };
    },
    computed: {
      evenNumbers() {
        return this.numbers.filter(number => number % 2 === 0);
      }
    }
  };
  </script>
  
  <style scoped>
  h3 {
    color: #42b983;
  }
  </style>
  