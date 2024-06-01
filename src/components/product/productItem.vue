<template>

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
            <div class="list-wrapper">
                <div class="box" v-for="item in data">
                    <div class="image">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="content">
                        <h5>{{ item.title }}</h5>
                        <p class="priceAfter">${{ item.price*item.discount / 100 }}</p>
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
                                <div class="sold">Sold {{ item.sold }} </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { onMounted } from 'vue';

// const data = ref([]);
// const getData = () => {
//     axios.get('https://6610ce890640280f219d706e.mockapi.io/api/message')
//     .then((res)=>{
//         data.value= data.res
//     })
// }
// onMounted (() => {
//     getData()
// })
const currentSelected = ref({
        newID:"",
        newTitle:"",
        newPriceAfter:"",
        newPercent:"",
        newPrice:"",
        newLocation:"",
        newStar:"4.8",
        newSold:""
    })
const data = ref([])
    const getData = () => {
        axios.get('https://6610ce890640280f219d706e.mockapi.io/api/message')
        .then((res)=>{
            data.value=res.data
        })
    }
    onMounted(() => {
        getData()
    })
</script>
<style scoped>
    #flash-sale{
        padding: 10px 150px;
        
    } 
    .flash-sale-child{
        background:#f9f9f9;
        border-radius: 10px;
    }
    #official-store{
        border-radius: 10px;
    }
    .header {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        font-size: 15px;
    }
    .header h2{
        color: #181818;
        font-weight: bold;
        font-size: 25px;
    }
    
    .header a{
        text-decoration: none;
        font-size: 15px;
        margin-top: 10px;
    }
    .sale{
        display: flex;
    }
    .hour{
        display: flex;
        color: #fff;
        padding: 10px 0;
        font-size: 12px;
        background: #eb765c;
        margin-left: 10px;
        border-radius: 10px;
        
    }
    .hour .endsin{
        border-right: 1px solid #b9b8b85d;
        margin: 0 10px;
        padding-right: 10px;
    }
    .hour .second{
        margin: 0 10px;
    }
    .check h2{
        color: #181818;
        font-weight: bold;
        font-size: 25px;
    }
    .check h2{
        margin-top: 7px;
    }
    .list-wrapper, .item-container{
        display: flex;
        gap: 10px;
        padding: 20px;
        flex-wrap: nowrap;
        overflow-x: auto;
        margin-top: 10px;
    }
    .box, .item{
        height: auto;
        box-shadow: 0 0 rgba(0, 0, 0, 1);
        margin-right: 10px;
        flex: 0 0 calc(20% - 10px);
        overflow: hidden;
        border-radius: 10px;
        background: #fff;
    }
    .image{
        width: 100%;
        height: auto;
    }
    .image img{
        width: 100%;
        height: auto;
    }
    .content{
        margin: 10px;
    }
    .content h5{
        font-size: 18px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #5e5d5d;
        margin-bottom: 5px;
    }
    .content .priceAfter{
        font-size: 22px;
        color: #4e4e4e;
    }
    .content .discount{
        display: flex;
        margin-top: 5px;
    }
    .discount .percent{
        padding: 2px 7px;
        border-radius: 5px;
        background: #ffd1d1;
    }
    .discount .price{
        padding: 2px 10px;
        color: #b9b8b8;
    }
    .location{
        display: flex;
        margin-top: 5px;
    }
    .icon-location{
        font-size: 20px;
    }
    .location p{
        color:#b9b8b8 ;
    }
    .review{
        display: flex;
        margin-top: 5px;
    }
    .icon-star{
        font-size: 20px;
        color: #ffd18c;
    }
    .numberstar{
        border-right: 1px solid #b9b8b8;
        padding-right: 10px;
        margin-right: 10px;
        color: #b9b8b8;
    }
    .sold{
        padding: 0 5px;
        color: #b9b8b8;
    }
</style>