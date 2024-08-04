<template>

    <footer id="footer">
        <div class="footer-container">
           <div class="footer-wrapper">
                <div class="item-emmable">
                    <h2>Emmable</h2>  
                    <p>Join our list and get 10% off your next purchase</p>
                    <h4 class="accepted">Accepted Payments</h4>
                    <div class="image-container">
                        <div class="image" v-for="item in images" :key="item">
                            <img :src="item" alt="">
                        </div>
                    </div>
                </div>
                <div class="item">
                    <h3>Company</h3>
                    <a href="#">About Us</a>
                    <a href="#">Blog</a>
                    <a href="#">Careers</a>
                    <a href="#">Our team</a>
                    <a href="#">Help Center</a>
                    <a href="#">Outlets</a>
                </div>
                <div class="item">
                    <h3>Shop</h3>
                    <a href="#">Gift cards</a>
                    <a href="#">Our Products</a>
                    <a href="#">My Account</a>
                    <a href="#">Shipping</a>
                    <a href="#">Returns</a>
                    <a href="#">Rewards</a>
                </div>
                <div class="item">
                    <h3>Support</h3>
                    <a href="#">Contact Us</a>
                    <a href="#">Payment Options</a>
                    <a href="#">Store Locator</a>
                    <a href="#">Accessibility</a>
                    <a href="#">Affiliates</a>
                </div>
                <div class="item">
                    <h3>FAQ</h3>
                    <a href="#">Rewards FAQ</a>
                    <a href="#">Product Care</a>
                    <a href="#">Size Guide</a>
                </div>
           </div>
           <div class="footer-bottom">
                <div class="box">
                    <div class="box-icon">
                        <h4>Find us on : </h4>
                        <div class="icon">
                            <Icon class="icon-twitter" icon="entypo-social:twitter-with-circle"></Icon>
                            <Icon class="icon-facebook" icon="entypo-social:facebook-with-circle"></Icon>
                            <Icon class="icon-linkedin" icon="entypo-social:linkedin-with-circle"></Icon>
                        </div>
                    </div>
                    <div class="box-text">
                        <p>Term of Use</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div class="box-content">
                        <p>@ 2022 All right reserved. Designed by designspace</p>
                    </div>
                    </div>
           </div>
        </div>
    </footer>
</template>
<script setup>
import { ref } from 'vue';
const images = ref([
   
    "https://cdn.scb.com.vn/picture/visa_vang_.jpgw1200",
    
    "https://vncb.vn/wp-content/uploads/2023/09/the-atm-mb-bank-la-gi.jpg",
   
    "https://monfin.vn/images/source/GetImage.jpg",
    
    "https://www.agribank.com.vn/wcm/connect/23d1dc9b-1aec-462a-85ac-60d33178fc52/PLUS+SUCCESS+2019+-+CS6+%28day+dien%29-02.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE-23d1dc9b-1aec-462a-85ac-60d33178fc52-ntsvv4K",
    
    "https://www.shb.com.vn/wp-content/uploads/2016/03/SHB-VISA-DEBIT_CV_Final-1.jpg",
   
    "https://portal.vietcombank.com.vn/content/en-us/personal/KhoAnh/CARD/Visa%20Brown-FRONT-info-01.jpg?RenditionID=3",
   
    "https://bidv.com.vn/wps/wcm/connect/eaab6655-a9bf-4b68-bfbf-588aeffc4b5c/9/the-tin-dung-bidv-visa-business.jpg?MOD=AJPERES&CVID=",
   
    "https://www.namabank.com.vn/Data/Sites/1/Product/38/the-tin-dung-mc-standard-380x239.png"
])
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
    #footer{
        background: #e4e4e4;
        width: 100%;
        height: auto;
        z-index: 100;
    }
    .footer-container{
        padding: 10px 150px;
    }
    .footer-wrapper{
        display: flex;
        justify-content: space-between;
        gap: 10px;
        border-bottom: 1px solid rgb(181, 179, 179);
    }
    .item-emmable h2{
        font-size: 25px;
        color: #000;
    }
    .item-emmable p{
        font-size: 15px;
        color: #868484;
    }
    .item-emmable .accepted{
        margin-top: 20px;
        font-size: 18px;
        color: #000;
    }
    .image-container{
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-top: 10px;
        width: 250px;
        height: 80px;
    }
    .image img {
        width: 50px;
        height: 40px;
        object-fit: contain;
    } 
    .item{
        margin-top: 10px;
    }
    .item h3{
        color: #000;
    }
    .item a{
        display: block;
        text-decoration: none;
        color: #868484;
        padding: 7px 0;
    }
    .footer-bottom{
        margin-top: 30px;
    }
    .box{
        display: flex;
        justify-content: space-between;
    }
    .box-icon{
        display: flex;
    }
    .box-icon h4{
        font-size: 15px;
        color: #000;
    }
    .box-icon .icon-twitter,.icon-facebook,.icon-linkedin{
        font-size: 25px;
        margin: 0 5px;
    }    
    .box-text{
        display: flex;
        text-align: center;
        gap: 30px;
    }
    .box-content p{
        padding-right: 28px;
        color: #868484;
    }



    @media (max-width: 576px) {
    #footer{
        width: 100%;
        z-index: 100;
    }
    .footer-container {
        padding: 10px 0; /* Giảm padding xuống để thu gọn */
    }
    .footer-wrapper {
        display: flex; /* Chuyển sang định dạng dọc */
        align-items: flex-start; /* Căn trái các item trong wrapper */
    }
    .item-emmable {
        width: 40%; /* Chiếm toàn bộ chiều rộng */
        text-align: left; /* Căn lề trái cho nội dung */
    }
    .item {
        width: 60%; /* Chiếm toàn bộ chiều rộng */
        margin-top: 10px; /* Tăng khoảng cách giữa các mục */
        
    }
    .item a{
        padding: 10px 0;
    }
    .box {
        flex-direction: column; /* Chuyển sang định dạng dọc */
        align-items: flex-start; /* Căn trái các box trong cột */
    }
    .box-content p {
        padding-right: 0; /* Xóa padding phải */
        text-align: left; /* Căn lề trái cho nội dung */
    }
    .footer-bottom{
        padding: 10px 0;
    }
    .footer-bottom .box{
        flex-direction: column; /* Chiều ngang cho box */
        align-items: center;
    }
}
@media (max-width: 768px){
    .footer-container{
        padding: 10px 40px;
    }
    .footer-bottom{
        padding: 10px 0;
    }
    .footer-bottom .box{
        flex-direction: column; /* Chiều ngang cho box */
        align-items: center;
    }
}
</style>