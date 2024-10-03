<template>
  <v-card>
    <v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab value="one">TRANG CHỦ</v-tab>
      <v-tab value="two">GIỚI THIỆU</v-tab>
      <v-tab value="three">LIÊN HỆ</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one">
          Trang chủ
        </v-tabs-window-item>

        <v-tabs-window-item value="two">
          Giới thiệu
        </v-tabs-window-item>

        <v-tabs-window-item value="three">
          Liên hệ
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref(null)
</script>

<style>

</style>