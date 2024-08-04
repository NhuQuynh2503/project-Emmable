<script setup>
import { ref } from 'vue';
import { loginApi } from '@/services/auth';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const email = ref("")
const password = ref("")

const router = useRouter()
// async await la gi
async function onLogin() {
    try {
        await loginApi(email.value, password.value)
        toast.success("Đăng nhập thành công!", { position: "top-right",autoClose: 700000});
        router.push("/")
    } catch (error) {
        toast.error("Đăng nhập thất bại!", { position: "top-right",autoClose: 700000 });
        console.log("login sai roi")
    
    }
}

</script>
<template>
    <div class="login-wrapper">
        <div class="login">
            <div class="login-left">
                <img  src="https://static.vecteezy.com/system/resources/previews/005/879/539/non_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg" alt="">
            </div>
            <div class="login-right">
                <h2>Login</h2>
                <form @submit.prevent="onLogin">
                    <div class="form-group">
                        <label for="">Email</label>
                        <input type="email" v-model="email" name="" id="" required>
                    </div>
                    <div class="form-group">
                        <label for="">Password</label>
                        <input type="password" v-model="password" name="" id="" required>
                    </div>
                    <div class="form-group-check">
                        <input type="checkbox" name="" id="">
                        <p>Remember Me</p>
                        <p class="right">Forgot password ?<RouterLink class="click" to="/forgotpassword">Click here</RouterLink></p>
                    </div>
                    <button type="submit">Login</button>
                    
                    <div class="icon">
                        <Icon class="icon-facebook" icon="entypo-social:facebook"></Icon>
                        <Icon class="icon-twitter" icon="entypo-social:twitter-with-circle"></Icon>
                        <Icon class="icon-google" icon="f7:logo-googleplus"></Icon>
                        <Icon class="icon-linkedin" icon="entypo-social:linkedin-with-circle"></Icon>
                    </div>
                    <div class="register">
                        <p>Bạn đã có tài khoản? <RouterLink class="btn-register" to="/register">Register</RouterLink></p>
                    </div>
                </form>
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
    .login-wrapper{
        width: 100%;
        height: 100%;
        background: #97959527;
        position: fixed;
        display: flex;
        top: 0;
        right: 0;
        left: 0;
        justify-content: center;
        align-items: center;
    }
    .login{
        width: 820px;
        height: 420px;
        border: 1px solid rgb(224, 222, 222);
        display: flex;
        justify-content: space-between;
        border-radius: 10px;
        overflow: hidden;
    }
    h2{
        font-size: 40px;
        color: #000;
        text-align: center;
    }
    .login .login-left{
        width: 50%;
    }
    .login-left img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .login .login-right{
        width: 50%;
        height: 100%;
    }
    form{
        padding: 10px;
    }
    .form-group label{
        display: block;
        font-size: 15px;
    }
    .form-group input{
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 3px;
        font-size: 16px;
        margin-top: 5px;
    }
    .form-group-check{
        display: flex;
        margin-top: 10px;
    }
    .form-group-check p{
        margin-bottom: 5px;
    }
    button{
        width: 100%;
        height: 40px;
        margin-top: 20px;
        background: rgb(61, 61, 201);
        color: #fff;
        border: none;
        cursor: pointer;
        font-size: 18px;
    }
    p{
        margin-top: 5px;
    }
    .right{
        margin-left: 80px;
    }
    .icon{
        margin-top: 10px;
    }
    .icon{
        margin-left: 120px;
        
    }
    .icon .icon-facebook,.icon-twitter,.icon-google,.icon-linkedin{
        font-size: 30px;
        margin: 5px;
    }
    .register{
        text-align: center;
    }
    .btn-register{
        text-decoration: none;
        font-weight: 600;
    }
    .click{
        text-decoration: none;
        margin-left: 3px;
        font-weight: 600;
    }


    
</style>

