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
    <booking :dialog="booking"  :yacht="yacht"  >

    </booking>
  </div>
    <div class="card-title">
    <v-card-title>
      {{yacht.title}} 
    </v-card-title>

    <v-card-subtitle>
      {{yacht.subtitle}} 
    </v-card-subtitle>
  </div>

  </div>
    
    <v-card-actions>
         <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
   <div    
   v-bind="attrs"
   v-on="on">
<v-badge
        :content="yacht.bedrooms"
        :value="yacht.bedrooms"
        color="primary"
        overlap
      >
        <v-icon>
          mdi-door
        </v-icon>
      </v-badge> 

   </div>
      </template>
      <span>{{yacht.bedrooms}} bedrooms on this boat.</span>
    </v-tooltip>
      <v-spacer></v-spacer>
     <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
   <div    
   v-bind="attrs"
   v-on="on">
               <v-badge
        :content="yacht.ppl"
        :value="yacht.ppl"
        color="primary"
        overlap
      >
        <v-icon>
          mdi-account-group
        </v-icon>
      </v-badge> 

   </div>
      </template>
      <span>Place for up to {{yacht.pl}} people on this boat.</span>
    </v-tooltip>
      <v-spacer></v-spacer>
    <div  class="card-price">
      {{yacht.price}}€ / day
    </div>

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
          {{yacht.text}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>


<script>
import Booking from './Booking';

  export default {
       components: {  
    Booking,
    },
  props: ['yacht'],
    data: () => ({
      show: false,
      booking: false,
    }),
  }
</script>


<style scoped>

.img-container {
  position: relative;
}
.booking-button {
  position: absolute;
  top: 2em;
  right: 2rem;
}
.card-title {
  position: absolute;
  top: 0.5em;
  left: 0.5em;
  color: white;
}

.card-price {
color: #2B81D6;
font-weight: bold;
}

</style>