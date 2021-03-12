<template>
  <v-app>
    <nav-bar />
    <v-main>
    <carousel />  
    </v-main>
  </v-app>
</template>

<script>
import Carousel from './components/Carousel';
import NavBar from './components/NavBar';

export default {
  name: 'App',

  components: {
    Carousel,
    NavBar,

  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
</style>
