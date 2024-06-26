<template>
  <div>
    <swiper class="custom-swiper"
        :slides-per-view="1" 
        :space-between="1"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide><img src="https://static.thedevkit.com/2018/01/weekend-sale-banner-1024x267.png" alt=""></swiper-slide>
        <!-- <swiper-slide><img src="https://intphcm.com/data/upload/banner-thoi-trang-nu-dep.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="https://bizweb.dktcdn.net/100/443/867/themes/897087/assets/banner_col_1.png?1695987003794" alt=""></swiper-slide> -->
        
    </swiper>
  </div>
</template>
<script setup>
    // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
  const onSwiper = (swiper) => {
    console.log(swiper);
  };
  const onSlideChange = () => {
    console.log('slide change');
  };
</script>
<style scoped>
  .custom-swiper {
    padding: 10px 150px;
  }

  .custom-swiper .swiper-slide img {
    width: 100%;
    height:320px;
    object-fit: cover;
    overflow: hidden;
  }
</style>