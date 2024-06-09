<template>
    <div class="register-wrapper">
        <div class="register">
            <div class="register-left">
                <img  src="https://static.vecteezy.com/system/resources/previews/005/879/539/non_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg" alt="">
            </div>
            <div class="register-right">
                <h2>Register</h2>
                <form action="">
                    <div class="form-group">
                        <label for="">First Name</label>
                        <input type="text" name="" id="" required>
                    </div>
                    <div class="form-group">
                        <label for="">Email</label>
                        <input type="email" name="" id="" required>
                    </div>
                    <div class="form-group">
                        <label for="">Password</label>
                        <input type="password" name="" id="" required>
                    </div>
                    <div class="form-group">
                        <label for="">Confirm Password</label>
                        <input type="password" name="" id="" required>
                    </div>
                    <button>Register</button>
                    <p>Fast Signup With Your Favourite Social Profile</p>
                    <div class="icon">
                        <Icon class="icon-facebook" icon="entypo-social:facebook"></Icon>
                        <Icon class="icon-twitter" icon="entypo-social:twitter-with-circle"></Icon>
                        <Icon class="icon-google" icon="f7:logo-googleplus"></Icon>
                        <Icon class="icon-linkedin" icon="entypo-social:linkedin-with-circle"></Icon>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>
<script setup>

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
        height: 500px;
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
</style>