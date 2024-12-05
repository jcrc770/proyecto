<template>
  <v-container class="pa-4">
    <v-card class="pa-5" outlined>
      <v-card-title class="text-center text--primary">
        <h2>Agrega tu auto</h2>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Marca"
                v-model="marca"
                :rules="[rules.required]"
                outlined
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Modelo"
                v-model="modelo"
                :rules="[rules.required]"
                outlined
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-text-field
                label="Año"
                v-model="year"
                :rules="[rules.required]"
                outlined
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="Tipo"
                v-model="tipo"
                :rules="[rules.required]"
                outlined
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="Capacidad"
                v-model="capacidad"
                :rules="[rules.required]"
                outlined
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-text-field
                label="Tipo de transmisión"
                v-model="direccion"
                :rules="[rules.required]"
                outlined
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="Capacidad de gasolina"
                v-model="gasolina"
                :rules="[rules.required]"
                outlined
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="Precio"
                v-model="precio"
                :rules="[rules.required]"
                outlined
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
          <v-btn
            class="mt-4"
            :disabled="!valid"
            block
            color="primary"
            @click="submitForm"
          >
            Enviar
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      marca: '',
      modelo: '',
      year: '',
      tipo: '',
      capacidad: '',
      direccion: '',
      gasolina: '',
      precio: '',
      rules: {
        required: (v) => !!v || "Este campo es obligatorio.",
      },
    };
  },
  methods: {
    submitForm() {
      if (this.valid) {
        const body = {
          marca: this.marca,
          modelo: this.modelo,
          year: this.year,
          tipo: this.tipo,
          capacidad: this.capacidad,
          direccion: this.direccion,
          gasolina: this.gasolina,
          precio: this.precio
        };
        this.$axios.post('/carros/create', body)
          .then(() => {
            alert(
              'Formulario enviado!'
            );
            this.$router.push('/admin/admin')
          })
          .catch((error) => {
            console.error('Error al crear el carro:', error);
            alert('Ocurrió un error al efectuar la renta');
          });
      } else {
        alert("Por favor, completa todos los campos correctamente.");
      }
    },
  },
};
</script>

<style>
.v-application {
  background-color: #ffffff !important;
}

.text--primary {
  color: #3563e9 !important;
}

.v-btn {
  background-color: #3563e9 !important;
  color: #ffffff !important;
}

.v-btn:disabled {
  background-color: #9c9c9c !important;
  color: #ffffff !important;
}
</style>
