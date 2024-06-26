<template>
    <section id="update-product">
        <div class="update-product">
            <div class="left">
                <div class="heading"><h3>Update Product</h3></div>
                <form action="" class="form-update">
                    <div class="information-product-wrapper">
                        <div class="nav-update">
                            <p>Product Information</p>
                        </div>
                    </div>
                    <div class="information-product-container">
                            <div class="form-group">
                                <label for="tensp">Tên sản phẩm</label>
                                <input type="text" name="" id="tensp">
                            </div>
                            <div class="form-group-select">
                                <label for="">Loại sản phẩm</label>
                                <select name="" id="">
                                    <option value="new">Thời trang</option>
                                    <option value="out-of-stock">Mỹ phẩm</option>
                                    <option value="on-sale">Điện tử</option>
                                    <option value="on-sale">Gia dụng</option>
                                    <option value="on-sale">Văn phòng phẩm</option>
                                </select>
                            </div>
                            <div class="form-group-select">
                                <label for="">Tình trạng</label>
                                <select name="" id="">
                                    <option value="new">Mới</option>
                                    <option value="out-of-stock">Hết hàng</option>
                                    <option value="on-sale">Giảm giá</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="">Mô tả</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                    </div>
                    <div class="btn-update-product">
                        <button class="btn-cancel">Cancel</button>
                        <button class="btn-save">Save</button>
                    </div>
                </form>
            </div>
            <div class="right">
                <div class="nav-right">
                    <h4><a class="dashboard" href="#">Dashboard</a></h4>
                    <span>/</span>
                    <h4><a class="update" href="#">Update</a></h4>
                </div>
                <form action="" class="form-right-wrapper">
                    <div class="form-right">
                        <div class="nav-header-right">
                            <p>Product Information</p>
                        </div>
                    </div>
                    <div class="edit-update-product">
                        <div class="nav-edit">
                            <div class="image"><img src="https://cdn-icons-png.freepik.com/512/219/219986.png" alt=""></div>
                            <div class="editPhoto">
                                <p>Edit your photo</p>
                                <a href="#" class="delete">Delete</a>
                                <a href="#" class="update">Update</a>
                            </div>
                        </div>
                        <div class="box">
                            <div class="upload">
                                <div class="icon"><Icon class="icon-upload" icon="bi:upload"></Icon></div>
                                <p><a href="#">Click to upload</a> or drag and drop</p>
                                <p>SVG, PNG, JPG or GIF</p>
                                <p>(max, 800 X 800px)</p>
                            </div>
                        </div>
                        <div class="btn-right">
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
    .update-product{
        padding: 10px 150px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    .update-product .left{
        width: 700px;
        height: auto;
    }
    .heading h3{
        font-size: 25px;
        color: #000;
        font-weight: bold;
    }
    .form-update{
        height: 550px;
        border-radius: 10px;
        border: 1px solid #ccc;
        margin-top: 20px;
    }
    .information-product-wrapper{
        border-bottom: 1px solid #ccc;
    }
    .nav-update{
        margin: 20px;
    }
    .nav-update p{
        font-size: 20px;
    }
    .information-product-container{
        margin: 20px;
    }
    .information-product-container .form-group{
        margin-bottom: 15px;
    }
    .form-group label{
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }
    .form-group input{
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 5px;
        background: #f1f5ff;
        padding: 10px;
    }
    .form-group-select{
        margin-bottom: 15px;
    }
    .form-group-select label{
        font-weight: bold;
    }
    .form-group-select select{
        width: 150px;
        margin-left: 20px;
        font-size: 16px;
    }
    .form-group textarea{
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 5px;
        background: #f1f5ff;
        padding: 10px;
    }
    .btn-update-product{
        display: flex;
        justify-content: flex-end;
        margin: 20px;
    }
    .btn-update-product .btn-save,.btn-cancel{
        padding: 15px 30px;
    }
    .btn-update-product .btn-cancel{
        margin-right: 20px;
        background: none;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .btn-update-product .btn-cancel:hover{
        color: #fff;
        background: rgb(179, 21, 21);
    }
    .btn-update-product .btn-save{
        border: none;
        background: rgb(33, 33, 211);
        border-radius: 5px;
        color: #fff;
    }
    .btn-update-product .btn-save:hover{
        background: #007BFF;
    }
    /* right */
    .update-product .right{
        width: 400px;
        height: auto;
    }
    .nav-right{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 5px;
    }
    .nav-right .dashboard,.update{
        font-size: 20px;
        color: #000;
        text-decoration: none;
    }
    .nav-right .dashboard{
        margin-right: 10px;
    }
    .nav-right .update{
        margin-left: 10px;
    }
    .nav-right span{
        font-size: 20px;
    }
    .form-right-wrapper{
        border: 1px solid #ccc;
        border-radius: 10px;
        height: 500px;
        margin-top: 25px;
    }
    .form-right{
        border-bottom: 1px solid #ccc;
    }
    .nav-header-right{
        margin: 20px;
    }
    .nav-header-right p{
        font-size: 20px;
    }
    .edit-update-product{
        margin: 20px;
    }
    .nav-edit{
        display: flex;

    }
    .nav-edit img{
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
    .editPhoto{
        margin-left: 10px;
    }
    .editPhoto a{
        text-decoration: none;
        font-size: 15px;
        color: #5f5e5e;
        font-weight: 600;
    }
    .editPhoto .update{
        margin-left: 10px;
    }
    .editPhoto .update:hover{
        color: rgb(33, 33, 211);
    }
    .editPhoto .delete:hover{
        color: rgb(33, 33, 211);
    }
    .box{
        margin: 20px 0;
        border: dashed;
        border-width: 2px;
        border-color: rgb(33, 33, 211);
        width: 100%;
        height: 200px;
    }
    .upload{
        text-align: center;
    }
    .box .icon{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #ccc;
        display: inline-block;
        margin-top: 10px;
    }
    .icon .icon-upload{
        font-size: 20px;
        margin-top: 7px;
        color: #007BFF;
    }
    .upload p{
        margin: 10px 0;
    }
    .upload a{
        text-decoration: none;
    }
    .btn-right{
        display: flex;
        justify-content: flex-end;
    }
    .btn-right button{
        padding: 15px 30px;
        border-radius: 5px;
    }
    .btn-right .cancel{
        background: none;
        border: 1px solid #ccc;
        margin-right: 20px;
    }
    .btn-right .cancel:hover{
        color: #fff;
        background: rgb(179, 21, 21);
    }
    .btn-right .save{
        border: none;
        background: rgb(33, 33, 211);
        color: #fff;
    }
    .btn-right .save:hover{
        background: #007BFF;
    }
</style>