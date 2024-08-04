<template>
    <component :is="layout">
        <RouterView/>
    </component>
</template>
<script setup>
import AuthLayout from './layout/AuthLayout.vue';
import UnAuthLayout from './layout/UnAuthLayout.vue';
import { ref,onBeforeMount, computed } from 'vue';

import { useRoute } from 'vue-router';
const route = useRoute()
import { useRouter } from 'vue-router';
const router = useRouter()
    const layout = computed(() => {
        if (route.path === '/login' || route.path === '/register' || route.path === '/resetpassword' || route.path === '/forgotpassword') {
            return UnAuthLayout;
        }
        else{
            return AuthLayout;
        }
    })
    onBeforeMount(() => {
        console.log("route",route);
    })
</script>
<style scoped>

</style>