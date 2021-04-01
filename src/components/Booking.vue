<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="50vw"
    >
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
            {{text}}
       </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Booking: {{yacht.title}}</span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Email*"
                required
              ></v-text-field>
            </v-col>
           </v-row>
           <v-row>
            <v-col cols="6" >
           
              <calendar> </calendar>
          
            </v-col>
 <v-col cols="6" >
     <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-toolbar
      flat
      dense
    >
      <v-toolbar-title>
        <span class="subheading">How many people</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-card-text>
      <v-row
        class="mb-4"
        justify="space-between"
      >
        <v-col class="text-left">
          <span
            class="display-3 font-weight-light"
            v-text="bookingPpl"
          ></span>
          <span class="subheading font-weight-light mr-1">people</span>
        </v-col>
      </v-row>
      <v-slider
        v-model="bookingPpl"
        color="primary"
        track-color="grey"
        always-dirty
        min="0"
        :max="yacht.ppl"
      >
        <template v-slot:prepend>
          <v-icon
            :color="color"
            @click="decrement"
          >
            mdi-minus
          </v-icon>
        </template>
        <template v-slot:append>
          <v-icon
            :color="color"
            @click="increment"
          >
            mdi-plus
          </v-icon>
        </template>
      </v-slider>
    </v-card-text>
  </v-card>
  <v-autocomplete
      :items="additionalNames"
      label="Additional services"
      multiple
      class="mt-10"
    ></v-autocomplete>



 </v-col>
          </v-row>

          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Book it
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>

import Calendar from './Calendar'

  export default {
    name: 'Booking',
    components: {Calendar},
    data: () => ({
    bookingPpl: 0,
    }),
   props: ['yacht', 'dialog', 'text' ],
   computed: {
       additionalNames() {
           let names = []
           for(const additional of this.yacht.additional) {
               let namePlusPrice = additional.name +' ' + additional.price + '€'
               names.push(namePlusPrice)
           }
           return names
       }
   },
     methods: {
             setBookingPpl() {
           this.bookingPpl = this.yacht.ppl;
           },
    decrement () {
        this.bookingPpl--
      },
      increment () {
        this.bookingPpl++
      },
  },
   mounted() {
           this.setBookingPpl()
  }

  }
  
</script>

<style scoped>
</style>