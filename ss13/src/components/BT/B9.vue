<template>
  <div style="margin-top: 4px">
    <div style="display: flex; gap: 20px; width: 100%">
      <v-card style="width: 400px">
        <v-card-title>Basic layout</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Name"
              v-model="form.name"
              outlined
            ></v-text-field>
            <v-text-field
              label="Company"
              v-model="form.company"
              outlined
            ></v-text-field>
            <v-text-field
              label="Email"
              v-model="form.email"
              outlined
            ></v-text-field>

            <v-text-field
              label="Phone No"
              v-model="form.phone"
              outlined
            ></v-text-field>

            <v-textarea
              label="Message"
              v-model="form.message"
              outlined
            ></v-textarea>

            <v-btn color="primary" @click="submitForm">Send</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
      <v-card style="width: 400px">
        <v-card-title>Basic with Icons</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Name"
              prepend-icon="mdi-account"
              v-model="form.name"
              outlined
            ></v-text-field>
            <v-text-field
              label="Company"
              prepend-icon="mdi-domain"
              v-model="form.company"
              outlined
            ></v-text-field>
            <v-text-field
              label="Email"
              prepend-icon="mdi-email"
              v-model="form.email"
              outlined
            ></v-text-field>

            <v-text-field
              label="Phone No"
              prepend-icon="mdi-phone"
              v-model="form.phone"
              outlined
            ></v-text-field>

            <v-textarea
              label="Message"
              prepend-icon="mdi-message"
              v-model="form.message"
              outlined
            ></v-textarea>

            <v-btn color="primary" @click="submitForm">Send</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
});
</script>
<style></style>
