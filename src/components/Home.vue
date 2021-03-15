<template>
<div class="home">
<carousel />
<test class="my-test" />
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

.my-test {
 padding: 2vw 
}
</style>
