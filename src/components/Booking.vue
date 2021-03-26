<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
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
       </v-btn>

      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Booking: {{cardTitle}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
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
        :max="cardPpl"
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
</v-col>
<v-col cols="12" sm="6">
    <v-autocomplete
        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
        label="Additional services"
        multiple
     ></v-autocomplete>
</v-col>
      
            </v-row>
          </v-container>
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
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    name: 'Booking',
    data: () => ({
    bookingPpl: 0,
    }),
   props: ['cardTitle','cardSubtitle', 'cardText', 'cardPpl', 'cardBedrooms', 'cardPrice', 'cardPort', 'dialog'],
     methods: {
             setBookingPpl() {
           this.bookingPpl = this.cardPpl;
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