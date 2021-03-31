<template>
<div>
  <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="100%"
  >
      <v-expand-transition >
      <v-card
        v-if="model != null"
      >
  <v-carousel hide-delimiters v-model="carouselIndex" width="100%">
    <v-carousel-item
      v-for="(item,i) in items" 
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
      </v-card >
    </v-expand-transition>
    <v-slide-group
      v-model="model"
      class="pa-4"
      show-arrows
    >
      <v-slide-item
         v-for="(item,i) in items" 
      :key="i"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-4"
          :class="active ? 'blur' : ''"
          height="200"
          width="400"
          @click="toggle(); changeSlide(i) "
         :style="{ backgroundImage: 'url(' + item.src + ')',backgroundSize:'cover' }"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</div>

</template>


<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios)

  export default {
 data () {
      return {  
    yacht: {},
    model: null,
    carouselIndex: 0,
          items: [
          {
            src: require('../assets/yacht-2.jpg'),
          },
          {
            src: require('../assets/yacht-1.jpg'),
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],

      }
      },
      methods: {
          changeSlide(index) {
            this.carouselIndex = index
          }
      },
  }
</script>

<style scoped>
.blur {
  filter: grayscale(60%);
}
</style>