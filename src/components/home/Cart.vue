<template>
 <!-- form -->
    <section id="cart-wrapper" >
        <div class="cartParent">
            <div class="cartParentBottom">
                <div class="navCart">
                    <h4>Cart ()</h4>
                    <button class="btn">See All</button>
                </div>
            </div>
            <div class="boxCartParent">
                <div class="boxCartChilr">
                    <div class="boxCart" v-for="item in listData" :key="item.id">
                        <div class="img">
                            <img :src="item.image" alt="">
                        </div>
                        <div class="contentCart">
                            <h5>{{ item.title }}</h5>
                            <p>1 item (500gr)</p>
                        </div>
                        <div class="priceCart">
                            <span>${{ (item.price*item.discount) /100}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>
<style scoped>
    .cart-wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        justify-content: center;
        align-items: center;
        background: rgba(199, 198, 198, 0.432); /* Màu nền mờ */
        z-index: 10; /* Đảm bảo hiển thị trên tất cả các phần tử khác */
    }
    .cartParent{
        width: 450px;
        max-height: 80%; /* Chiều cao tối đa cho form giỏ hàng */
        overflow-y: auto; /* Bật thanh cuộn nếu nội dung quá dài */
        background: #b6b4b4;
        border-radius: 10px;
        border: 1px solid rgb(216, 214, 214);
        margin-right: 10px;
        position: absolute;
        right: 10px;
        top: 150px; /* Điều chỉnh top để không che header */
        transform: translateY(-30px);
        z-index: 1001; /* Z-index cao hơn header/footer */
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Đổ bóng để nổi bật form */
    }
    .cartParentBottom{
        border-bottom: 1px solid #c5c4c4;
        margin-top: 5px;
    }
    .boxCartChilr{
        /* border-bottom: 1px solid #c05757;
        margin: 10px; */
        margin: 10px;
    }
    .navCart{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 10px;
    }
    .navCart h4{
        font-size: 20px;
        color: #000;
    }
    .navCart .btn{
        border: none;
        background: none;
        color: #686767;
        font-size: 15px;
        margin-top: 5px;
    }
    .boxCart{
        display: flex;
        border-bottom: 1px solid #e2dfdf;
        padding: 5px 0;
    }
    .boxCart .img img{
        width:70px ;
        height: 70px;
        border-radius: 5px;
        object-fit: cover;
    }
    .contentCart{
        margin-left: 10px;
    }
    .contentCart h5{
        font-size: 15px;
        color: #000;
        font-weight: bold;
    }
    .priceCart{
        margin-left: auto; /* Đẩy phần tử này sát lề phải */
    }
    .priceCart span{
        color: #000;
        font-size: 18px;
        font-weight: bold;
    }
    .add-to-cart-btn{
        padding: 5px 20px;
        border-radius: 10px;
        color: #fff;
        background: rgb(4, 155, 30);
        border: none;
        margin: 10px 25px;
    }
</style>