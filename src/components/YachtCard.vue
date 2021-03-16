<template>
  <v-card
    class="mx-auto mt-10"
    max-width="344"
  >
  <div class="img-container">
    <v-img
      src="../assets/yacht-2.jpg"
      height="200px"
    ></v-img>
    <div class="booking-button">
   <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
           <v-btn
        class="ma-2"
        color="primary"
        dark
        v-bind="attrs"
          v-on="on"
      >
        <v-icon dark>
          mdi-calendar-cursor
        </v-icon>
      </v-btn>
      </template>
      <span>Book this boat</span>
    </v-tooltip>
  </div>
  </div>
    

    <v-card-title>
      {{cardTitle}}
    </v-card-title>

    <v-card-subtitle>
      {{cardSubtitle}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Read more
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{cardText}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>


<script>
  export default {
  props: ['cardTitle','cardSubtitle', 'cardText'],
    data: () => ({
      show: false,
    }),
  }
</script>


<style scoped>
.img-container {
  position: relative;
}
.booking-button {
  position: absolute;
  top: 0.5em;
  right: 0.5em;

}

</style>