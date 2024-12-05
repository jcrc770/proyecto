<template>
  <v-app>
    <v-app-bar app class="white elevation-0">
      <v-toolbar-title>MORENT</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid class="d-flex justify-center align-center blue-grey lighten-5" style="min-height: 100vh;">
        <nuxt />
        <slot></slot>
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; MORENT</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  layout: 'signup',
};
</script>

<style scoped>
/* Estilos globales si es necesario */
</style>
