<template>
  <v-row
    align="center"
    justify="center"
    class="fill-height"
  >
    <v-col
      cols="12"
      md="6"
      lg="4"
      class="d-flex justify-center"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Registro</span>
        </v-card-title>
        <v-card-text>
          <SignupForm />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import SignupForm from '~/components/signupForm.vue';

export default {
  layout: 'signup',
  components: {
    SignupForm
  },
};
</script>

<style scoped>

.fill-height {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
