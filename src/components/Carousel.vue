    <template>
  <v-carousel
    cycle
    height="70vh"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      class="carousel"
    >
    <div class="slide-text">{{item.text}}</div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name: 'Carousel',
 data () {
      return {
                  items: [
          {
            src: require("@/assets/carousel-1.jpg"),
            text: 'Slide nr 1',
          },
          {
            src: require("@/assets/carousel-2.jpg"),
            text: 'Slide nr 2'
          },
        ],
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
      }
    },
  }
</script>

<style scoped>
.carousel {
    position: relative;
}
.slide-text {
 width:auto;
 height:auto;
 color: rgba(255, 255, 255, 0.639);
 font-size:10vw;
 text-shadow: 4px 4px 7px rgb(97, 114, 121);
 position: absolute;
 right:0;
 bottom:0;
}

</style>
