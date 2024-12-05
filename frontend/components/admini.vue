<template>
  <v-app>
    <!-- Header -->
    <div class="min-h-32 grid grid-cols-12 gap-4 bg-ColorWhite sm:shadow">
      <!-- Logo -->
      <div
        class="col-span-6 sm:col-span-2 order-1 sm:order-1 flex justify-center items-center text-2xl lg:text-3xl text-colorSecondary font-inter font-medium"
      >
        MORENT
      </div>
      <!-- Toolbar Search -->
      <div class="col-span-12 sm:col-span-7 order-2 sm:order-2 flex items-center">
        <div
          class="w-full lg:w-9/12 2xl:w-1/2 border border-colorBorderSearch py-2 px-4 rounded-full space-x-2 text-lg"
        >
          <label for="search">
            <v-icon class="text-bold text-colorLupa">mdi-magnify</v-icon>
          </label>
          <input
            v-model="searchQuery"
            type="text"
            id="search"
            placeholder="Search something here"
            class="w-10/12 outline-none"
          />
        </div>
      </div>
      <!-- User - Interactives Icons -->
      <div class="col-span-6 sm:col-span-3 order-3 sm:order-3 flex justify-center items-center space-x-4">
        <v-icon class="border border-colorBorderSearch rounded-full h-10 w-10 lg:h-12 lg:w-12">
          mdi-heart
        </v-icon>
        <v-icon class="border border-colorBorderSearch rounded-full h-10 w-10 lg:h-12 lg:w-12">
          mdi-bell
        </v-icon>
        <v-icon class="border border-colorBorderSearch rounded-full h-10 w-10 lg:h-12 lg:w-12">
          mdi-cog
        </v-icon>
        <v-icon class="border border-colorBorderSearch rounded-full h-10 w-10 lg:h-12 lg:w-12">
          mdi-account
        </v-icon>
      </div>
    </div>

    <v-container fluid class="mt-1">
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
                  <v-icon :color="activeIndex === index ? 'white' : 'primary'">
                    {{ item.icon }}
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    :class="{ 'active-text': activeIndex === index }"
                  >
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>

        <!-- Main Content -->
        <v-col cols="9" class="pa-4">
          <!-- First Row: Map and Details -->
          <v-row>
            <!-- Map and Rental Details -->
            <v-col cols="6">
              <v-card class="pa-4 card-design">
                <v-card-title class="text-h6 font-weight-bold text-white">
                  Details Rental
                </v-card-title>
                <v-divider class="mb-3 divider-light"></v-divider>
                <div>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/001/265/731/non_2x/map-with-location-pin-vector.jpg"
                    alt="Mapa de Irapuato"
                    class="map-image"
                  />
                </div>
                <v-card-title class="text-h6 font-weight-bold text-primary">
                  {{ marca }}
                </v-card-title>
                <v-divider class="mb-3 divider-light"></v-divider>
                <div>
                  <p class="text-body-2">
                    <strong>Pick-Up:</strong> {{ rfecha }}, {{ rhora }},
                    {{ rlugar }}
                  </p>
                  <p class="text-body-2">
                    <strong>Drop-Off:</strong> {{ dfecha }}, {{ dhora }},
                    {{ dlugar }}
                  </p>
                  <p class="text-body-2 text-primary">
                    <strong>Total Price:</strong> ${{ precioF }}
                  </p>
                </div>
              </v-card>
            </v-col>

            <!-- Top 5 and Recent Transactions -->
            <v-col cols="6">
              <v-card class="pa-4 card-design">
                <v-card-title class="text-h6 font-weight-bold text-white">
                  Top 5 Car Rentals
                </v-card-title>
                <v-divider class="mb-3 divider-light"></v-divider>
                <div class="chart-placeholder text-center">
                  <v-progress-circular
                    :value="72"
                    size="100"
                    width="10"
                    color="blue"
                    class="mb-2"
                  ></v-progress-circular>
                  <p class="text-caption text-white">72,030 Total Rentals</p>
                  <div class="chart-legend mt-2 text-white">
                    <p v-for="car in carCategories" :key="car.name">
                      <span :style="{ color: car.color }">●</span> {{ car.name }}:
                      {{ car.count }}
                    </p>
                  </div>
                </div>
              </v-card>

              <v-card class="pa-4 mt-4 card-design-alt">
                <v-card-title class="text-h6 font-weight-bold text-primary">
                  Recent Transactions
                </v-card-title>
                <v-divider class="mb-3 divider-light"></v-divider>
                <v-list dense>
                  <!-- Verifica si hay transacciones -->
                  <template v-if="rentas && rentas.length > 0">
                    <v-list-item
                      v-for="(item, index) in rentas"
                      :key="index"
                    >
                      <v-list-item-content>
                        <v-list-item-title class="text-body-1">
                          {{ item.car }}
                        </v-list-item-title>
                        <v-list-item-subtitle class="text-caption">
                          {{ item.rfecha }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action>
                        <span class="font-weight-bold text-primary">
                          ${{ item.precioF }}
                        </span>
                      </v-list-item-action>
                    </v-list-item>
                  </template>
                  <template v-else>
                    <p class="text-caption text-muted">
                      No recent transactions available.
                    </p>
                  </template>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <footerPage />
  </v-app>
</template>

<script>
import headerSearch from "../components/headerSearch.vue";
import footerPage from "../components/footerPage.vue";

export default {
  components: {
    headerSearch,
    footerPage,
  },
  data() {
    return {
      marca: "",
      rfecha: "",
      rhora: "",
      rlugar: "",
      dfecha: "",
      dhora: "",
      dlugar: "",
      precioF: "",
      activeIndex: 0,
      menuItems: [
        { text: "Dashboard", icon: "mdi-view-dashboard" },
        { text: "Car Rent", icon: "mdi-car" },
        { text: "Insight", icon: "mdi-chart-box-outline" },
        { text: "Reimburse", icon: "mdi-cash" },
        { text: "Inbox", icon: "mdi-email" },
        { text: "Calendar", icon: "mdi-calendar" },
      ],
      carCategories: [
        { name: "Sport Car", count: 17439, color: "#1E88E5" },
        { name: "SUV", count: 9478, color: "#2196F3" },
        { name: "Coupe", count: 18197, color: "#42A5F5" },
        { name: "Hatchback", count: 12510, color: "#64B5F6" },
        { name: "MPV", count: 14406, color: "#90CAF9" },
      ],
      rentas: [],
    };
  },
  methods: {
    async mostracarro() {
      try {
        const response = await this.$axios.get("/carros/I0uk1RVfxboQsS4aWiPm");
        const data = response.data;

        this.marca = data.marca;
      } catch (error) {
        console.error("Error: ", error);
      }
    },
    async mostrarenta() {
      try {
        const response = await this.$axios.get("/rentas/E6lh5dmW4DhCMMa1Vt62");
        const data = response.data;

        this.rfecha = data.rfecha;
        this.rhora = data.rhora;
        this.rlugar = data.rlugar;
        this.dfecha = data.dfecha;
        this.dhora = data.dhora;
        this.dlugar = data.dlugar;
        this.precioF = data.precioF;
      } catch (error) {
        console.error("Error: ", error);
      }
    },
    async fetchRecentTransactions() {
      try {
        const response = await this.$axios.get("/rentas/");
        this.rentas = response.data;
      } catch (error) {
        console.error("Error fetching transactions: ", error);
      }
    },
    setActive(index) {
      this.activeIndex = index;
    },
  },
  mounted() {
    this.mostracarro();
    this.mostrarenta();
    this.fetchRecentTransactions();
  },
};
</script>

<style scoped>
/* Sidebar Styles */
.sidebar {
 
  height: 100vh;
  border-right: 10px solid #ffffff;
}

.sidebar-card {
  height: 100%;
  padding: 20px 0;
}

.sidebar-item {
  padding: 12px 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.sidebar-item:hover {
  background-color: rgba(0, 110, 255, 0.334);
}

.active-item {
  background-color: #3563E9;
  border-left: 4px solid white;
  border-radius: 8px;
}

.active-text {
  color: white !important;
}

/* Card Styles */
.card-design {
  color: rgb(0, 0, 0);
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.card-design-alt {
  background-color: white;
 
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.divider-light {
  background-color: #3563E9;
}

.map-image {
  width: 95%;
  height: auto;
  border-radius: 8px;
}

/* Header and Search */
.header {
  padding: 10px 20px;
  border-radius: 10px;
}

.search-bar {
  width: 60%;
}

.header-actions v-btn {
  color: white;
}
</style>