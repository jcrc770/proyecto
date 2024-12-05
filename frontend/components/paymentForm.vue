<template>
  <v-container>
    <v-row>
      <!-- Billing Info -->
      <v-col cols="12" md="8">
        <v-card class="rounded-xl">
          <v-card-title>Billing Info</v-card-title>
          <v-card-subtitle>Please enter your billing info</v-card-subtitle>
          <v-card-text>
            <v-text-field v-model="nombre" label="Nombre" filled rounded dense ></v-text-field>
            <v-text-field v-model="telefono" label="Teléfono" filled rounded dense></v-text-field>
            <v-text-field v-model="direccion" label="Dirección" filled rounded dense></v-text-field>
            <v-text-field v-model="ciudad" label="Ciudad" filled rounded dense></v-text-field>
          </v-card-text>
        </v-card>
        <!-- Rental Info -->
        <v-card class="mt-4 rounded-xl">
          <v-card-title>Rental Info</v-card-title>
          <v-card-subtitle>Please select your rental date</v-card-subtitle>
          <v-card-text>
            <!-- Pick up -->
            <v-row>
              <v-col cols="12">
                <v-radio-group row readonly>
                  <v-radio label="Pick-Up" value="pick-up"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="rlugar" label="Location" filled rounded dense></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-menu
                  v-model="menuRfecha"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  max-width="290px"
                  offset-y
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="rfecha"
                      label="Pick-up day"
                      filled
                      rounded
                      dense
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="rfecha" :max="maxDate" @input="menuRfecha = false"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="rhora" label="Time" filled rounded dense></v-text-field>
              </v-col>
            </v-row>
            <!-- Pick off -->
            <v-row>
              <v-col cols="12">
                <v-radio-group row readonly>
                  <v-radio label="Pick-off" value="pick-off"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="dlugar" label="Locations" filled rounded dense></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-menu
                    v-model="menuDfecha"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    max-width="290px"
                    offset-y
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="dfecha"
                        label="Pick-off day"
                        filled
                        rounded
                        dense
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>

                    <v-date-picker v-model="dfecha" :max="maxDate" @input="menuDfecha = false"></v-date-picker>
                  </v-menu>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="dhora" label="Time" filled rounded dense></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <!-- payment method -->
        <v-card class="mt-4 pa-3 rounded-xl">
          <v-card-title>Payment Method</v-card-title>
          <v-card-subtitle>Please enter your payment method</v-card-subtitle>
          <v-col cols="12" class="blue-grey lighten-5 rounded-lg">
            <v-radio-group row>
              <v-radio label="credit card" value="credit-card" readonly></v-radio>
            </v-radio-group>
            <v-row>
              <v-col cols="6">
              <v-text-field v-model="cardN" label="Card Number" filled rounded dense></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="cardE" label="Experation Date" filled rounded dense></v-text-field>
            </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
              <v-text-field v-model="cardH" label="Card Holder" filled rounded dense></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="CVC" label="CVC" filled rounded dense></v-text-field>
            </v-col>
            </v-row>
          </v-col>
          <v-col></v-col>
        </v-card>
      </v-col>
      <!-- Rental Summary -->
      <v-col cols="12" md="4">
        <v-card class="rounded-xl">
          <v-card-title>Rental Summary</v-card-title>
          <v-card-text>
            <v-row>
              <!-- Imagen del producto -->
              <v-col cols="4" class="pa-1 mr-0">
                <v-img src="https://i.pinimg.com/736x/99/67/31/996731c33d210a6369a9c4eae1bc4395.jpg" 
                      class="text-align-left" 
                      max-width="300">
                </v-img>
              </v-col>

              <!-- Información del producto (marca y modelo) -->
              <v-col cols="8" class="d-flex flex-column justify-center">
                <v-card-title>{{ marca }} {{ modelo }}</v-card-title>
              </v-col>
            </v-row>
            <!-- Información del precio y impuestos -->
            <v-row class="mt-2 ma-0 pa-0">
              <v-col cols="6">Subtotal:</v-col>
              <v-col cols="6" class="text-right">
                <v-card-text class="d-inline">${{ precio }}.00</v-card-text>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">Tax:</v-col>
              <v-col cols="6" class="text-right">$0.00</v-col>
            </v-row>

            <!-- Botón para realizar el pago -->
            <v-btn color="primary" block @click="paymentBackend">Rent now</v-btn>

            <v-divider class="my-3"></v-divider>

            <!-- Total del precio de renta -->
            <v-row>
              <v-col cols="6"><strong>Total Rental Price:</strong></v-col>
              <v-col cols="6" class="text-right"><strong>
                <span>${{ precioF }}.00</span>
              </strong></v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      telefono: '',
      direccion: '',
      ciudad: '',
      rlugar: '',
      rfecha: '',
      rhora: '',
      dlugar: '',
      dfecha: '',
      dhora: '',
      cardN: '',
      cardE: '',
      cardH: '',
      CVC: '',
      carroId: '',
      modelo: '',
      precio: 0,   
      marca: '',  
      maxDate: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().substr(0, 10),
      precioF: 0,
      menuRfecha: false, // Control de visibilidad para el calendario de rfecha
      menuDfecha: false  // Control de visibilidad para el calendario de dfecha
    };
  },
  methods: {
    // Método para obtener los detalles del carro desde el backend
    async fetchCarDetails() {
      try {
        const response = await this.$axios.get(`/carros/${this.$route.params.idCarro}`); 
        this.modelo = response.data.modelo;
        this.precio = response.data.precio;
        this.marca = response.data.marca;
        this.carroId = response.data.id;
      } catch (error) {
        console.error('Error fetching car details:', error);
        alert('Ocurrió un error al obtener los detalles del carro');
      }
      this.calculateTotalPrice(); // Recalcular el precio total después de obtener el carro
    },
    // Método para calcular la cantidad de días y actualizar el precio
    calculateTotalPrice() {
      if (this.rfecha && this.dfecha) {
        const rDate = new Date(this.rfecha);
        const dDate = new Date(this.dfecha);
        const timeDiff = dDate - rDate; 
        const daysDiff = timeDiff / (1000 * 3600 * 24); 
        this.precioF = this.precio * daysDiff;
      }
    },
    paymentBackend() {
      const body = {
        nombre: this.nombre,
        telefono: this.telefono,
        direccion: this.direccion,
        ciudad: this.ciudad,
        rlugar: this.rlugar,
        rfecha: this.rfecha,
        rhora: this.rhora,
        dlugar: this.dlugar,
        dfecha: this.dfecha,
        dhora: this.dhora,
        cardN: this.cardN,
        cardE: this.cardE,
        cardH: this.cardH,
        CVC: this.CVC,
        carroId: this.carroId,
        precioF: this.precioF 
      };

      this.$axios.post('/rentas/create', body)
        .then(() => {
          alert('Renta creada exitosamente');
          this.$router.push('/usuario');
        })
        .catch((error) => {
          console.error('Error al efectuar la renta:', error);
          alert('Ocurrió un error al efectuar la renta');
        });
    }
  },
  watch: { // Función para observar cambios en tiempo real de las variables
    rfecha() {
      this.calculateTotalPrice();
    },
    dfecha() {
      this.calculateTotalPrice();
    }
  },
  mounted() {
    this.fetchCarDetails();
  }
};
</script>
  