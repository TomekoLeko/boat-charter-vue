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
    <booking :dialog="booking"  :cardTitle="cardTitle" :cardSubtitle="cardSubtitle" :cardText="cardText" :cardPpl="cardPpl" :cardBedrooms="cardBedrooms" :cardPrice="cardPrice" :cardPort="cardPort" :cardAdditional="cardAdditional"  >

    </booking>
  </div>
    <div class="card-title">
    <v-card-title>
      {{cardTitle}} 
    </v-card-title>

    <v-card-subtitle>
      {{cardSubtitle}} 
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
        :content="cardBedrooms"
        :value="cardBedrooms"
        color="primary"
        overlap
      >
        <v-icon>
          mdi-door
        </v-icon>
      </v-badge> 

   </div>
      </template>
      <span>{{cardBedrooms}} bedrooms on this boat.</span>
    </v-tooltip>
      <v-spacer></v-spacer>
     <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
   <div    
   v-bind="attrs"
   v-on="on">
               <v-badge
        :content="cardPpl"
        :value="cardPpl"
        color="primary"
        overlap
      >
        <v-icon>
          mdi-account-group
        </v-icon>
      </v-badge> 

   </div>
      </template>
      <span>Place for up to {{cardPpl}} people on this boat.</span>
    </v-tooltip>
      <v-spacer></v-spacer>
    <div  class="card-price">
      {{cardPrice}}€ / day
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
          {{cardText}}
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
  props: ['cardTitle','cardSubtitle', 'cardText', 'cardPpl', 'cardBedrooms', 'cardPrice', 'cardPort', 'cardAdditional'],
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