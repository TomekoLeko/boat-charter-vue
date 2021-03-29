<template>
  <v-row>
    <v-col
      cols="12"
      sm="12"
    >
      <v-card>
      <v-date-picker 
        v-model="dates"
        range
        full-width
      ></v-date-picker>
      </v-card>
      <v-text-field
        v-model="dateRangeText"
        label="Date range"
        prepend-icon="mdi-calendar"
        readonly
        class="mt-10"
      ></v-text-field>
    </v-col>
    <v-col
      cols="12"
      sm="12"
    >

      <!-- model: {{ dates }} -->
    </v-col>
  </v-row>
</template>

<script>

  export default {  
    name: 'Calendar',
    data: () => ({
    calendarDates: null
    }),
    methods: {
      dateForCalendar(days) {
        let date = new Date();  
        date.setDate(date.getDate() + days);
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = date.getFullYear();
        date = yyyy + '-' + mm + '-' + dd;
        return date;
      },
    },
    computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    dates: {
      get () {
        if(this.calendarDates===null){
          return [this.dateForCalendar(7), this.dateForCalendar(14)]
        }
        else {
          return this.calendarDates
        }
    
        },
        set (val) {
            this.calendarDates = val            
        },
      }
    },
  }
  
</script>

<style scoped>
</style>