<template>
<div class="home">
<carousel />
<test class="main-margin" />
</div>
</template>


<script>
import Carousel from './Carousel';
import Test from './Test';
  export default {
    name: 'Home',
    components: {
    Carousel,
    Test,
    },
 data () {
      return {
     
      }
    },
  }
</script>

<style scoped>


</style>
