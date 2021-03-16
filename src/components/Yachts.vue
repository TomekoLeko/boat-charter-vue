<template>
<div class="main-margin">
<h1> Our Yachts </h1>
Yachts available.
<div class="d-flex flex-wrap justify-space-around">
  <div v-for="yacht in yachts" :key="yacht">

  <yacht-card :cardTitle="yacht.title" :cardSubtitle="yacht.subtitle" :cardText="yacht.text" :cardPpl="yacht.ppl" :cardBedrooms="yacht.bedrooms" :cardPrice="yacht.price" />
  </div>
</div>

</div>
</template>

<script>
import YachtCard from './YachtCard';
  export default {
    name: 'Yachts',
    components: {
    YachtCard,
       
    },
 data () {
      return {
     yachts:[
       {
       title: 'Yacht 1',
       subtitle: 'Subtitle of yacht nr 1',
       text: `This is Yacht 1 description, Lorem ipsum dolor sit, amet consectetur adipisicing
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, perferendis tenetur dolorem officia perspiciatis
       aut pariatur officiis cumque, ipsa eius, eum nam debitis obcaecati voluptates assumenda. Sit minus omnis cupiditate!
       Odit mollitia incidunt deleniti quas reiciendis,`,
       bedrooms: 10,
       ppl: 25,
       price: 1000,
       img: '"../assets/yacht-2.jpg"',
       },
      {
       title: 'Yacht 2',
       subtitle: 'Subtitle of yacht nr 2',
       text: `This is Yacht 2 description, Lorem ipsum dolor sit, amet consectetur adipisicing
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, perferendis tenetur dolorem officia perspiciatis
       aut pariatur officiis cumque, ipsa eius, eum nam debitis obcaecati voluptates assumenda. Sit minus omnis cupiditate!
       Odit mollitia incidunt deleniti quas reiciendis,`,
       bedrooms: 1,
       ppl: 2,
       price: 900,
       img: '"../assets/yacht-1.jpg"',
       },
       {
       title: 'Yacht 3',
       subtitle: 'Subtitle of yacht nr 3',
       text: `This is Yacht 3 description, Lorem ipsum dolor sit, amet consectetur adipisicing
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, perferendis tenetur dolorem officia perspiciatis
       aut pariatur officiis cumque, ipsa eius, eum nam debitis obcaecati voluptates assumenda. Sit minus omnis cupiditate!
       Odit mollitia incidunt deleniti quas reiciendis,`,
      bedrooms: 1,
       ppl: 4,
       price: 500,
       img: '"../assets/yacht-2.jpg"'
       },
      {
       title: 'Yacht 4',
       subtitle: 'Subtitle of yacht nr 4',
       text: `This is Yacht 4 description, Lorem ipsum dolor sit, amet consectetur adipisicing
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, perferendis tenetur dolorem officia perspiciatis
       aut pariatur officiis cumque, ipsa eius, eum nam debitis obcaecati voluptates assumenda. Sit minus omnis cupiditate!
       Odit mollitia incidunt deleniti quas reiciendis,`,
         bedrooms: 2,
       ppl: 4,
       price: 100,
       img: '"../assets/yacht-1.jpg"'
       }, 
       {
       title: 'Yacht 5',
       subtitle: 'Subtitle of yacht nr 5',
        text: `This is Yacht 5 description, Lorem ipsum dolor sit, amet consectetur adipisicing
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, perferendis tenetur dolorem officia perspiciatis
       aut pariatur officiis cumque, ipsa eius, eum nam debitis obcaecati voluptates assumenda. Sit minus omnis cupiditate!
       Odit mollitia incidunt deleniti quas reiciendis,`,
      bedrooms: 4,
       ppl: 8,
       price: 100,
       img: '"../assets/yacht-2.jpg"'
       }
     ]
      }
    },
  }
</script>

<style scoped>
.card-right-margin {
  margin-right: 2vw;
}
</style>
