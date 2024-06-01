<template>
    <header id="header">
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
    </header>

</template>
<script setup>
    
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
    #header{
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
    }
</style>