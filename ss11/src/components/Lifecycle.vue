<template>
  <div>
    <h1>Component Lifecycle</h1>
    {{ says() }}
    <p>countC: {{ countC }}</p>
    <p>countD: {{ countD }}</p>
    <button @click="handleClick">Change count</button>
    <p>Hàm tính toán bình thường: {{ caculatorC() }}</p>
    <p>Hàm tính toán computed: {{ caculatorD }}</p>
  </div>
</template>

<script setup>
import {
  computed,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";

const countC = ref(0);
const countD = ref(0);

onBeforeMount(() => {
  console.log("hook onBeforeMount được gọi");
  // nơi gọi API lấy data dữ liệu gắn vào DOM
});
const says = () => {
  console.log("=)))))))))");
};
onMounted(() => {
  console.log("hook onMounted được gọi");
});

// Giai đoạn update
onBeforeUpdate(() => {
  console.log("hook onBeforeUpdate được gọi");
});
onUpdated(() => {
  console.log("hook onUpdated được gọi");
});
const handleClick = () => {
  countC.value++;
};
const caculatorC = () => {
  return countC.value ** 2;
};
const caculatorD = computed(() => {
  return countD.value ** 2;
});
// Giai đoạn hủy: component được loại bỏ, tháo gở khỏi DOM
onBeforeUnmount(()=>{
    console.log("hook onBeforeUnmount được gọi");
})
onUnmounted(()=>{
    console.log("hook onUnmounted được gọi");
})
</script>

<style></style>
