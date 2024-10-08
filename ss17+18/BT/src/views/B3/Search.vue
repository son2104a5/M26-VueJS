<template>
  <div>
    <input type="text" v-model="keySearch">
    <button @click="handleClick">Search</button>
    <p>Value: {{ searchValue }}</p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()
const keySearch = ref("")

const handleClick = () => {
    router.push({
        query: {
            q: keySearch.value
        }
    })
}
const searchValue = computed(() => {
  return route.query.q;
});
</script>

<style>

</style>