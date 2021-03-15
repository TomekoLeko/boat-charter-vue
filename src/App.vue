<template>
  <v-app>
<nav-bar />
    <v-main class="main-margin">
    <router-view />
    </v-main>
<my-footer />
  </v-app>
</template>

<script>

import NavBar from './components/NavBar'
import MyFooter from './components/Footer'

export default {
  name: 'App',

  components: {
    NavBar,
    MyFooter
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.main-margin {
  margin: 2vw;
}
</style>
