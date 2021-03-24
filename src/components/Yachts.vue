<template>
<div>
<div class="filter-banner">
  <v-img class="map-banner-img" src="../assets/banner-map.png" />
  <div id="sotogrande">
          <v-checkbox
              v-model="sotogrande"
              label="Sotogrande"
              hide-details
            ></v-checkbox>
  </div>
    <div id="estepona">
          <v-checkbox
              v-model="estepona"
              label="Estepona"
              hide-details
            ></v-checkbox>
  </div>
      <div id="puerto-banus">
          <v-checkbox
              v-model="banus"
              label="Puerto Banus"
              hide-details
            ></v-checkbox>
  </div>
        <div id="marbella">
          <v-checkbox
              v-model="marbella"
              label="Marbella"
              hide-details
            ></v-checkbox>
  </div>
<div class="filters-container">
      <v-row>
      <v-col cols="2">
        <v-text-field
          label="For at least"
          suffix="people"
          v-model="howManyPeople"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-range-slider
        :hint="priceRangeHint"
        max="2000"
        min="0"
        step="100"
        v-model="priceRange"
        :thumb-color="primary"
        :thumb-size="50"
        thumb-label="always"
        >
          <template v-slot:thumb-label="{ value }">
            {{ value }}€
          </template>
      </v-range-slider>
      </v-col>

    </v-row>
</div>
</div>
<div class="main-margin">

  <!-- <div>
<h1> Our Yachts </h1>
Yachts available.
  </div> -->



    
<div class="d-flex flex-wrap justify-space-around">
  <div v-for="yacht in filteredYachts" :key="yacht">
  <yacht-card :cardTitle="yacht.title" :cardSubtitle="yacht.subtitle" :cardText="yacht.text" :cardPpl="yacht.ppl" :cardBedrooms="yacht.bedrooms" :cardPrice="yacht.price" :cardPort="yacht.port" />
  </div>
</div>

</div>
</div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios)
import YachtCard from './YachtCard';
  export default {
    name: 'Yachts',
    components: {
    YachtCard,
       
    },
 data () {
      return {  
     sotogrande: true,
     marbella: true,
     estepona: true,
     banus: true,   
     howManyPeople: null,
     priceRange: [0, 2000],
     filteredYachts: null,    
     yachts: []    
      }
    },
    mounted: function () {
        Vue.axios.get('https://boat-charter-vue-default-rtdb.europe-west1.firebasedatabase.app/boats.json').then((resp)=>{
        console.log(resp.data)
        this.yachts = resp.data
        this.filteredYachts = this.yachts
      })   
},
  computed: {
    priceRangeHint: function () {

      return 'Price from ' +  this.priceRange[0] + '€ to ' + this.priceRange[1] + '€'
    }
  },
    methods: {
       filterYachts() {
        this.filteredYachts = this.yachts.filter(yacht => yacht.ppl > this.howManyPeople) 
        this.filteredYachts = this.filteredYachts.filter(yacht => yacht.price > this.priceRange[0])
        this.filteredYachts = this.filteredYachts.filter(yacht => yacht.price < this.priceRange[1])
        if(!this.banus) {
        this.filteredYachts = this.filteredYachts.filter(yacht => yacht.port != 'banus')
        }
        if(!this.marbella) {
        this.filteredYachts = this.filteredYachts.filter(yacht => yacht.port != 'marbella')
        }
        if(!this.estepona) {
        this.filteredYachts = this.filteredYachts.filter(yacht => yacht.port != 'estepona')
        }
        if(!this.sotogrande) {
        this.filteredYachts = this.filteredYachts.filter(yacht => yacht.port != 'sotogrande')
        }
        
       }
     },
     watch: {
    howManyPeople: {
      handler() {
      this.filterYachts()
      } 

    },
     priceRange: {
      handler() {
      this.filterYachts()
      }
    },
    banus: {
      handler() {
      this.filterYachts()
      }
    },
    estepona: {
      handler() {
      this.filterYachts()
      }
    },
    marbella: {
    handler() {
      this.filterYachts()
      }
     },
    sotogrande: {
    handler() {
      this.filterYachts()
      }
     },
  },
  }
</script>
<style scoped>
.card-right-margin {
  margin-right: 2vw;
}
.filter-banner {
  position: relative;
  width: 100%;
  /* background-image: url("../assets/banner-map.png"); */

}
.filters-container {
  width: 90%;
  position: absolute;
  top: 50%;
  left: 30%;
}
#sotogrande {
  position: absolute;
  bottom: 15%;
  left: 5%;
}
#estepona {
  position: absolute;
  top: 10%;
  left: 30%;
}
#puerto-banus {
  position: absolute;
  top: 4%;
  left: 60%;
}
#marbella {
  position: absolute;
  top: 3%;
  left: 76%;
}
/* .map-banner-img {
  width: 100%;
} */
</style>
