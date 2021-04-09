<template>
    <div>
    <v-sheet
        class="mx-auto mb-10"
        elevation="2"
        max-width="98vw"
    >
      <h2>Might also interest you:</h2>
        <v-slide-group
        class="pa-4"
        show-arrows
        >
        <v-slide-item
           v-for="yacht in filteredYachts" :key="yacht.id"
           class="mr-8"
        >
            <yacht-card  :yacht="yacht" />
        </v-slide-item>
        </v-slide-group>
    </v-sheet>
    </div>
</template>

<script>

import YachtCard from './YachtCard';

  export default {
    components: { YachtCard,},
    data: () => ({

      filteredYachts: null, 
    }),
    props: ['currentYachtId'],
    mounted: function () {
      console.log("CardSlider mounted")
        if(this.$store.state.filteredYachts) {
          this.filteredYachts = this.$store.state.filteredYachts
        } 
},
  }
</script>x

<style scoped>
 h2 {
text-align: center;
padding-top: 2em;
}
</style>
