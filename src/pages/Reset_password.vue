<template>
    <div id="resetpassword-wrapper">
        <div class="resetpassword">
            <div class="content">
                <h2>Reset Password</h2>
               
            </div>
            <div class="group">
                <p>Please create a new password</p>
                <input type="password" name="" v-model="password" id="" placeholder="Create new password">
                <input type="password" name="" v-model="confirm_password" id="" placeholder="Confirm your password">
                <input type="text" name="" v-model="reset_token" id="" placeholder="Reset token">
                <button @click="onResetPassword" class="btn-change">Change</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { resetPasswordApi } from '@/services/auth';
import router from '@/router';
    const password = ref('')
    const confirm_password = ref('')
    const reset_token = ref('')
    async function onResetPassword(){
        try {
            await resetPasswordApi(password.value, confirm_password.value, reset_token.value)
            router.push("/")
        } catch (error) {
            console.log("Reset token sai");
        }
    }
</script>
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
    #resetpassword-wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        top: 0;
        left: 0;
        right: 0;
        background: rgb(97, 97, 220);
        position: fixed;
        align-items: center;
        justify-content: center;
    }
    .resetpassword{
        width: 400px;
        height: 350px;
        border-radius: 10px;
        border: 1px solid rgb(224, 222, 222);
        background: #fff;
    }
    .resetpassword .content{
        text-align: center;
        margin-top: 10px;
    }
    .content h2{
        font-size: 30px;
        color: #000;
    }
    
    .group{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .group p{
        width: 80%;
        color: rgb(21, 122, 8);
        padding: 8px;
        background-color: rgb(118, 181, 118);
        margin: 10px 0;
        border-radius: 5px;
        border: none;
        text-align: center;
    }
    .group input[type="password"]{
        width: 80%;
        padding: 8px;
        margin: 10px 0;
        border-radius: 5px;
        border:  1px solid #c7c5c5;
    }
    .group input[type="text"]{
        width: 80%;
        padding: 8px;
        margin: 10px 0;
        border-radius: 5px;
        border:  1px solid #c7c5c5;
    }
    .group .btn-change{
        width: 80%;
        padding: 8px;
        margin: 10px 0;
        color: #fff;
        font-size: 20px;
        border-radius: 5px;
        border:  1px solid #c7c5c5;
        background: rgb(77, 77, 211);
        border: none;
    }
</style>