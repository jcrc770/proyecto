<template>
  <v-app>
  <v-container fluid>
  <v-row>
  <!-- Sidebar -->
  <v-col cols="3" class="pa-4 sidebar">
  <v-card class="sidebar-card">
  <v-list dense>
  <v-list-item
  
                  v-for="(item, index) in menuItems"
  
                  :key="item.text"
  
                  link
  
                  class="sidebar-item"
  
                  :class="{ 'active-item': activeIndex === index }"
  
                  @click="setActive(index)"
  >
  <v-list-item-icon>
  <v-icon :color="activeIndex === index ? 'white' : 'primary'">{{ item.icon }}</v-icon>
  </v-list-item-icon>
  <v-list-item-content>
  <v-list-item-title :class="{ 'active-text': activeIndex === index }">
  
                      {{ item.text }}
  </v-list-item-title>
  </v-list-item-content>
  </v-list-item>
  </v-list>
  </v-card>
  </v-col>
   
          <!-- Main Content -->
  <v-col cols="9" class="pa-4">
  <!-- Header -->
  <v-row align="center" justify="space-between" class="mb-4 header">
  <v-text-field
  
                dense
  
                outlined
  
                placeholder="Search cars by model or brand"
  
                prepend-inner-icon="mdi-magnify"
  
                v-model="searchQuery"
  
                class="search-bar"
  ></v-text-field>
  </v-row>
   
            <!-- Car List -->
  <v-row>
  <v-col cols="12">
  <v-card class="pa-4 card-design-alt">
  <v-card-title class="text-h6 font-weight-bold text-primary">
  
                    Car List
  </v-card-title>
  <v-divider class="mb-3 divider-light"></v-divider>
  <v-data-table
  
                    :headers="headers"
  
                    :items="filteredCars"
  
                    item-value="id"
  
                    dense
  
                    class="elevation-1"
  >
  <template #item.actions="{ item }">
  <v-btn icon @click="editCar(item)">
  <v-icon>mdi-pencil</v-icon>
  </v-btn>
  <v-btn icon color="red" @click="deleteCar(item.id)">
  <v-icon>mdi-delete</v-icon>
  </v-btn>
  </template>
  </v-data-table>
  </v-card>
  </v-col>
  </v-row>
   
            <!-- Dialog for Add/Edit -->
  <v-dialog v-model="editDialog" max-width="600px">
    <v-card>
      <v-card-title>Edit Car</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="carData.marca"
            label="Marca"
            required
          ></v-text-field>
          <v-text-field
            v-model="carData.modelo"
            label="Modelo"
            required
          ></v-text-field>
          <v-text-field
            v-model="carData.anio"
            label="Año"
            required
          ></v-text-field>
          <!-- Agregar otros campos según sea necesario -->
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn text @click="editDialog = false">Cancel</v-btn>
        <v-btn color="primary" @click="updateCar">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  </v-col>
  </v-row>
  </v-container>
  </v-app>
  </template>
   
   <script>
   export default {
     data() {
       return {
         editDialog: false, // Para mostrar/ocultar el dialogo
         carData: { // Datos del carro
           marca: "",
           modelo: "",
           anio: "",
         },
       };
     },
     methods: {
       // Mostrar el diálogo con los datos del carro a editar
       editCar(car) {
         this.carData = { ...car }; // Copiar los datos del carro para editar
         this.editDialog = true;
       },
       
       // Actualizar los datos del carro
       async updateCar() {
         try {
           // Realiza una solicitud PUT a tu API para actualizar el carro
           const response = await this.$axios.put('/carros/update/', this.carData);
   
           // Verifica la respuesta
           if (response.status === 200) {
             this.$emit('car-updated'); // Emite un evento si es necesario
             this.editDialog = false; // Cierra el diálogo
             this.$toast.success('Car updated successfully!'); // Muestra un mensaje de éxito
           } else {
             this.$toast.error('Failed to update car.');
           }
         } catch (error) {
           console.error('Error updating car:', error);
           this.$toast.error('An error occurred while updating the car.');
         }
       },
     },
   };
   </script>
   
   
  <style scoped>
  
  /* Similar styles adjusted for this layout */
  
  .sidebar {
  
    background-color: #2b2b2b;
  
    color: white;
  
    height: 100vh;
  
    border-right: 10px solid #ddd;
  
  }
   
  .active-item {
  
    background-color: #3563E9;
  
  }
   
  .card-design-alt {
  
    background-color: #ffffff;
  
  }
   
  .search-bar {
  
    width: 60%;
  
  }
  </style>
  
   