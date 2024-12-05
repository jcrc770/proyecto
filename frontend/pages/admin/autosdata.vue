<template>
  <v-app>
    <v-main>
      <autoscrud/>
    </v-main>
  </v-app>
</template>

<script>
import Autoscrud from '~/components/autoscrud.vue';

export default {
  layout: 'default1',
  components: Autoscrud
}
</script>