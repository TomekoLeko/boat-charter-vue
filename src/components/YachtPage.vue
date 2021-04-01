<template>
<div>
  <yacht-gallery class="mb-10"> </yacht-gallery>
  <div class="title-container">
     <h1>{{yacht.title}}</h1>
<h2>{{yacht.subtitle}}</h2>
    <div class="booking-button">
    <booking :dialog="booking"  :yacht="yacht" text="BOOK THIS BOAT"  >
    </booking>
  </div>     
  </div>
  <v-row class="pa-10">
    <v-col cols="7">
    <h2 style="display:inline;">More information: </h2>
    <p  v-for="paragraph in 5" :key="paragraph">
      {{yacht.text}}
    </p>
    </v-col>
  <v-col cols="5">
  <v-card
    class="mx-auto"
    tile
  >
    <v-list flat>
      <v-subheader>SPECIFICATION:</v-subheader>
        <v-list-item
        >
          <v-list-item-icon>
        <v-icon>
          mdi-account-group
        </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Up to {{yacht.ppl}} people.</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
                <v-list-item
        >
          <v-list-item-icon>
        <v-icon>
          mdi-door
        </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{yacht.bedrooms}} bedrooms on this boat.</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-list>
  </v-card>
  <v-card
    class="mx-auto"
    tile
  >
    <v-list flat>
      <v-subheader>WHAT IS INCLUDED?</v-subheader>
        <v-list-item
          v-for="(item, i) in 4"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon>
               mdi-square-rounded</v-icon>
  
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>hardcoded element</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-list>
  </v-card>
    <v-card
    class="mx-auto"
    tile
  >
    <v-list flat>
      <v-subheader>ADDITIONAL SERVICES:</v-subheader>
        <v-list-item
         v-for="item in yacht.additional" :key="item"
        >
          <v-list-item-icon>
            <v-icon>
               mdi-square-rounded</v-icon>
  
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{item.name}} - {{item.price}}€</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-list>
  </v-card>
     </v-col>
  </v-row> 
</div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import YachtGallery from './YachtGallery.vue';
import Booking from './Booking'
Vue.use(VueAxios,axios)

  export default {

components: {YachtGallery, Booking},
 data () {
      return {  
    yacht: {},
    carouselIndex: 0,
      }
      },
    mounted: function () {
        let url = 'https://boat-charter-vue-default-rtdb.europe-west1.firebasedatabase.app/boats/' + this.$route.params.id + '.json'
        Vue.axios.get(url).then((resp)=>{
        console.log(resp.data)
        this.yacht = resp.data
    })   
},
  }

</script>

<style scoped>
.title-container {
  position: relative;
}
.title-container h1 {
text-align: center
}
.title-container h2 {
  text-align: center
}
.booking-button {
  position: absolute;
  top: 2vw;
  right: 4vw;
}
</style>
