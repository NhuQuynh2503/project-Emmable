<template>
    <div>
        <banner :class="style"/>
        <productItem/>
        <section id="official-store">
            <div class="head">
            <div class="check"> 
                    <Icon class="icon-check" icon="mdi:check-bookmark"></Icon>
                    <h2 class="official">Official Store</h2>
                </div>
                <a href="">See More</a>
            </div>
            <div class="item-container">
                <div class="item" v-for="item in list" :key="item.id">
                    <div class="img">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="intension">
                        <h4>{{ item.title }}</h4>
                        <div class="check-official">
                            <Icon class="icon-check-item" icon="mdi:check-bookmark"></Icon>
                            <p>{{ item.nameCompany }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import banner from '@/components/home/banner.vue';
import productItem from '@/components/product/productItem.vue';
import { ref } from 'vue';  
import axios from 'axios';
import { onMounted } from 'vue';
const style = {
    marginTop:"20px"
}
const list = ref([
        {
            id:1,
            image:"https://images.aukey.com/en/images/20191223191741-AUKEY-LOGO-PNG-1200.jpg",
            title:"Aukey",
            nameCompany:"Official Store"
        },
        {
            id:2,
            image:"https://images.unsplash.com/photo-1662947995689-ec5165848ad0?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"Samsung",
            nameCompany:"Official Store"
        },
        {
            id:3,
            image:"https://shojiki.vn/wp-content/uploads/2021/04/philips-logo.jpg",
            title:"Philips",
            nameCompany:"Official Store"
        },
        {
            id:4,
            image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/3SO-60023-f99863a1-e6db-431b-af70-2d76f4d6149e.jpg",
            title:"3Second",
            nameCompany:"Official Store"
        },
        {
            id:5,
            image:"https://ih1.redbubble.net/image.1193004591.9338/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
            title:"ACE indonesia",
            nameCompany:"Official Store"
        },
        {
            id:6,
            image:"https://upload.wikimedia.org/wikipedia/commons/9/99/Wings_%28Indonesian_company%29_logo.svg",
            title:"Wings Food",
            nameCompany:"Official Store"
        },
        {
            id:7,
            image:"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.jpg",
            title:"Apple",
            nameCompany:"Official Store"
        }
    ])
</script>
<style scoped>
    section{
        padding: 10px 150px;
    }
    #official-store{
        border-radius: 10px;
    }
    .head{
        display: flex;
        justify-content: space-between;
    }
    .head a{
        font-size: 15px;
        text-decoration: none;
        padding: 15px;
    }
    .check{
        display: flex;
        margin-top: 10px;
    }
    .check h2{
        color: #181818;
        font-weight: bold;
        font-size: 25px;
    }
    .icon-check{
        font-size: 20px;
        color: rgb(15, 159, 15);
        margin-top: 15px;
    }
    .official{
        font-size: 20px;
        padding:3px 5px;
    }
    .item-container{
        width: 100%;
        height: auto;
    }
    .item-container{
        display: flex;
        gap: 10px;
        padding: 20px;
        flex-wrap: nowrap;
        overflow-x: auto;
        margin-top: 10px;
    }
    .img img{
        width: 100%;
        height: 150px;
        object-fit: cover;
        overflow: hidden;
    }
    .item{
        height: auto;
        box-shadow: 0 0 rgba(0, 0, 0, 1);
        margin-right: 10px;
        flex: 0 0 calc(20% - 10px);
        overflow: hidden;
        border-radius: 10px;
        background: #fff;
    }
    .intension h4{
        font-size: 18px;
        text-align: center;
        font-weight: bold;
    }
    .check-official{
        display: flex;
        margin-top: 5px;
        text-align: center;
        margin-left: 70px;
    }
    .icon-check-item{
        font-size: 18px;
        color: rgb(15, 159, 15);
    }
</style>