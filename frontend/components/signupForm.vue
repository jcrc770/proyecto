<template>
  <v-form ref="form" v-model="valid" lazy-validation class="d-flex flex-column align-center">
    <!-- Primer campo (nombre) -->
    <v-text-field
      v-model="nombre"
      label="Nombre"
      :rules="[v => !!v || 'Este campo es obligatorio']"
      required
      class="mb-4"
      style="max-width: 400px;"
    ></v-text-field>

    <!-- Campos agrupados en pares (apellido paterno y materno) -->
    <v-row class="d-flex justify-center" no-gutters>
      <v-col cols="12" md="6" class="mb-4 ">
        <v-text-field
          v-model="apaterno"
          label="Apellido paterno"
          :rules="[v => !!v || 'Este campo es obligatorio']"
          required
          style="max-width: 100%"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6" class="mb-4">
        <v-text-field
          v-model="amaterno"
          label="Apellido materno"
          required
          style="max-width: 100%"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Agrupando domicilio y teléfono -->
    <v-row class="d-flex justify-center" no-gutters>
      <v-col cols="12" md="6" class="mb-4">
        <v-text-field
          v-model="domicilio"
          label="Domicilio"
          :rules="[v => !!v || 'Este campo es obligatorio']"
          required
          style="max-width: 100%"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6" class="mb-4">
        <v-text-field
          v-model="telefono"
          label="Teléfono"
          :rules="[v => !!v || 'Este campo es obligatorio']"
          required
          style="max-width: 100%"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Agrupando email y nombre de usuario -->
    <v-row class="d-flex justify-center" no-gutters>
      <v-col cols="12" md="6" class="mb-4">
        <v-text-field
          v-model="email"
          label="Correo Electrónico"
          :rules="[v => !!v || 'Este campo es obligatorio', v => /.+@.+\..+/.test(v) || 'El correo debe ser válido']"
          required
          style="max-width: 100%"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6" class="mb-4">
        <v-text-field
          v-model="usuario"
          label="Nombre de usuario"
          :rules="[v => !!v || 'Este campo es obligatorio']"
          required
          style="max-width: 100%"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Agrupando contraseña y rol -->
    <v-row class="d-flex justify-center" no-gutters>
      <v-col cols="12" md="6" class="mb-4">
        <v-text-field
          v-model="password"
          label="Contraseña"
          type="password"
          :rules="[v => !!v || 'Este campo es obligatorio', v => v.length >= 6 || 'La contraseña debe tener al menos 6 caracteres']"
          required
          style="max-width: 100%"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6" class="mb-4">
        <v-text-field
          v-model="rol"
          label="Rol"
          :rules="[v => !!v || 'Este campo es obligatorio']"
          required
          style="max-width: 100%"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Botón de registro -->
    <v-btn
      :disabled="!valid"
      color="primary"
      @click="submitForm"
      class="mt-4"
      style="max-width: 400px;"
    >
      Registrarse
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      apaterno: '',
      amaterno: '',
      domicilio: '',
      telefono: '',
      email: '',
      usuario: '',
      password: '',
      rol: '',
      valid: false,
    };
  },
  methods: {
    // Método para validar si todos los campos están completos
    validateForm() {
      this.valid = this.nombre && this.apaterno && this.amaterno && this.domicilio && this.telefono && this.email && this.usuario && this.password && this.rol;
    },
    
    submitForm() {
      // Validar el formulario antes de enviarlo
      this.validateForm();

      if (!this.valid) {
        alert("Por favor, complete todos los campos.");
        return;
      }

      // Cuerpo de la solicitud
      const body = {
        nombre: this.nombre,
        apaterno: this.apaterno,
        amaterno: this.amaterno,
        domicilio: this.domicilio,
        telefono: this.telefono,
        email: this.email,
        usuario: this.usuario,
        password: this.password,
        rol: this.rol
      }

      // Enviar la solicitud POST
      this.$axios.post('/usuarios/create', body)
        .then(response => {
          // Manejar la respuesta del servidor
          alert('Usuario creado exitosamente');
          this.$router.push('/login')
          // Aquí puedes hacer algo con la respuesta, como redirigir al usuario o limpiar el formulario.
        })
        .catch(error => {
          // Manejar los errores de la solicitud
          console.error(error);
          alert('Ocurrió un error al crear el usuario');
        });
    },
  },
};
</script>


<style scoped>
/* Aseguramos que todo el contenido dentro del formulario esté centrado */
.d-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-column {
  flex-direction: column;
}

.mb-4 {
  margin-bottom: 16px;
}

.mt-4 {
  margin-top: 16px;
}

.v-row {
  display: flex;
  justify-content: center;
}
</style>
