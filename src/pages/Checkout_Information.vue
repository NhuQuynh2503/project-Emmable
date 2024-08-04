<template>
    <section class="checkout-wrapper">
        <div class="checkout">
            <div class="checkout-left">
                <!-- checkout -->
                <div class="header">
                    <h3>Checkout</h3>
                    <div class="nav-container">
                        <div class="cart">
                            <p>Cart</p>
                            <Icon class="icon-arrow" icon="basil:caret-right-outline"></Icon>
                        </div>
                        <div class="information">
                            <p>Information</p>
                            <Icon class="icon-arrow" icon="basil:caret-right-outline"></Icon>
                        </div>
                        <div class="shipping">
                            <p>Shipping</p>
                            <Icon class="icon-arrow" icon="basil:caret-right-outline"></Icon>
                        </div>
                        <div class="payment">
                            <p>Payment</p>
                        </div>
                    </div>
                </div>
                <!-- contact -->
                <div class="contact-parent">
                    <div class="contact-information">
                        <h4>Contact Information</h4>
                        <div class="account">
                            <p>Already have an account ?</p>
                            <a href="">Log in</a>
                        </div>
                    </div>
                    <input type="email" name="" id="" placeholder="Your email">
                    <div class="checkbox-email">
                        <input type="checkbox" name="" id="">
                        <p>Email me with news and offers</p>
                    </div>
                </div>
                <!-- shipping -->
                <div class="shipping-wrapper">
                    <h4>Shipping Address</h4>
                    <div class="information-form">
                        <div class="form-group" >
                            <select name="" id="" v-model="cityId">
                                <option v-for="item in locations" :key="item.id" :value="item.id">{{ item.name }}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <div class="name">
                                <input type="text" name="" id="" placeholder="Tên">
                                <input type="text" name="" id="" placeholder="Họ">
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="text" name="" id="" placeholder="Địa chỉ">
                        </div>
                        <div class="form-group">
                            <div class="name" >
                                <select name="" id="" v-model="id">
                                    <option v-for="item in districts" :key="item.id" :value="item.id">{{ item.name }}</option>
                                </select>
                                <input type="text" name="" id="" placeholder="Mã bưu điện">
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="text" name="" id="" placeholder="Số điện thoại">
                        </div>
                    </div>
                </div>
                <div class="btn-wrapper">
                    <div class="btn">
                        <div class="btn-left">
                            <Icon class="icon-arrow" icon="material-symbols:arrow-back-ios-rounded"></Icon>
                            <a class="return-cart" href="#">Return to cart</a>
                        </div>
                        <div class="btn-right">
                            <button class="btn-continue">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="checkout-right">
                <div class="tonny-wrapper">
                    <div class="tonny-first">
                        <div class="tonny-nav">
                            <h4>Tonny toys</h4>
                            <p>Jakarta Timur</p>
                        </div>
                        <div class="item-box" v-for="item in dataTonny" :key="item.id">
                            <div class="item">
                                <div class="image"><img .src="item.image" alt=""></div>
                                <div class="content">
                                    <h4 class="title">{{ item.title }}</h4>
                                    <p class="gram">{{ item.gram }}</p>
                                </div>
                                <div class="priceAfter"><span>${{ item.priceAfter }}</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="apply-body">
                        <div class="apply">
                            <Icon class="icon-discount" icon="ic:baseline-discount"></Icon>
                            <input type="text" name="" id="" placeholder="Inter gift card or discount code">
                            <button class="btn-apply">Apply</button>
                        </div>
                    </div>
                    <div class="sub-last">
                        <div class="shopping-wrapper">
                            <h4>Shopping Summary</h4>
                            <div class="group-subtotal">
                                <div class="subtotal">
                                <p class="">Subtotal</p>
                                <span>${{shopping.subtotal }}</span>
                                </div>
                                <div class="subtotal">
                                    <p class="">Tax</p>
                                    <span>${{ shopping.tax }}</span>
                                </div>
                                <div class="subtotal">
                                    <p class="">Shipping</p>
                                    <span>${{ shopping.shipping }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="total">
                            <p>Total</p>
                            <span>${{ (parseFloat(shopping.subtotal) + parseFloat(shopping.tax) + parseFloat(shopping.shipping)).toFixed(2) }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
<script setup>
import { ref ,onMounted,watch} from 'vue';
import { locationCity, locationDistricts } from '@/services/location';
    const locations = ref([])
    const districts = ref([])
    const cityId = ref('')
    const id = ref('')
    async function fetchLocations() {
        try {
            const response = await locationCity();
            //console.log("data respores",response.data);
            locations.value = response.data.data;
            //console.log("data location",locations.value);
        } catch (error) {
            console.error("Lỗi khi lấy thông tin thành phố", error);
        }
    }
    async function fetchDistricts() {
        try {
            //console.log("Fetching districts for cityId:", cityId.value);
            const response = await locationDistricts(cityId.value);
            //console.log("Response:", response.data);
            districts.value = response.data.data; // Kiểm tra xem có phải response.data.data hay không
            //console.log("Districts:", districts.value);
        } catch (error) {
            console.error("Lỗi khi lấy thông tin huyện", error);
        }
    }

    watch(cityId, (newValue, oldValue) => {
        // console.log('Giá trị cũ:', oldValue);
        // console.log('Giá trị mới:', newValue);
        fetchDistricts();
    });

    
    onMounted(() => {
        fetchLocations();  
    });


    const dataTonny = ref([
        {
            id:1,
            image:'https://thudologistics.com/public/upload/71AaH5W7c1L._SX679_.jpg',
            title:'Awesome Brand - Cool product with nice c...',
            gram:'1item (500gr)',
            priceAfter:'45.00'
        },
        {
            id:2,
            image:'https://thudologistics.com/public/upload/71AaH5W7c1L._SX679_.jpg',
            title:'Awesome Brand - Cool product with nice c...',
            gram:'1item (500gr)',
            priceAfter:'45.00'
        }
    ])
    const shopping = ref(
        {
            subtotal:'49.00',
            tax:'00.00',
            shipping:'00.00'
        }
    )
</script>




<style scoped>
    .checkout{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 10px 150px;
    }
    .checkout .checkout-left{
        width: 700px;
        height: auto;
    }
    .header{
        margin-bottom: 20px;
    }
    .header h3{
        color: #000;
        font-size: 25px;
        font-weight: bold;
    }
    .nav-container{
        display: flex;
        align-items: center;
    }
    .nav-container .cart{
        display: flex;
        align-items: center;
    }
    .nav-container .cart p, .information p, .shipping p, .payment p{
        font-size: 17px;
    }
    .nav-container .icon-arrow{
        font-size: 17px;
    }
    .nav-container .information{
        display: flex;
        align-items: center;
    }
    .nav-container .shipping{
        display: flex;
        align-items: center;
    }
    .nav-container .payment{
        display: flex;
        align-items: center;
    }
    .contact-information{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .contact-information h4{
        color: #000;
        font-size: 20px;
    }
    .contact-information p{
        margin-right: 10px;
        font-size: 17px;
    }
    .contact-information a{
        text-decoration: none;
        font-size: 17px;
    }
    .account{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .checkbox-email{
        display: flex;
        align-items: center;
    }
    .contact-parent input[type="email"]{
        flex: 1;
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #dad8d8;
        margin-bottom: 20px;
        background-color: #f1f5ff;
    }
    input[ type="checkbox"]{
        accent-color: rgb(188, 81, 20);
    }
    .checkbox-email p{
        margin-left: 5px;
        font-size: 15px;
    }
    .shipping-wrapper{
        margin-top: 20px;
    }
    .shipping-wrapper h4{
        font-size: 20px;
    }
    .information-form{
        margin-top: 20px;
    }
    .form-group{
        margin-bottom: 15px;
    }
    .form-group input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f1f5ff;
    }
    .form-group select {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #f1f5ff;
    }
    .form-group .name{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .form-group .name input {
        margin-right: 5px; /* Thêm khoảng cách giữa các input */
    }
    .form-group .name input:last-child {
        margin-right: 0; /* Bỏ khoảng cách sau input cuối cùng */
    }
    .form-group .name select {
        margin-right: 5px; /* Thêm khoảng cách giữa các input */
    }
    .btn-wrapper{
        margin-top: 30px;
    }
    .btn-wrapper .btn{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .btn-left .icon-arrow{
        margin-top: 5px;
    }
    .btn-left .return-cart{
        text-decoration: none;
        color: #000;
        font-size: 17px;
    }
    .btn-right .btn-continue{
        padding: 15px 25px;
        color: #fff;
        background: #5a4098;
        border: none;
    }



    /* right  */
    .checkout .checkout-right{
        width: 500px;
        height: auto;
    }
    .tonny-wrapper{
        margin-top: 15px;
        border-radius: 10px;
        height: 550px;
        border: 1px solid rgb(236, 235, 235);
        box-shadow: 0 3px 8px 0 rgba(172, 172, 172, 0.2);
    }
    .tonny-first{
        box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.2);
    }
    .tonny-nav{
        margin: 20px;
    }
    .tonny-nav h4{
        font-size: 20px;
        color: #000;
        font-weight: bold;
    }
    .item-box{
        margin: 20px;
    }
    .item{
        display: flex;
        align-items: center;
    }
    .item img{
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
    .item .content{
        margin-left: 20px;
    }
    .item .priceAfter{
        margin-left: auto;
        transform: translateY(-15px);
    }
    .item span{
        font-size: 20px;
        color: #000;
        font-weight: bold;
    }
    .apply-body{
        border-bottom: 1px solid rgb(206, 206, 206);
    }
    .apply{
        background: none; 
        display: flex; 
        align-items: center; 
        margin: 20px;
    }
    .apply > *{
        margin-right: 5px;
    }
    .apply .icon-discount{
        font-size: 25px;
    }
    .apply input[type="text"] {
        flex: 1; /* Input chiếm hết phần còn lại của header */
        padding: 7px;
        border: 1px solid #ccc;;
        border-radius: 5px;
    }
    .apply .btn-apply{
        padding: 8px 15px;
        color:  #5a4098; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer; 
    }
    .apply .btn-apply:last-child{
        margin-right: 0;
    }
    .sub-last .shopping-wrapper{
        margin: 20px;
        border-bottom: 1px solid #dad8d8;
    }
    .sub-last h4{
        font-size: 20px;
        color: #000;
        font-weight: bold;
        margin-bottom: 5px;
    }
    .group-subtotal > *{
        margin-bottom: 5px;
        padding: 5px 0;
    }
    .total{
        margin: 20px;
    }
    .total p{
        font-size: 18px;
        color: #000;
        font-weight: bold;
    }
    .total span{
        font-size: 20px;
        color: #000;
        font-weight: bold;
    }
</style>