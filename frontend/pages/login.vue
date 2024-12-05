<template>
  <!-- Contenedor principal con diseño centrado -->
  <v-container class="d-flex justify-center align-center" style="min-height: 100vh;">
    <v-card 
      class="elevation-1 rounded-rentacar" 
      font-color="black"
      max-width="350"
    >
      <!-- Título del formulario -->
      <v-card-title
        class="text-h5 rentacar-title"
        style="text-align: center; margin: 20px; color: black;"
      >
        <v-icon large left color="black" aria-label="Car icon">
          mdi-car
        </v-icon>
        Ingresa
      </v-card-title>

      <v-card-text>
        <!-- Campo de texto para el usuario -->
        <v-row>
          <v-text-field
            v-model="usuario"
            label="User"
            filled
            rounded
            dense
            :prepend-inner-icon="'mdi-account'"
            outlined
            :rules="[v => !!v || 'El usuario es obligatorio']"
          />
        </v-row>

        <!-- Campo de texto para la contraseña -->
        <v-row>
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            filled
            rounded
            dense
            color="blue darken-4"
            :prepend-inner-icon="'mdi-lock'"
            outlined
            :rules="[v => !!v || 'La contraseña es obligatoria']"
          >
            <!-- Ícono para mostrar/ocultar contraseña -->
            <template #append>
              <v-icon @click="togglePasswordVisibility">
                {{ showPassword ? 'mdi-eye-off' : 'mdi-eye' }}
              </v-icon>
            </template>
          </v-text-field>
        </v-row>

        <!-- Mensaje de error -->
        <v-row>
          <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>
        </v-row>
      </v-card-text>

      <!-- Botón de login -->
       <v-container class="pa-5">
        <v-card-actions class="d-flex justify-center">
          <v-col cols="6">
            <v-btn 
              color="blue darken-3" 
              class="transition-ease"
              @click="loginBackend"
            >
              <span style="text-transform: none; color: white;">
                Entrar
              </span>
              <v-icon color="white" right>
                mdi-login
              </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn
            color="blue darken-3" 
              class="transition-ease"
              @click="signupBackend"
            >
            <span style="text-transform: none; color: white;">
                Registrarse
              </span>
            </v-btn>
          </v-col>
        </v-card-actions>
       </v-container>
    </v-card>
  </v-container>
</template>


<script>
import Cookies from 'js-cookie'
export default {
  layout: 'inicio',
  data () {
    return {
      usuario: '',
      password: '',
      showPassword: false // Control para mostrar/ocultar la contraseña
    }
  },
  methods: {
    loginBackend () {
      const body = {
        usuario: this.usuario,
        password: this.password
      }

      // Petición axios para el login
      this.$axios.post('/usuarios/auth/login', body)
        .then((res) => {
          // console.log('Respuesta completa:', res.data);

          if (res.data && res.data.token) {
            Cookies.set('token', res.data.token, { expires: 1, path: '/' })
            Cookies.set('rol', res.data.rol, { expires: 1, path: '/' })
            const rol = res.data.rol
            if (rol === 'admin') {
              this.$router.push('/admin/admin')
            } else if (rol === 'usuario') {
              this.$router.push('/usuario')
            } else {
              console.error('Rol desconocido:', rol)
            }
          }
        })
        .catch((error) => {
          console.error('@@ error => ', error)
          this.errorMessage = error.response?.data?.error || 'Error al iniciar sesión'
        })
    },
    signupBackend () {
      this.$router.push('/signup')
    },
    togglePasswordVisibility () {
      this.showPassword = !this.showPassword
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

.rounded-rentacar {
  border-radius: 20px;
}

/* Tipografía del título */
.rentacar-title {
  font-family: 'Roboto', sans-serif;
  font-size: 1.25em;
}

/* Transiciones para botones */
.transition-ease {
  transition: all 0.3s ease;
}

.transition-ease:hover {
  background-color: #00509e;
}

/* Estilo para mensajes de error */
.error-text {
  color: #FF5252;
  font-size: 0.875rem;
  text-align: center;
  margin: 8px 0 0;
}

/* Fondo responsivo */
body {
  margin: 0;
  background: linear-gradient(135deg, #1E1E1E, #004080);
  color: #FFF;
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
}
</style>
