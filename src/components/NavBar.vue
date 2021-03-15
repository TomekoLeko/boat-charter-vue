<template>
    <v-app-bar
      app
      class="blue"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Boat Charter"
          class="shrink mr-2"
          contain
          src="../assets/logo2.png"
          transition="scale-transition"
          width="80"
        />
      </div>
      <v-tabs align-with-title>
          <v-tab to="/home">Home</v-tab>
          <v-tab to="/yachts">Yachts</v-tab>
        </v-tabs>

    </v-app-bar>
</template>


<script>
  export default {
    name: 'NavBar',
 data () {
      return {
     
      }
    },
  }
</script>

<style scoped>
a {
  text-decoration: none;
}

.link:hover {
    color:rgba(220,220,220);

}

</style>
