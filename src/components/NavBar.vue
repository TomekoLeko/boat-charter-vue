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
          <v-tab>LINK 1</v-tab>
          <v-tab>LINK 2</v-tab>
          <v-tab>LINK 3</v-tab>
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
.link:hover {
    color:rgba(220,220,220);

}

</style>
