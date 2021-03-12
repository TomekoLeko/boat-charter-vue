<template>
  <v-app>
    <nav-bar />
    <v-main>
    <carousel />  
    <test />
    <my-footer />
    </v-main>

  </v-app>
</template>

<script>
import Carousel from './components/Carousel';
import NavBar from './components/NavBar';
import MyFooter from './components/Footer';
import Test from './components/Test'

export default {
  name: 'App',

  components: {
    Carousel,
    NavBar,
    MyFooter,
    Test,

  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
</style>
