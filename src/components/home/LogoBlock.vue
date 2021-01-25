<template>
  <div class="logoBlock">
    <carousel :items-to-show="3">
    <slide v-for="slide in 16" :key="slide">
      <img class="banner" :src="`/imgs/home/${slide}.JPG`" alt="">
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
};
</script>