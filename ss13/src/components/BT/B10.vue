<template>
    <v-container>
      <v-card>
        <v-card-title>Item</v-card-title>
        <v-data-table
          :items="dashboard"
          :headers="headers"
          item-value="name"
          class="elevation-1"
        >
          <template v-slot:item.status="{ item }">
            <v-chip :color="getStatusColor(item.status)" dark>
              {{ item.status }}
            </v-chip>
          </template>

          <template v-slot:footer>
            <v-row class="mt-3">
              <v-col cols="12" md="4">
                <v-select
                  v-model="itemsPerPage"
                  :items="perPageOptions"
                  label="Items per page"
                  dense
                  hide-details
                ></v-select>
              </v-col>
              <v-col cols="12" md="8" class="text-right">
                <v-pagination
                  v-model="currentPage"
                  :length="totalPages"
                  total-visible="5"
                  prev-icon="mdi-chevron-left"
                  next-icon="mdi-chevron-right"
                ></v-pagination>
              </v-col>
            </v-row>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const dashboard = ref([
    { name: 'Sunil Joshi', projectName: 'Elite Admin', post: 'Web Designer', status: 'Active', budget: '$3.9' },
    { name: 'Andrew McDowland', projectName: 'Real Homes WP Theme', post: 'Project Manager', status: 'Pending', budget: '$24.5k' },
    { name: 'Christopher Jamil', projectName: 'MedicalPro WP Theme', post: 'Project Manager', status: 'Completed', budget: '$12.8k' },
    { name: 'Nirav Joshi', projectName: 'Hosting Press HTML', post: 'Frontend Engineer', status: 'Active', budget: '$2.4k' },
    { name: 'Micheal Doe', projectName: 'Helping Hands WP Theme', post: 'Content Writer', status: 'Cancel', budget: '$9.3k' }
  ]);
  
  const headers = [
    { text: 'Name', value: 'name', align: 'start' },
    { text: 'Project Name', value: 'projectName' },
    { text: 'Post', value: 'post' },
    { text: 'Status', value: 'status' },
    { text: 'Budget', value: 'budget' }
  ];
  
  const perPageOptions = [5, 10, 20];
  const itemsPerPage = ref(5);
  const currentPage = ref(1);
  
  const totalRecords = computed(() => dashboard.value.length);
  const totalPages = computed(() => Math.ceil(totalRecords.value / itemsPerPage.value));
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'green';
      case 'Completed':
        return 'blue';
      case 'Pending':
        return 'yellow';
      case 'Cancel':
        return 'red';
      default:
        return 'grey';
    }
  };
  </script>
  
  <style scoped>
  .v-data-table {
    margin-top: 20px;
  }
  
  .v-chip {
    font-weight: bold;
  }
  
  .v-pagination {
    display: inline-flex;
  }
  </style>
  