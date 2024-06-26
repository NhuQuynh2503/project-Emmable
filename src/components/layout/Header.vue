<template>
    <!-- <header id="header">
        <div class="header-top">
            <p><span>enjoy an extra 40%</span> off select sales style More details</p>
            <Icon class="icon-cancel" icon="material-symbols:close-small-outline-rounded"></Icon>
        </div>
        <div class="navbar">
            <div class="logo">
                <h2>Emmable</h2>
            </div>
            <div class="menu">
                <RouterLink to="" class="a">All Product</RouterLink>
                <RouterLink to="" class="a">Home Appliance</RouterLink>
                <RouterLink to="" class="a">Product Kit</RouterLink>
                <RouterLink to="" class="a">Prome</RouterLink>
                <RouterLink to="" class="a">Support</RouterLink>
            </div>
            <div class="user-action">
                <div class="search">
                    <Icon class="icon-search" icon="material-symbols:search-rounded"></Icon>
                </div>
                <div class="cart">
                    <Icon class="icon-cart" icon="material-symbols:shopping-cart"></Icon>
                    <p>Cart</p>
                </div>
                <div class="account">
                    <Icon class="icon-account" icon="material-symbols:person"></Icon>
                    <p>Account</p>
                </div>
            </div>
        </div>
    </header> -->
    <header id="header">
        <div class="header">
            <div class="phone">Call us: (00)1234567</div>
            <div class="more"> <span>Take 35%</span> off when you spend $99 or more with code <span>"Emmable99"</span> <a href="">More details</a></div>
            <nav>
                <ul>
                    <li>{{ header.about }}</li>
                    <li>{{ header.emmable }}</li>
                    <li>{{ header.help }}</li>
                </ul>
            </nav>
        </div>
        <div class="nav">
            <h2 id="logo">Emmable</h2>
            <div class="box-search">
                <div class="category">
                    <Icon class="icon-list" icon="clarity:view-list-line"></Icon>
                    <p>Category</p>
                </div>
                <input type="search" name="search" id="" placeholder="Search in Emmable">
                <div class="border-search"><Icon class="icon-search" icon="clarity:search-line"></Icon></div>
            </div>
           <div class="cart-login">
            <button @click="showCart"><Icon class="icon-cart" icon="clarity:shopping-cart-line"></Icon></button>
            <button class="btn-login">Login</button>
           </div>
        </div>
   
    </header>
    
    <Cart v-if="isShowCart"/>

   
</template>
<script setup>
import { ref,defineEmits } from 'vue';
import Cart from '../home/Cart.vue';
    const isShowCart= ref(false)
    // bat/tat gio hang
    const showCart = () => {
        isShowCart.value =! isShowCart.value
        
    }
    const header = ref({
        about:'About',
        emmable:'Emmable',
        help:'Help'
    })
    // const listData = ref(
    // [
    //     {
    //         "createdAt": "2024-05-10T03:33:14.678Z",
    //         "title": "Regional Usability Engineer",
    //         "price": "484.00",
    //         "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    //         "image": "https://loremflickr.com/640/480",
    //         "location": "Metzworth",
    //         "sold": 3752,
    //         "discount": "9",
    //         "id": "15"
    //     },
    //     {
    //         "createdAt": "2024-05-10T13:19:21.215Z",
    //         "title": "Corporate Factors Liaison",
    //         "price": "331.00",
    //         "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    //         "image": "https://loremflickr.com/640/480",
    //         "location": "Alexandriashire",
    //         "sold": 93094,
    //         "discount": "8",
    //         "id": "16"
    //     },
    //     {
    //         "createdAt": "2024-05-10T04:48:44.600Z",
    //         "title": "Corporate Communications Technician",
    //         "price": "846.00",
    //         "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    //         "image": "https://loremflickr.com/640/480",
    //         "location": "Port Ansleystad",
    //         "sold": 16696,
    //         "discount": "1",
    //         "id": "17"
    //     },
    //     {
    //         "createdAt": "2024-05-09T23:58:50.235Z",
    //         "title": "International Operations Agent",
    //         "price": "379.00",
    //         "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    //         "image": "https://loremflickr.com/640/480",
    //         "location": "Fort Aliyastad",
    //         "sold": 41177,
    //         "discount": "1",
    //         "id": "18"
    //     },
    //     {
    //         "createdAt": "2024-05-09T15:42:19.701Z",
    //         "title": "Lead Intranet Supervisor",
    //         "price": "231.00",
    //         "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    //         "image": "https://loremflickr.com/640/480",
    //         "location": "Fort Justinaside",
    //         "sold": 58566,
    //         "discount": "2",
    //         "id": "19"
    //     },
    //     {
    //         "createdAt": "2024-05-09T17:54:49.743Z",
    //         "title": "International Response Associate",
    //         "price": "869.00",
    //         "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    //         "image": "https://loremflickr.com/640/480",
    //         "location": "East Emiliano",
    //         "sold": 62872,
    //         "discount": "6",
    //         "id": "20"
    //     },
    //     {
    //         "createdAt": "2024-05-10T02:55:20.575Z",
    //         "title": "Regional Directives Agent",
    //         "price": "979.00",
    //         "description": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    //         "image": "https://loremflickr.com/640/480",
    //         "location": "South Cedrick",
    //         "sold": 6053,
    //         "discount": "4",
    //         "id": "21"
    //     },
    //     {
    //         "createdAt": "2024-05-17T14:12:44.426Z",
    //         "title": "Regional Usability Engineer",
    //         "price": "395.00",
    //         "description": "ne",
    //         "image": "https://loremflickr.com/640/480",
    //         "location": "Rahulhaven",
    //         "sold": 28926,
    //         "discount": "3",
    //         "id": "22"
    //     },
    //     {
    //         "createdAt": "2024-05-16T20:48:07.791Z",
    //         "title": "International Operations Agent",
    //         "price": "246.00",
    //         "description": "ne",
    //         "image": "https://loremflickr.com/640/480",
    //         "location": "Fort Aliciaberg",
    //         "sold": 47309,
    //         "discount": "2",
    //         "id": "23"
    //     },
    //     {
    //         "createdAt": "2024-05-17T01:53:37.134Z",
    //         "title": "Lead Intranet Supervisor",
    //         "price": "385.00",
    //         "description": "ne",
    //         "image": "https://loremflickr.com/640/480",
    //         "location": "Nolachester",
    //         "sold": 61810,
    //         "discount": "9",
    //         "id": "24"
    //     },
    //     {
    //         "createdAt": "2024-05-16T17:54:12.185Z",
    //         "title": "Corporate Communications Technician",
    //         "price": "276.00",
    //         "description": "ne",
    //         "image": "https://loremflickr.com/640/480",
    //         "location": "Larryworth",
    //         "sold": 64737,
    //         "discount": "7",
    //         "id": "25"
    //     },
    //     {
    //         "createdAt": "2024-05-17T10:22:00.251Z",
    //         "title": "Regional Usability Engineer ",
    //         "price": "744.00",
    //         "description": "ne",
    //         "image": "https://loremflickr.com/640/480",
    //         "location": "East Emmanuelle",
    //         "sold": 45438,
    //         "discount": "7",
    //         "id": "26"
    //     },
    //     {
    //         "createdAt": "2024-05-31T23:41:00.056Z",
    //         "title": "International Operations Agent ",
    //         "price": "356.00",
    //         "description": "hehe",
    //         "image": "https://loremflickr.com/640/480",
    //         "location": "Littelmouth",
    //         "sold": 76501,
    //         "discount": "3",
    //         "id": "27"
    //     },
    //     {
    //         "createdAt": "2024-05-31T21:34:49.127Z",
    //         "title": "Lead Intranet Supervisor",
    //         "price": "712.00",
    //         "description": "lalaa",
    //         "image": "https://loremflickr.com/640/480",
    //         "location": "Goodwinhaven",
    //         "sold": 87254,
    //         "discount": "5",
    //         "id": "28"
    //     },
    //     {
    //         "createdAt": "2024-05-31T14:15:00.738Z",
    //         "title": "Corporate Communications Technician ",
    //         "price": "316.00",
    //         "description": "huhu",
    //         "image": "https://loremflickr.com/640/480",
    //         "location": "Margieton",
    //         "sold": 83093,
    //         "discount": "3",
    //         "id": "29"
    //     }
    // ]
    // )
</script>
<style scoped>

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
    body{
        margin: 0;
        padding: 0;
    }
    #header {
        width: 100%;
        height: 110px;
        background-color: #afaeae; 
        z-index: 100;
    }

    .header {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        font-size: 15px;
    }
    .more span{
        color: #070707;
        font-weight: bold;
    }
    nav  ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    nav ul li {
        display: inline-block;
        margin-right: 20px; 
    }
    nav ul li a {
        text-decoration: none;
        color: #333; 
    }
    .nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
    }
    #logo{
        font-size: 20px;
        font-weight: bold;
        margin-left: 20px;
        color: #333;
    }
    .box-search{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 81%;
        height: 45px;
        background: #fff;
        border-radius: 10px;
        border-bottom: 0 0.5 rgba(0, 0, 0, 1);
        margin-left: 13px;
    }
    .category{
        display: flex;
        padding: 10px;
        align-items: center;
        border-right: 1px solid #cecccc;
    }
    .category p{
        font-size: 15px;
        text-align: center;
        padding-left: 5px;
    }
    .box-search .icon-list{
        font-size: 20px;
        color: #a4a4a4; 
        cursor: pointer;
    }
    .box-search input[type="search"]{
        /* padding: 7px 300px;
        border: none; */
        flex-grow: 1;
        outline: none;
        font-size: 10px;
        font-size: 13px;
        color: #333;
        padding-left: 10px;
        margin-top: 5px;
    }
    .box-search input{
        padding:7px 0 ;
        border: none;
    }
    .border-search{
        padding: 10px 10px;
        background: #5a4098;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .icon-search{
       margin-right: 10px;
       border: 1px solid #5a4098;
       color: #fff;
       font-size: 20px;
    }
    
    .cart-login {
        display: flex;
        align-items: center;
    }
    .cart-login button {
        border: 1px solid #afaeae;
        border-radius: 10px;
        margin-right: 10px;
        background-color: transparent; 
        padding: 8px; 
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .icon-cart {
        font-size: 30px;
        color: #656565;
        margin-right: 5px;
    }

    .cart-login .btn-login {
        padding: 8px 12px; /* Độ dày của padding */
        border-radius: 10px;
        background-color: #fff;
        border: 1px solid #afaeae;
        color: #000;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s; /* Hiệu ứng chuyển đổi màu nền và màu chữ */
    }

    .cart-login .btn-login:hover {
        background-color: rgb(80, 80, 239);
        color: #fff;
    }







    /* #header{
        width: 100%;
        height: 100px;
        position: fixed;
        z-index: 100;
        
    }
    .header-top{
        background:#000 ;
        height: 40px;
        display: flex;
        justify-content:center ;
        color: #fff;
        align-items: center;
        position: relative;
    }
    .header-top span{
        text-transform: uppercase;
    }
    .header-top .icon-cancel{
        font-size: 40px;
        position: absolute;
        right: 8%;
        cursor: pointer;
    }
    .navbar{
        display: flex;
        justify-content: space-between;
        background: #e4e4e4;
        padding: 10px 150px;
    }
    .navbar .logo h2{
        font-weight: bold;
        color: #000;
        font-size: 25px;
    }
    .menu{
        display: flex;
        gap: 30px;
        margin: 10px 0;
    }
    .menu a{
        text-decoration: none;
        color: #000;
        margin-top: 3px;
    }
    .user-action{
        display: flex;
        justify-content: space-between;
        gap: 30px;
        align-items: center;
    }
    .icon-search,.icon-account,.icon-cart{
        font-size: 30px;
        color: #808080;
    }
    .cart{
        display: flex;
        margin-bottom: 5px;
    }
    .cart p{
        margin-top: 5px;
    }
    .account{
        display: flex;
        margin-bottom: 5px;
    }
    .account p{
        margin-top: 5px;
    } */




   
</style>