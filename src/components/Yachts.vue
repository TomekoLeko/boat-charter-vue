<template>
<div class="main">
<h1> Our Yachts </h1>
<test />
<div class="d-flex flex-wrap justify-space-around">
  <div v-for="yacht in yachts" :key="yacht">

  <yacht-card :cardTitle="yacht.title" :cardSubtitle="yacht.subtitle" :cardText="yacht.text" />
  </div>
</div>

</div>
</template>

<script>
import Test from './Test';
import YachtCard from './YachtCard';
  export default {
    name: 'Yachts',
    components: {
    Test,
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
       img: '"../assets/yacht-2.jpg"',
       },
      {
       title: 'Yacht 2',
       subtitle: 'Subtitle of yacht nr 2',
       text: `This is Yacht 2 description, Lorem ipsum dolor sit, amet consectetur adipisicing
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, perferendis tenetur dolorem officia perspiciatis
       aut pariatur officiis cumque, ipsa eius, eum nam debitis obcaecati voluptates assumenda. Sit minus omnis cupiditate!
       Odit mollitia incidunt deleniti quas reiciendis,`,
       img: '"../assets/yacht-1.jpg"',
       },
       {
       title: 'Yacht 3',
       subtitle: 'Subtitle of yacht nr 3',
       text: `This is Yacht 3 description, Lorem ipsum dolor sit, amet consectetur adipisicing
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, perferendis tenetur dolorem officia perspiciatis
       aut pariatur officiis cumque, ipsa eius, eum nam debitis obcaecati voluptates assumenda. Sit minus omnis cupiditate!
       Odit mollitia incidunt deleniti quas reiciendis,`,
       img: '"../assets/yacht-2.jpg"'
       },
      {
       title: 'Yacht 4',
       subtitle: 'Subtitle of yacht nr 4',
       text: `This is Yacht 4 description, Lorem ipsum dolor sit, amet consectetur adipisicing
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, perferendis tenetur dolorem officia perspiciatis
       aut pariatur officiis cumque, ipsa eius, eum nam debitis obcaecati voluptates assumenda. Sit minus omnis cupiditate!
       Odit mollitia incidunt deleniti quas reiciendis,`,
       img: '"../assets/yacht-1.jpg"'
       }, 
       {
       title: 'Yacht 5',
       subtitle: 'Subtitle of yacht nr 5',
        text: `This is Yacht 5 description, Lorem ipsum dolor sit, amet consectetur adipisicing
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, perferendis tenetur dolorem officia perspiciatis
       aut pariatur officiis cumque, ipsa eius, eum nam debitis obcaecati voluptates assumenda. Sit minus omnis cupiditate!
       Odit mollitia incidunt deleniti quas reiciendis,`,
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
