<template>
  <v-app>
    <nav-bar />
    <v-main>
    <carousel />  
    <my-footer />
    </v-main>

  </v-app>
</template>

<script>
import Carousel from './components/Carousel';
import NavBar from './components/NavBar';
import MyFooter from './components/Footer';

export default {
  name: 'App',

  components: {
    Carousel,
    NavBar,
    MyFooter,

  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
</style>
