
<template>
    <section id="create-product">
        <div class="create-product">
            <div class="create-left">
                <h2>Create Product</h2>
                <form class="form-wrapper" action="">
                    <div class="nav">
                        <p class="title-left">Product Information</p>
                    </div>
                    <div class="product-container">
                        <div class="form-group">
                            <label for="tensp">Tên sản phẩm</label>
                            <input type="text" name="" id="tensp">
                        </div>
                        <div class="form-group-select">
                            <label for="status">Loại sản phẩm</label>
                            <select id="status" name="status">
                                <option value="new">Thời trang</option>
                                <option value="out-of-stock">Mỹ phẩm</option>
                                <option value="on-sale">Điện tử</option>
                                <option value="on-sale">Gia dụng</option>
                                <option value="on-sale">Văn phòng phẩm</option>
                            </select>
                        </div>
                        <div class="form-group-select">
                            <label for="status">Tình Trạng</label>
                            <select id="status" name="status">
                                <option value="new">Mới</option>
                                <option value="out-of-stock">Hết hàng</option>
                                <option value="on-sale">Giảm giá</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="mota">Mô tả</label>
                            <textarea name="" id="mota" cols="30" rows="10"></textarea>
                        </div>
                        <div class="btn">
                            <button class="cancel">Cancel</button>
                            <button class="save">Save</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="create-right">
                <div class="header">
                    <h4><a class="header-dashboard" href="#">Dashboard</a></h4>
                    <span>/</span>
                    <h4><a class="header-create" href="#">Create</a></h4>
                </div>
                <form action="" class="form-edit">
                    <div class="nav-right">
                        <p>Product Information</p>
                    </div>
                    <div class="edit-wrapper">
                        <div class="edit-product">
                            <div class="image"><img src="https://cdn-icons-png.freepik.com/512/219/219986.png" alt=""></div>
                            <div class="edit-information-product">
                                <p class="edit-title">Edit your photo</p>
                                <a class="delete" href="#">Delete</a>
                                <a class="update" href="#">Update</a>
                            </div>
                        </div>
                        <div class="box">
                            <div class="upload-area">
                                <div class="icon"><Icon class="icon-upload" icon="bi:upload"></Icon></div>
                                <p><a href="#">Click to upload</a> or drag and drop</p>
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
    .create-product{
        padding: 10px 150px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    .create-left{
        width: 700px;
        height: auto;
    }
    .create-left h2{
        font-size: 30px;
        color: #000;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .form-wrapper{
        height: 620px;
        border-radius: 10px;
        border: 1px solid #c6c5c5;
    }
    .nav{
        border-bottom: 1px solid #c6c5c5;
    }
    .nav .title-left{
        margin: 20px;
        font-size: 20px;
    }
    .product-container{
        margin: 20px;
    }
    .product-container .form-group {
        margin-bottom: 15px;
    }
    .form-group label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }
    .product-container .form-group-select{
        margin-bottom: 15px;
    }
    .form-group-select label {
        margin-bottom: 5px;
        font-weight: bold;
    }
    .form-group-select select{
        font-size: 16px;
        margin-left: 20px;
        width: 150px;
    }
    .form-group input{
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f1f5ff;
    }
    .form-group textarea{
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f1f5ff;
    }
    .btn{
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
    .btn .cancel{
        padding: 15px 30px;
        background: none;
        border: 1px solid #c6c5c5;
        border-radius: 5px;
        margin-right: 20px;
    }
    .btn .cancel:hover{
        color: #fff;
        background: rgb(179, 21, 21);
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
    .create-right{
        width: 400px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .header{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 13px;

    }
    .header .header-dashboard,.header-create{
        font-size: 20px;
        text-decoration: none;
        color: #000;
    }
    .header-dashboard{
        margin-right: 5px;
    }
    .header-create{
        margin-left: 5px;
    }
    .header span{
        font-size: 20px;
    }
    .form-edit{
        border: 1px solid #ccc;
        border-radius: 10px;
        height: 470px;
        width: 100%;
        margin-top: 20px;
    }
    .nav-right{
        border-bottom: 1px solid #c6c5c5;
        
    }
    .nav-right p{
        margin: 20px;
        font-size: 20px;
    }
    .edit-wrapper{
        margin: 20px;
    }
    .edit-product{
        display: flex;
        align-items: center;

    }
    .edit-product img{
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
    .edit-product .edit-information-product{
        margin-left: 10px;
    }
    .edit-information-product .edit-title{
        font-size: 18px;
    }
    .edit-information-product .delete{
        text-decoration: none;
        color: #5f5e5e;
        font-weight: 600;
    }
    .edit-information-product .delete:hover{
        color:  #412ac5;
    }
    .edit-information-product .update{
        text-decoration: none;
        margin-left: 20px;
        color: #5f5e5e;
        font-weight: 600;
    }
    .edit-information-product .update:hover{
        color:  #412ac5;
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
        display: inline-block;
    }
    .icon-upload {
        font-size: 20px;
        color: #007BFF;
        margin-top: 7px;
    }
</style>