<template>
  <v-card class="mx-auto" max-width="344" hover>
    <v-card-item>
      <v-img
        :width="300"
        aspect-ratio="16/9"
        cover
        src="https://plus.unsplash.com/premium_photo-1669748157617-a3a83cc8ea23?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VhJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D"
        style="margin-bottom: 10px; border-radius: 5px;"
      >
        <v-card-title style="padding: 10px">Top 10 Australian beaches</v-card-title>
      </v-img>

      <v-card-subtitle> Number 10 </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      <p>Whitehaven Beach</p>
      <p>Whitsunday Island, Whitsunday Islands</p>
    </v-card-text>
    <v-card-text style="display: flex; gap: 10px">
      <v-btn style="color: orange"> Button </v-btn>
      <v-btn style="color: orange"> Button </v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup></script>

<style></style>
