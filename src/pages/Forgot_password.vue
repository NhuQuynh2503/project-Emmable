<script setup>
import { ref } from 'vue';
import { loginApi } from '@/services/auth';
import { useRouter } from 'vue-router';
import { forgotPasswordApi } from '@/services/auth';
const router= useRouter()
const email = ref('')
    async function onForgot(){
        try {
            await forgotPasswordApi(email.value)
            router.push("/")
        } catch (error) {
            console.log("Forgot Password loi");
        }
    }

</script>
<template>
    <div class="forgotpassword-wrapper">
        <div class="forgotpassword">
            <div class="content">
                <h2>Forgot Password</h2>
                <p>Enter your email address</p>
            </div>
            <div class="group">
                <input type="email" name="" id="" v-model="email" placeholder="Enter email address">
                <button @click="onForgot" class="btn-continue">Continue</button>
            </div>
        </div>
    </div>

</template>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        margin: 0;
        padding: 0;
    }
    .forgotpassword-wrapper{
        width: 100%;
        height: 100%;
        background: rgb(97, 97, 220);
        position: fixed;
        display: flex;
        top: 0;
        right: 0;
        left: 0;
        justify-content: center;
        align-items: center;
    }
    .forgotpassword{
        width: 400px;
        height: 220px;
        border: 1px solid rgb(224, 222, 222);
        background: #fff;
        box-shadow: 0.5px 2px 10px rgba(167, 167, 167, 0.1);
        border-radius: 10px;
    }
    .forgotpassword h2{
        margin-top: 10px;
        font-size: 30px;
        text-align: center;
        color: #000;
    }
    .forgotpassword p{
        text-align: center;
    }
    .forgotpassword .group{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .group input[type="email"]{
        padding: 8px;
        width: 80%;
        margin: 10px 0;
        border-radius: 5px;
        border:  1px solid #c7c5c5;
    }
    .group .btn-continue{
        padding: 8px;
        width: 80%;
        border-radius: 5px;
        border: none;
        font-size: 20px;
        color: #fff;
        background: rgb(77, 77, 211);
        margin-top: 10px;
        cursor: pointer;
    }
   
    
</style>