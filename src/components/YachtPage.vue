<template>
<div>
  <yacht-gallery> </yacht-gallery>
    <h1>{{yacht.title}}</h1>
Yacht page
<h2>yacht.subtitle</h2>
id test: {{this.$route.params.id}}

</div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import YachtGallery from './YachtGallery.vue';
Vue.use(VueAxios,axios)

  export default {

components: {YachtGallery},
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
</style>