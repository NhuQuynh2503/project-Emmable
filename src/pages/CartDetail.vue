<template>
    <section id="cartdetail-wrapper">
        <div class="cartdetail">
            <div class="left">
                <div class="heading"><h3>Chart()</h3></div>
                <div class="productList">
                    <div class="main-container">
                        <input type="checkbox" name="" id="">
                        <div class="main-content">
                            <h4>Tonny toys</h4>
                            <p class="location">Jakarta Timur</p>
                        </div>

                    </div>
                    <div class="item-system" v-for="item in tonny" :key="item.id">
                        <div class="item-top">
                            <input type="checkbox" name="" id="">
                            <div class="image"><img :src="item.image" alt=""></div>
                            <div class="cart-item-info">
                                <h5>{{ item.title }}</h5>
                                <div>{{ item.gram }}</div>
                            </div>
                            <div class="cart-item-price">
                                <div class="priceDiscount">
                                    <span class="discount">{{ item.discount }}% </span>
                                    <p class="price">Rp{{ item.price }}</p>
                                </div>
                                <div class="priceAfter">${{ (item.price - (item.price * item.discount / 100)).toFixed(2) }}</div>
                            </div>
                        </div>
                        <div class="item-bottom">
                            <div class="add">+Add</div>
                            <div class="cart-item-actions">
                                <Icon class="icon-heart" icon="material-symbols:favorite-outline"></Icon>
                                <div class="move">Move to wishlist</div>
                                <button class="delete"><Icon class="icon-delete" icon="material-symbols:delete"></Icon></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="productList">
                    <div class="main-container">
                        <input type="checkbox" name="" id="">
                        <div class="main-content">
                            <div class="rombo-check">
                                <Icon class="icon-check" icon="mdi:check-bookmark"></Icon>
                                <h4>Rombo</h4>
                            </div>
                            <p class="location">Jakarta Timur</p>
                        </div>

                    </div>
                    <div class="item-system" v-for="item in rombo" :key="item.id">
                        <div class="item-top">
                            <input type="checkbox" name="" id="">
                            <div class="image"><img :src="item.image" alt=""></div>
                            <div class="cart-item-info">
                                <h5>{{ item.title }}</h5>
                                <div>{{ item.gram }}</div>
                            </div>
                            <div class="cart-item-price">
                                <div class="priceDiscount">
                                    <span class="discount">{{ item.discount }}% </span>
                                    <p class="price">Rp{{ item.price }}</p>
                                </div>
                                <div class="priceAfter">${{ (item.price - (item.price * item.discount / 100)).toFixed(2) }}</div>
                            </div>
                        </div>
                        <div class="item-bottom">
                            <div class="add">+Add</div>
                            <div class="cart-item-actions">
                                <Icon class="icon-heart" icon="material-symbols:favorite-outline"></Icon>
                                <div class="move">Move to wishlist</div>
                                <button class="delete"><Icon class="icon-delete" icon="material-symbols:delete"></Icon></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="form">
                    <div class="header-apply">
                        <Icon class="icon-discount" icon="ic:baseline-discount"></Icon>
                        <input type="text" name="" id="" placeholder="Inter gift card or discount code">
                        <button class="apply">Apply</button>
                    </div>
                    <div class="body">
                        <div class="shopping">
                            <h3>Shopping Summary</h3>
                                <div class="subtotal">
                                    <p>Subtotal</p>
                                    <span>$450.00</span>
                                </div>
                                <div class="tax">
                                    <p>Tax</p>
                                    <span>$00.00</span>
                                </div>
                                <div class="shipping">
                                    <p>Shipping</p>
                                    <span>$00.00</span>
                                </div>
                        </div>
                    </div>
                    <div class="end">
                        <div class="total-wrapper">
                            <div class="total">
                                <p class="total-title">Total</p>
                                <span>$450.00</span>
                            </div>
                            <button class="buy">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
<script setup>
import { ref } from 'vue';
    const tonny = ref([
        {
            id:1,
            image:'https://thudologistics.com/public/upload/71AaH5W7c1L._SX679_.jpg',
            title:'Awesome Brand - Cool product with nice c...',
            gram:'1 item (500gr)',
            discount:40,
            price:'350.00',
            
        },
        {
            id:2,
            image:'https://tongkhothienan.com/wp-content/uploads/2022/07/do-choi-cho-be-con-phat-sang-banh-rang-tongkhothienan-2.jpg',
            title:'Awesome Brand - Cool product with nice c...',
            gram:'1 item (500gr)',
            discount:0,
            price:'480.00',
            
        }
      
    ])
    const rombo = ref([
        {
            id:1,
            image:'https://cdn0918.cdn4s1.com/media/san-pham/ao-so-mi-nam/ao-so-mi-nam-form-rong-vigo-co-v-jbagy-js03-12.jpg',
            title:'Awesome Brand - Cool product with nice c...',
            gram:'1 item (500gr)',
            discount:40,
            price:'680.00',
            
        },
        {
            id:2,
            image:'https://lamia.com.vn/storage/anh-seo/dam-da-hoi-cao-cap-thiet-ke-3.jpg',
            title:'Awesome Brand - Cool product with nice c...',
            gram:'1 item (500gr)',
            discount:0,
            price:'700.00',
            
        }
      
    ])
</script>
<style>
    .cartdetail{
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-items: flex-start; /* Đảm bảo các phần tử được căn lề trên cùng */
        padding: 10px 150px;
    }
    .cartdetail .left{
        width: 700px;
        height: auto;
        margin-right: 30px;
    }
    .left .heading h3{
        font-size: 25px;
        color: #000;
        font-weight: bold;
    }
    .productList{
        margin-top: 20px;
    }
    .main-container{
        display: flex;
        align-items: center;
    }
    .main-container .main-content{
        margin-left: 10px;
    }
    input[type="checkbox"]{
        accent-color: rgb(188, 81, 20); /* Đặt màu xanh cho checkbox khi được chọn */
    }
    .main-content h4{
        font-size: 20px;
        color: #000;
        font-weight: bold;
    }
    .item-system{
        margin-top: 10px;
        border-bottom: 1px solid rgb(216, 214, 214);
    }
    .item-top{
        display: flex;
        align-items: center;
    }
    .item-top .image{
        margin-left: 10px;
    }
    .item-top img{
        width: 50px;
        height: 50px;
    }
    .item-top .cart-item-info{
        margin-left: 10px;
    }
    .item-top .cart-item-info h5{
        font-size: 15px;
        color: #000;
        font-weight: bold;
    }
    .item-top .cart-item-price{
        margin-left: auto;
    }
    .item-top .cart-item-price .discount{
        padding: 3px 5px;
        border-radius: 10px;
        color:rgb(224, 58, 58) ;
        background: #ffd1d1;
        margin-right: 10px;
    }
    .priceDiscount{
        display: flex;
        align-items: center;
        
    }
    .item-top .cart-item-price .priceDiscount .price{
        color: #000;
        margin-left: auto;
        text-decoration: line-through;
    }
    .item-top .cart-item-price .priceAfter{
        margin-left: 50px;
        font-size: 20px;
        color: #000;
        font-weight: bold;
    }
    .item-bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 5px;
        margin-bottom: 10px;
    }
    .item-bottom .add{
        margin-left: 20px;
        color: blueviolet;
    }
    .cart-item-actions{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .cart-item-actions .icon-heart, .icon-delete{
        font-size: 20px;
    }
    .cart-item-actions .icon-heart{
        margin-right: 10px;
    }
    .cart-item-actions button{
        margin: 0;
        padding: 0;
        border: none;
        background: none;
    }
    .cart-item-actions .move{
        padding-right: 20px;
        border-right: 1px solid #d8d8d8;
        margin-right: 20px;
    }
    .rombo-check{
        display: flex;
        align-items: center;
    }
    .rombo-check .icon-check{
        color: rgb(9, 139, 55);
        font-size: 20px;
    }
    .rombo-check h4{
        margin-left: 5px;
    }
    /* right */
    .cartdetail .right{
        width: 500px;
        height: auto;
        margin-left: 5px;
    }
    .form{
        border: 1px solid rgb(206, 206, 206);
        border-radius: 10px;
    }
    .header-apply {
        background: none;
        padding: 10px; 
        display: flex; 
        align-items: center; 
        border-bottom: 1px solid rgb(206, 206, 206);
    }
    .header-apply > * {
        margin-right: 5px; /* Khoảng cách giữa các phần tử con */
    }

    .header-apply input[type="text"] {
        flex: 1; /* Input chiếm hết phần còn lại của header */
        padding: 8px;
        border: 1px solid #ccc;;
        border-radius: 5px;
    }

    .header-apply .apply {
        padding: 8px 15px;
        color:  #5a4098; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer; 
    }
    .header-apply .icon-discount {
        margin-right: 5px;
        font-size: 25px;
    }
    .shopping{
        margin: 15px;
        border-bottom: 1px solid rgb(206, 206, 206);
    }
    .shopping > *{
        padding: 5px;
    }
    .shopping h3{
        font-size: 17px;
        color: #000;
        font-weight: bold;
    }
    .subtotal{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .tax{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .shipping{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .total-wrapper{
        margin: 20px;
    }
    .total{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .total .total-title{
        font-size: 15px;
        color: #000;
        font-weight: bold;
    }
    .buy {
        width: 100%;
        height: 50px;
        background-color:  #5a4098; 
        color: white; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer; 
        font-size: 16px; 
        font-weight: bold; 
        margin-top: 15px;
    }
</style>