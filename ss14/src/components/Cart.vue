<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>
            <v-stepper>
              <v-stepper-header>
                <v-stepper-step :complete="true">Item Cart</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step :complete="false">Billing</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step :complete="false">Payment</v-stepper-step>
              </v-stepper-header>
            </v-stepper>
          </v-card-title>
          <v-card-text>
            <v-simple-table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cute Soft Teddybear</td>
                  <td>$200</td>
                  <td>
                    <v-text-field
                      v-model="quantity"
                      type="number"
                      min="1"
                      max="10"
                    />
                  </td>
                  <td>$200</td>
                </tr>
              </tbody>
            </v-simple-table>
            <v-divider></v-divider>
            <v-row class="mt-3">
              <v-col cols="6">Sub Total</v-col>
              <v-col cols="6" class="text-right">$200</v-col>
              <v-col cols="6">Discount 5%</v-col>
              <v-col cols="6" class="text-right">-$10</v-col>
              <v-col cols="6">Shipping Charges</v-col>
              <v-col cols="6" class="text-right">$0</v-col>
              <v-col cols="6"><strong>Total</strong></v-col>
              <v-col cols="6" class="text-right"><strong>$190</strong></v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn outlined color="orange lighten-4" class="text-orange"
              >Continue Shopping</v-btn
            >
            <v-btn color="orange lighten-4" dark>CheckOut</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const quantity = ref(1);
</script>

<style scoped>
.text-orange {
  color: #fb8c00 !important;
}
</style>
