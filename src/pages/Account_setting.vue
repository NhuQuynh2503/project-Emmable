
<template>
    <section id="setting">
       <div class="setting">
            <div class="left">
                <h2>Settings Page</h2>
                <form class="form" action="">
                    <div class="nav">
                        <p>Personal Information</p>
                    </div>
                    <div class="information-container">
                        <div class="name-info">
                            <div class="form-group">
                                <label for="fullName">Họ tên</label>
                                <input type="text" id="fullName" value="" >
                            </div>
                            <div class="form-group">
                                <label for="phoneNumber">Số điện thoại</label>
                                <input type="text" id="phoneNumber" value="" >
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="emailAddress">Giới tính</label>
                            <div class="gender-options">
                                <label>
                                    <input type="radio" name="gender" value="male">
                                    Nam
                                </label>
                                <label>
                                    <input type="radio" name="gender" value="female">
                                    Nữ
                                </label>
                                <label>
                                    <input type="radio" name="gender" value="other">
                                    Khác
                                </label>
                            </div>
                            
                        </div>
                        <div class="form-group">
                            <label for="emailAddress">Email </label>
                            <input type="text" id="emailAddress" value="" >
                        </div>
                        <div class="form-group">
                            <label for="address">Address</label>
                            <input type="text" id="address" value="" >
                        </div>
                        <div class="form-group">
                            <label for="bio">BIO</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div class="btn">
                            <button class="cancel">Cancel</button>
                            <button class="save">Save</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="right">
                <div class="pages">
                    <h4><a class="pages-dashboard" href="">Dashboard</a></h4>
                    <span>/</span>
                    <h4><a class="pages-setting" href="">Setting</a></h4>
                </div>
                <form class="form-photo" action="">
                    <div class="nav">
                        <p>Personal Information</p>
                    </div>
                    <div class="edit-wrapper">
                        <div class="edit">
                            <div class="image"><img src="https://cdn-icons-png.freepik.com/512/219/219986.png" alt=""></div>
                            <div class="edit-photo">
                                <p class="edit-title">Edit your photo</p>
                                <a class="delete" href="#">Delete</a>
                                <a class="update" href="#">Update</a>
                            </div>
                        </div>
                        <div class="box">
                            <div class="upload-area">
                                <div class="icon"><Icon class="icon-upload" icon="bi:upload"></Icon></div>
                                <p><a href="">Click to upload</a> or drag and drop</p>
                                <p>SVG, PNG, JPG or GIF</p>
                                <p>(max, 800 X 800px)</p>
                            </div>
                        </div>
                        <div class="btn">
                            <button class="cancel">Cancel</button>
                            <button class="save">Save</button>
                        </div>
                    </div>
                </form>
            </div>
       </div>
    </section>
</template>
  
<script setup>

      
    

</script>
  
<style scoped>
    .setting{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 10px 150px;
    }
    .setting .left{
        width: 700px;
        height: auto;
    }
    .left h2{
        font-size: 30px;
        color: #000;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .left .form{
        height: 720px;
        border-radius: 10px;
    }
    .nav{
        border-bottom: 1px solid #c6c5c5;
    }
    .nav p{
        margin: 20px;
        font-size: 20px;
    }
    .information-container{
        margin: 20px;
    }
    .information-container .name-info{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .form-group {
        margin-bottom: 15px;
    }
    .form-group label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }
    .form-group input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f1f5ff;
    }
    .form-group .gender-options {
        display: flex;
        align-items: center; 
    }
    .form-group .gender-options label {
        display: flex;
        align-items: center; 
        margin-right: 20px;
        cursor: pointer;
    }
    .form-group .gender-options input[type="radio"] {
        margin-right: 5px; 
        cursor: pointer;
    }
    .icon {
        display: inline-block;
        margin-right: 5px;
    }
    .form-group textarea{
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f1f5ff;
    }
    .btn .cancel{
        padding: 15px 30px;
        background: none;
        border: 1px solid #c6c5c5;
        border-radius: 5px;
        margin-right: 20px;

    }
    .btn{
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
    .btn .save{
        padding: 15px 30px;
        background: rgb(33, 33, 211);
        border: 1px solid #c6c5c5;
        border-radius: 5px;
        color: #fff;
    }
    .btn .save:hover{
        background: rgb(69, 69, 216);
    }
    /* right */
    .right{
        width: 400px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-end; /* Căn phần tử sang phải */
    }
    .right .pages{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 0; /* Đảm bảo căn thẳng hàng với tiêu đề bên trái */
    }
    .pages .pages-dashboard,.pages-setting{
        font-size: 20px;
        text-decoration: none;
        color: #000;
    }
    .pages .pages-dashboard{
        margin-right: 5px;
    }
    .pages .pages-setting{
        margin-left: 5px;
    }
    .pages span{
        font-size: 20px;
    }
    .form-photo{
        width: 100%;
        height: 460px;
        border-radius: 10px;
        border: 1px solid #ccc;
        margin-top: 30px;
    }
    .edit-wrapper{
        margin: 20px;
    }
    .edit{
        display: flex;
        align-items: center;
    }
    .edit .image img{
        width:50px ;
        height: 50px;
        margin-right: 20px;
    }
    .edit-photo .edit-title{
        font-size: 18px;
        color: #000;
    }
    .edit-photo .delete{
        text-decoration: none;
        margin-right: 20px;
        color: #5f5e5e;
        font-weight: 600;
    }
    .edit-photo .delete:hover{
        color: #412ac5;
    }
    .edit-photo .update{
        text-decoration: none;
        color: #5f5e5e;
        font-weight: 600;
    }
    .edit-photo .update:hover{
        color: #412ac5;
    }
    .box{
        margin: 20px 0;
        width: 100%;
        height: 200px;
        border: dashed;
        border-color: #412ac5;
        border-width: 2px;
    }
    .upload-area {
        text-align: center;
    }
    .upload-area p {
        margin: 10px 0;
    }
    .upload-area a {
        text-decoration: none;
        color: #007BFF;
    }
    .icon{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid rgb(184, 183, 183);
        margin-top: 10px;
    }
    .icon-upload {
        font-size: 20px;
        color: #007BFF;
        margin-top: 7px;
    }
    @media (max-width: 576px){
        body{
            font-size: 16px;
        }
        .setting{
            display: block;
        }
        .setting .left{
            width: 300px;
        }
        .setting .right{
            width: 300px;
            margin-top: 20px;
            height: auto;
        }
    }
    /* @media (max-width: 768px){
        body{
            font-size: 16px;
        }
        .setting{
            display: flex;
            justify-content: space-between;
        }
        .setting .left{
            width: 300px;
        }
        .setting .right{
            width: 300px;
            margin-top: 5px;
            height: auto;
            margin-left: 40px;
        }
    } */
</style>