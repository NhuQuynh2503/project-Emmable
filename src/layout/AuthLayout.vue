<template>
    <div>
        <Header/>
        
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

</style>