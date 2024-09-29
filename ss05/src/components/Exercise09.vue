<template>
  <div>
    <p>Gender: {{ gender }}</p>
    <button @click="randomGender">Random gender</button>
  </div>
</template>

<script>
export default {
  name: "Exercise09",
  data() {
    return {
      genders: ["Nam", "Nữ", "Khác"],
      gender: "Nam",
    };
  },
  methods: {
    randomGender() {
      const randomIndex = Math.floor(Math.random() * this.genders.length);
      this.gender = this.genders[randomIndex];
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
