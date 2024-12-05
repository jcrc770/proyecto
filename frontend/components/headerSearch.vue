<script>
export default {
  data() {
    return {};
  },
  methods: {
    async logout() {
      try {
        // Llamada a la API de logout
        await this.$axios.post('/usuarios/auth/logout');
        
        // Mensaje de éxito
        alert('Sesión cerrada con éxito');
        
        // Redirigir al usuario al login o página principal
        this.$router.push('/login'); // Ajusta la ruta según tu configuración
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
        alert('Error al cerrar sesión. Inténtalo de nuevo.');
      }
    }
  }
};
</script>


<template>
  <div class="min-h-32 grid grid-cols-12 gap-4 bg-ColorWhite sm:shadow">
    <!-- Logo -->
    <div
      class="col-span-6 sm:col-span-2 order-1 sm:order-1 flex justify-center items-center text-2xl lg:text-3xl text-colorSecondary font-inter font-medium">
      MORENT
    </div>
    <!-- Toolbar Search -->
    <div class="col-span-12 sm:col-span-7 order-3 sm:order-2 flex items-center">
      <div
        class="w-full lg:w-9/12 2xl:w-1/2 border border-colorBorderSearch py-2 px-4 rounded-full space-x-2 text-lg">
        <label for="search">
          <v-icon class="text-bold text-colorLupa">mdi-magnify</v-icon>
        </label>
        <input v-model="searchQuery" type="text" id="search" placeholder="Search something here"
          class="w-10/12 outline-none" />
      </div>
    </div>
    <!-- User - Interactive Icons -->
    <div class="col-span-6 sm:col-span-3 order-2 sm:order-3 flex justify-center items-center space-x-4">
      <v-icon class="border border-colorBorderSearch rounded-full h-10 w-10 lg:h-12 lg:w-12">
        mdi-heart
      </v-icon>

      <!-- Ícono de Campana de Notificación -->
      <v-icon class="border border-colorBorderSearch rounded-full h-10 w-10 lg:h-12 lg:w-12">
        mdi-bell
      </v-icon>

      <!-- Ícono de Engranaje de Configuración -->
      <v-icon class="border border-colorBorderSearch rounded-full h-10 w-10 lg:h-12 lg:w-12">
        mdi-cog
      </v-icon>

      <!-- Ícono de Avatar de Usuario -->
      <v-icon class="border border-colorBorderSearch rounded-full h-10 w-10 lg:h-12 lg:w-12">
        mdi-account
      </v-icon>

      <!-- Ícono de Logout con interacción -->
      <div class="col-span-6 sm:col-span-3 order-2 sm:order-3 flex justify-center items-center space-x-4">
      <!-- Botón de Logout -->
      <v-icon
        class="border border-colorBorderSearch rounded-full h-10 w-10 lg:h-12 lg:w-12 cursor-pointer"
        @click="logout"
      >
        mdi-logout
      </v-icon>
    </div>
    </div>
  </div>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
