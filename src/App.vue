<template>
  <v-app>
    <v-app-bar
      app
      color="#03A9F4"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Boat Charter"
          class="shrink mr-2"
          contain
          src="./assets/logo2.png"
          transition="scale-transition"
          width="80"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
    <carousel />  
    </v-main>
  </v-app>
</template>

<script>
import Carousel from './components/Carousel';

export default {
  name: 'App',

  components: {
    Carousel
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
</style>
