<template>
    <div class="register-wrapper">
        <div class="register">
            <div class="register-left">
                <img  src="https://static.vecteezy.com/system/resources/previews/005/879/539/non_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg" alt="">
            </div>
            <div class="register-right">
                <h2>Register</h2>
                <form @submit.prevent="onRegister" action="">
                    <div class="form-group">
                        <label for="">First Name</label>
                        <input type="text" v-model="name" name="" id="" required>
                    </div>
                    <div class="form-group">
                        <label for="">Email</label>
                        <input type="email" v-model="email" name="" id="" required>
                    </div>
                    <div class="form-group">
                        <label for="">Password</label>
                        <input type="password" v-model="password" name="" id="" required>
                    </div>
                    <div class="form-group">
                        <label for="">Confirm Password</label>
                        <input type="password" v-model="confirm_password" name="" id="" required>
                    </div>
                    <button class="btn-register">Register</button>
                    <p>Fast Signup With Your Favourite Social Profile</p>
                    <div class="icon">
                        <Icon class="icon-facebook" icon="entypo-social:facebook"></Icon>
                        <Icon class="icon-twitter" icon="entypo-social:twitter-with-circle"></Icon>
                        <Icon class="icon-google" icon="f7:logo-googleplus"></Icon>
                        <Icon class="icon-linkedin" icon="entypo-social:linkedin-with-circle"></Icon>
                    </div>
                    <div class="login">
                        <p>Bạn có tài khoản? <RouterLink class="btn-login" to="/login">Login</RouterLink> now</p>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>
<script setup>
import { ref } from 'vue';
import { registerApi } from '@/services/auth';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const router = useRouter()
const email = ref('')
const password = ref('')
const confirm_password = ref('')
const name = ref('')
// async function onRegister(){
//     if (password.value !== confirm_password.value) {
//         toast.error("Passwords do not match!", { autoClose: 1000 });
//         return;
//     }
//     try {
//         await registerApi()
//         router.push("/")
//     } catch (error) {
//         console.log("register sai roi")
//     }
// }
async function onRegister() {
    try {
        await registerApi(name.value,email.value,password.value,confirm_password.value)
        toast.success("Đăng nhập thành công!", { position: "top-right",autoClose: 7000});
        router.push("/")
       
    } catch (error) {
        toast.error("Đăng nhập thất bại!", { position: "top-right",autoClose: 7000 });
        console.log("register sai roi")
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
    .register-wrapper{
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
    .register{
        width: 800px;
        height: 530px;
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
    .register .register-left{
        width: 50%;
    }
    .register-left img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .register .register-right{
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
    button{
        width: 100%;
        height: 40px;
        margin-top: 20px;
        background: rgb(61, 61, 201);
        color: #fff;
        border: none;
        font-size: 18px;
    }
    p{
        margin-top: 5px;
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
    .btn-register{
        cursor: pointer;
        font-size: 20px;
    }
    .login{
        text-align: center;
    }
    .btn-login{
        text-decoration: none;
        font-weight: 600;
    }
</style>