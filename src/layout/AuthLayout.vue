<template>
    <div>
        <Header/>
        <div class="spacer"></div>
        <slot></slot>
        <Footer/>
    </div>
    
    
</template>
<script setup>
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import banner from '@/components/home/banner.vue';
import Home from '@/pages/Home.vue';
import { ref } from 'vue';
</script>
<style scoped>
    .spacer {
         height: 120px; /* Khoảng cách 20px giữa Header và nội dung */
    }
</style>