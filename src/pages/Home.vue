<template>
    <div>
        <banner/>
        <section id="flash-sale">
      <div class="flash-sale-child">
        <div class="header">
          <div class="sale">
            <h2>Flash Sale</h2>
            <div class="hour">
              <p class="endsin">Ends in</p>
              <p class="second">1:10:34</p>
            </div>
          </div>
          <a href="">See More</a>
        </div>
        <swiper class="swiper" :slides-per-view="5" :space-between="5" @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide  v-for="item in data" :key="item.id">
            <div class="box">
              <div class="image">
                <img :src="item.image" alt="">
              </div>
              <div class="content">
                <h5>{{ item.title }}</h5>
                <p class="priceAfter">${{ (item.price * item.discount / 100).toFixed(2) }}</p>
                <div class="discount">
                  <div class="percent">{{ item.discount }}%</div>
                  <div class="price">${{ item.price }}</div>
                </div>
                <div class="location">
                  <Icon class="icon-location" icon="material-symbols:location-on"></Icon>
                  <p>{{ item.location }}</p>
                </div>
                <div>
                  <div class="review">
                    <Icon class="icon-star" icon="material-symbols:star-rate-rounded"></Icon>
                    <p class="numberstar">{{ currentSelected.newStar }}</p>
                    <div class="sold">Sold {{ item.sold }}</div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
        </section>
        <section id="official-store">
            <div class="head">
            <div class="check"> 
                    <Icon class="icon-check" icon="mdi:check-bookmark"></Icon>
                    <h2 class="official">Official Store</h2>
                </div>
                <a href="">See More</a>
            </div>
            <swiper
                :slides-per-view="5"
                :space-between="10"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
                <swiper-slide v-for="item in list" :key="item.id">
                    
                    <div class="item" >
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
            
                </swiper-slide>
    
            </swiper>
            
        </section>
        <section id="promotions">
            <h2>Today's Promotions</h2>
            <p>Get the bed offers from Emmable official store</p>
            <div class="img-container">
                <div class="img_item_1">
                    <img src="https://cdn.pixabay.com/photo/2021/04/02/12/06/woman-6144774_1280.jpg" alt="">
                </div>
                <div class="img_item_2">
                        <div class="item_1"><img src="https://cdn.pixabay.com/photo/2018/01/14/00/05/makeup-3081015_1280.jpg" alt=""></div>
                        <div class="item_2"><img src="https://cdn.pixabay.com/photo/2015/08/01/23/28/manicure-870857_1280.jpg" alt=""></div>
                </div>
                <div class="img_item_3">
                        <div class="item_3"><img src="https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_1280.jpg" alt=""></div>
                        <div class="item_4"><img src="https://cdn.pixabay.com/photo/2021/01/06/07/53/lipsticks-5893482_1280.jpg" alt=""></div>
                </div>
            </div>
        </section>
        <section id="popular-categories">
        <h2>Popular Categories</h2>
        <div class="popular-wrapper">
            <div class="popular" v-for="item in popular">
                <img :src="item.img" alt="">
                <p>{{ item.content }}</p>
            </div>
        </div>
        </section>
        <section id="product">
            <h2>Product you may like</h2>
            <div class="product-wrapper">
                <div class="product" v-for="item in data" :key="item.id">
                    <div class="image">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="content">
                        <h5>{{ item.title }}</h5>
                        <div class="price-after">${{ (item.price*item.discount)/100}}</div>
                        <div class="discount">
                            <p class="cent">{{ item.discount }}%</p>
                            <p class="price-before">${{ item.price }}</p>
                        </div>
                        <div class="locations">
                            <Icon class="icon-rounded" icon="material-symbols:location-on-rounded"></Icon>
                            <p >{{ item.location }}</p>
                        </div>
                        <div class="reviews">
                                <Icon class="icon-kidstar" icon="material-symbols:kid-star"></Icon>
                                <p class="stars">{{ currentSelected.newStar }}</p>
                                <p class="solds">Sold {{ item.sold }}</p>
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
import Product from './Product.vue';
import { ref} from 'vue';  
import axios from 'axios';
import { onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
    const currentSelected = ref({
        newID: "",
        newTitle: "",
        newPriceAfter: "",
        newPercent: "",
        newPrice: "",
        newLocation: "",
        newStar: "4.8",
        newSold: ""
    });
    const data = ref([]);
      
    const getData = () => {
    axios.get('https://6610ce890640280f219d706e.mockapi.io/api/message')
        .then((res) => {
            data.value = res.data;
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
    };
      
    onMounted(() => {
        getData();
    });
    const popular = ref([
        {
            img : "https://icons.iconarchive.com/icons/mattahan/umicons/256/Games-icon.png",
            content : "Gameming"
        },
        {
            img : "https://icons.iconarchive.com/icons/chromatix/aerial/256/laptop-icon.png",
            content : "Computer"
        },
        {
            img : "https://icons.iconarchive.com/icons/aha-soft/medical/128/Health-care-shield-icon.png",
            content : "Health"
        },
        {
            img : "https://icons.iconarchive.com/icons/r34n1m4ted/gucci/128/BAG-icon.png",
            content : "Fashsion"
        },
        {
            img : "https://icons.iconarchive.com/icons/iconleak/or/256/archive-icon.png",
            content : "Furniture"
        },
        {
            img : "https://icons.iconarchive.com/icons/iconarchive/plastic-toys/256/Plastic-Crocodile-Toy-icon.png",
            content : "Toys and Hobby"
        }
    ])
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

    const onSwiper = (swiper) => {
        console.log(swiper);
    };
      
    const onSlideChange = () => {
        console.log('slide change');
    };
</script>
<style scoped>
    /* flash-sale */
    .swiper{
        margin-left: 10px;
    }
    #flash-sale {
        padding: 10px 150px;
    }
    
    .flash-sale-child {
        background: #f9f9f9;
        border-radius: 10px;
    }
    
    .header {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        font-size: 15px;
        margin-bottom: 20px;
    }
    
    .header h2 {
        color: #181818;
        font-weight: bold;
        font-size: 25px;
    }
    
    .header a {
        text-decoration: none;
        font-size: 15px;
        margin-top: 10px;
    }
    
    .sale {
        display: flex;
    }
    
    .hour {
        display: flex;
        color: #fff;
        padding: 10px 0;
        font-size: 12px;
        background: #eb765c;
        margin-left: 10px;
        border-radius: 10px;
    }
    
    .hour .endsin {
        border-right: 1px solid #b9b8b85d;
        margin: 0 10px;
        padding-right: 10px;
    }
    
    .hour .second {
        margin: 0 10px;
    }
    
    .list-wrapper,
    .item-container {
        display: flex;
        gap: 10px;
        padding: 20px;
        flex-wrap: nowrap;
        margin-top: 10px;
    }
    
    .box {
        height: auto;
        box-shadow: 0 0 rgba(0, 0, 0, 1);
        margin-right: 10px;
        flex: 0 0 calc(20% - 10px);
        overflow: hidden;
        border-radius: 10px;
        background: #fff;
    }
    
    .image {
        width: 100%;
        height: auto;
    }
    
    .image img {
        width: 100%;
        height: auto;
    }
    
    .content {
        margin: 10px;
    }
    
    .content h5 {
        font-size: 18px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #5e5d5d;
        margin-bottom: 5px;
    }
    
    .content .priceAfter {
        font-size: 22px;
        color: #4e4e4e;
    }
    
    .content .discount {
        display: flex;
        margin-top: 5px;
    }
    
    .discount .percent {
        padding: 2px 7px;
        border-radius: 5px;
        background: #ffd1d1;
    }
    
    .discount .price {
        padding: 2px 10px;
        color: #b9b8b8;
    }
    
    .location {
        display: flex;
        margin-top: 5px;
    }
    
    .icon-location {
        font-size: 20px;
    }
    
    .location p {
        color: #b9b8b8;
    }
    
    .review {
        display: flex;
        margin-top: 5px;
    }
    
    .icon-star {
        font-size: 20px;
        color: #ffd18c;
    }
    
    .numberstar {
        border-right: 1px solid #b9b8b8;
        padding-right: 10px;
        margin-right: 10px;
        color: #b9b8b8;
    }
    
    .sold {
        padding: 0 5px;
        color: #b9b8b8;
    }


    /* official-store */

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
        margin: 2px;
    }

    /* promotions */

    #promotions {
        border-radius: 10px;
    }
    #promotions p{
        font-size: 18px;
        color: #9b9a9a;
        margin-bottom: 20px;
    }
    #promotions h2{
        color: #181818;
        font-weight: bold;
        font-size: 25px;
    }
    .img-container {
        display: flex;
        justify-content: space-between;
    }
    .img_item_1 img {
        height: 500px;
        width: 420px;
        border-radius: 10px;
        object-fit: cover;
    }
    .img_item_2 .item_1 img,
    .img_item_2 .item_2 img,
    .img_item_3 .item_3 img,
    .img_item_3 .item_4 img {
        width: 420px;
        height: 245px;
        border-radius: 10px;
        object-fit: cover;
    }
    .img_item_1,
    .img_item_2 .item_1,
    .img_item_2 .item_2,
    .img_item_3 .item_3,
    .img_item_3 .item_4 {
        overflow: hidden;
    }
    .img_item_2 .item_1{
        margin-bottom: 8px;
    }
    .img_item_3 .item_3{
        margin-bottom: 8px;
    }

    /* popular */
    #popular-categories{
        margin-bottom: 20px;
    }
    #popular-categories h2{
        color: #181818;
        font-weight: bold;
        font-size: 25px;
       
    }
    .popular-wrapper{
        width: 100%;
        height: 200px;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
    .popular-wrapper .popular{
        width: 200px;
        height: 100%;
        border: 1px solid black;
        padding: 0 10px;
        border-radius: 10px;
        border: 1px solid #d8d8d8;
    }
    .popular img{
        width: 70px;
        height: 70px;
        object-fit: cover;
        overflow: hidden;
        margin: 40px 50px;
    }
    .popular p{
        font-size: 18px;
        text-align: center;
        margin-top: -20px;
    }

    /* product */
    #product{
        margin-bottom: 20px;
    }
    #product h2{
        color: #181818;
        font-weight: bold;
        font-size: 25px;
    }
    .product-wrapper{
        display: flex;
        flex-wrap: wrap;
        
        width: 100%;
        height: auto;
        gap: 12px;
    }
    .product{
        flex: 0 0 calc(20% - 10px);
        /* width: calc(120% - 10px);  */
        height: auto;
        border-radius: 10px;
        margin-top: 20px;
        border: 1px solid #e4e3e3;
    }
    .product{
        width: calc(16% - 10px); 
        height: auto;
        border-radius: 10px;
        margin-top: 20px;
        border: 1px solid #e4e3e3;
    }
    .image img{
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        object-fit: cover;
        overflow: hidden;
    }
    .content{
        margin-left: 10px;
    }
    .content h5{
        font-size: 20px;
        color: #333;
    }
    .content .price-after{
        font-size: 20px;
        color: #181818;
    }
    .content .discount .cent{
        font-size: 15px;
        background:#ffd1d1;
        padding: 5px 8px;
        border-radius: 10px;
    }
    .content .discount .price-before{
        margin: 5px 15px;
        color: #7b7a7a;
    }
    .locations{
        display: flex;
        margin: 10px 0;
    }
    .locations .icon-rounded{
        font-size: 20px;
        color: #7b7a7a;
    }
    .locations p{
        color:#7b7a7a ;
    }
    .reviews{
        display: flex;
    }
    .reviews .icon-kidstar{
        color: #ffd18c;
        font-size: 20px;
    }
    .reviews .stars{
        margin-top: 3px;
        margin-right: 10px;
        padding-right: 10px;
        border-right: 1px solid #afaeae;
        color: #7b7a7a;
    }
    .reviews .solds{
       margin-top: 3px;
       color: #7b7a7a;
    }
    
</style>