<template>
  <v-app  data-app>
    <main>
    <PaymentForm />
  </main>
  </v-app>
</template>

<script>
import PaymentForm from '~/components/paymentForm.vue';

export default {
  layout: '',
  components: {
    PaymentForm
  }
}
</script>