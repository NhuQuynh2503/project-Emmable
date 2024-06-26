<template>
   <div>
         <!-- start banner -->
    <section id="banner">
        <div class="banner">
            <h2>Action Figure</h2>
        </div>
    </section>
    <!-- end banner -->
    <!-- start navbar -->
     <section id="navbar">
        <div class="navbar">
                        <div class="nav-item">
                            <RouterLink class="nav">Home</RouterLink>
                            <Icon class="arrow-right" icon="material-symbols:arrow-forward-ios"></Icon>
                        </div>
                        <div class="nav-item">
                            <RouterLink class="nav">Main Category</RouterLink>
                            <Icon class="arrow-right" icon="material-symbols:arrow-forward-ios"></Icon>
                        </div>
                        <div class="nav-item">
                            <RouterLink class="nav">Toys & Hobby</RouterLink>
                            <Icon class="arrow-right" icon="material-symbols:arrow-forward-ios"></Icon>
                        </div>
                        <div class="nav-item">
                            <RouterLink class="nav">Figure</RouterLink>
                            <Icon class="arrow-right" icon="material-symbols:arrow-forward-ios"></Icon>
                        </div>
                    <div class="nav-item">
                            <RouterLink class="nav">Action Figure</RouterLink>
                    </div>
                </div>
     </section>
    <!-- end navbar -->
    <!-- start actionFigure -->
    <section id="actionFigure">
        <div class="actionFigure">
            <div class="left">
                <!-- filter -->
                <div class="filter-wrapper">
                    <div class="navFilture">
                        <h4>Filter:</h4>
                        <a href="">Reset All</a>
                    </div>
                    <div class="box">
                        <div class="box-item">
                            <p>Doll</p>
                            <Icon class="icon-cancel" icon="material-symbols:close-small-outline-rounded"></Icon>
                        </div>
                        <div class="box-item">
                            <p>Children's Toy</p>
                            <Icon class="icon-cancel" icon="material-symbols:close-small-outline-rounded"></Icon>
                        </div>
                        <div class="box-item">
                            <p>Puzzle</p>
                            <Icon class="icon-cancel" icon="material-symbols:close-small-outline-rounded"></Icon>
                        </div>
                    </div>
                </div>
                <!-- toyHobby -->
                <div class="toyHobby-wrapper">
                    <div class="toyHobby">
                        <div class="navToyHobby">
                        <h4>Toys & Hobby</h4>
                        <Icon class="icon-arrow-down" icon="material-symbols:keyboard-arrow-down-rounded"></Icon>
                    </div>
                    <div class="check-parent" v-for="item in toyHobby" >
                        <div class="check-child">
                            <div class="check-content">
                                <input type="checkbox" name="" id="">
                                <p class="content">{{ item.content }}</p>
                            </div>
                            <div class="check-number">
                                <p class="number">{{ item.number }}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <!-- location -->
                <div id="location">
                    <div class="location">
                        <h4>Location</h4>
                        <Icon class="icon-arrow-down" icon="material-symbols:keyboard-arrow-down-rounded"></Icon>
                    </div>
                </div>
                <!-- brand -->
                <div id="brand">
                    <div class="brand">
                        <h4>Brand</h4>
                        <Icon class="icon-arrow-down" icon="material-symbols:keyboard-arrow-down-rounded"></Icon>
                    </div>
                </div>
                <!-- Age level -->
                <div id="ageLevel">
                    <div class="ageLevel">
                        <h4>Age level</h4>
                        <Icon class="icon-arrow-down" icon="material-symbols:keyboard-arrow-down-rounded"></Icon>
                    </div>
                </div>
                <!-- condition -->
                <div id="condition">
                    <div class="condition">
                        <h4>Condition</h4>
                        <Icon class="icon-arrow-down" icon="material-symbols:keyboard-arrow-down-rounded"></Icon>
                    </div>
                </div>
                <!-- rating -->
                <div id="rating">
                    <div class="rating">
                        <h4>Rating</h4>
                        <Icon class="icon-arrow-down" icon="material-symbols:keyboard-arrow-down-rounded"></Icon>
                    </div>
                    <div class="ratingCheck">
                        <div class="ratingCheck-item" v-for="item in rating" :key="item.id">
                            <input type="checkbox" name="" :id="item.id" @change="toggleColor(item.id)">
                            <div class="checkboxStar">
                                <p class="above">Above 4</p>
                            <Icon class="icon-star" icon="material-symbols:kid-star" :class="{ 'yellow-star': checkedIds.includes(item.id) }"></Icon>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- price -->
                <div id="price">
                    <!-- nav -->
                    <div class="price">
                        <h4>Price</h4>
                        <Icon class="icon-arrow-down" icon="material-symbols:keyboard-arrow-down-rounded"></Icon>
                    </div>
                    <!-- btn -->
                     <div class="first-last-wrapper">
                        <p class="btn-first">{{selectedFirstLast.first }}</p>
                        <p class="btn-space"> - </p>
                        <p :class="styleFirstLast" class="btn-last">{{ selectedFirstLast.last }}</p>
                     </div>
                     <div class="button">
                        <button class="btn-save">Save</button>
                     </div>
                    <!-- price check first-last -->
                    <div class="price-wrapper">
                        <div class="price-destination" v-for="item in destination" :key="item.id">
                        <input type="checkbox" name="" @click="selecFirstLast(item)">
                        <div class="destination-item">
                            <p class="first">{{ item.first }}</p>
                            <p class="space"> - </p>
                            <p class="last">{{ item.last }}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="navShowData">
                        <div class="nav">
                            <h5>Shows 8465 product for <span>"Action Figure"</span></h5>
                        </div>
                        <div class="sortBy">
                            <p class="sort">Sort By: Featured</p>
                            <Icon class="icon-arrow-down" icon="material-symbols:keyboard-arrow-down-rounded"></Icon>
                        </div>
                </div>
                <div class="showProduct-wrapper">
                    <div class="product" v-for="item in data" :key="item.id">
                        <div class="image">
                            <img :src="item.image" alt="">
                        </div>
                        <div class="content">
                            <h5>{{ item.title }}</h5>
                            <div class="price-after">${{ (item.price*item.discount) /100}}</div>
                            <div class="discount">
                                <p class="cent">{{ item.discount }}%</p>
                                <p class="price-before">${{ item.price }}</p>
                            </div>
                            <div class="locationProduct">
                                <Icon class="icon-rounded" icon="material-symbols:location-on-rounded"></Icon>
                                <p>{{ item.location }}</p>
                            </div>
                            <div class="reviews">
                                <Icon class="icon-kidstar" icon="material-symbols:kid-star"></Icon>
                                <p class="stars">4.8</p>
                                <p class="solds">Sold {{item.sold}}</p>
                            </div>
                            
                                <button class="add-to-cart-btn">Add to Cart</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end actionFigure -->
    
   </div>
</template>
<script setup>
import { ref,onMounted,defineEmits } from 'vue';
import axios from 'axios';
    
    const isShowCart = ref(false)
    const showCart = () => {
        isShowCart.value = true
    }
    const cart = ref([])
    const addToCart = (item) => {
        cart.value.push(item) //push dung de them item vao cuoi mang cart
        console.log('Cart:', cart.value);
    }
    const data = ref([])
    const getData = () => {
        axios.get('https://6610ce890640280f219d706e.mockapi.io/api/message')
        .then((res)=>{
            data.value =  res.data
        })
    }
    onMounted(() => {
        getData()
    })
    const selectedFirstLast = ref(
        { 
            id:'',
            first: '',
            last: '' 
        }
    )
    const selecFirstLast = (data) => {
        selectedFirstLast.value=data
        console.log(selectedFirstLast.value);
    }
    // const toggleFirstLast = (event, data) => {
    //     if (event.target.checked) {
    //         selecFirstLast(data);
    //     } else {
    //         selecFirstLast({ first: '', last: '' });
    //     }
    // }; @change="toggleFirstLast($event, item)"
    // bo vao input de khi bo checkbox thi mat gia
    const destination = ref([
        {
            id:1,
            first:"$10.00",
            last:"$49.00"
        },
        {
            id:2,
            first:"$50.00",
            last:"$99.00"
        },
        {
            id:3,
            first:"$100.00",
            last:"$199.00"
        },
        {
            id:4,
            first:"$200.00",
            last:"and Up"
        }
    ])
    const checkedIds = ref([]);
    const toggleColor = (id) => {
        console.log(id);
        if (checkedIds.value.includes(id)) {
            checkedIds.value = checkedIds.value.filter(item => item !== id);
        } else {
            checkedIds.value.push(id);
        }
    };
    const rating = ref([
        {
            id:1,
            value:"Above 4"
        },
        {
            id:2,
            value:"Above 4"
        }
    ])
    const toyHobby = ref([
        {
            content:"Alrsoft Gun Accessories",
            number:109
        },
        {
            content:"Board Game",
            number:45
        },
        {
            content:"Doll",
            number:56
        },
        {
            content:'Dicast',
            number:10
        },
        {
            content:"Children'sControl",
            number:34
        },
        {
            content:"Remote Control",
            number:56
        },
        {
            content:"Model Kit",
            number:78
        },
        {
            content:"Puzzle",
            number:36
        },
        {
            content:"Stress Relleve Toys",
            number:13
        }

    ])
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
    .yellow-star {
        color: rgb(234, 191, 106);
    }
    /* banner */

    #banner{
        background: #5a4098;
        height: 100px;
    }
    .banner{
        padding: 10px 150px;
    }
    .banner h2{
        color: #fff;
        font-size: 30px;
        margin-top: 20px;
    }

    /* navbar */

    #navbar{
        border-bottom: 1px solid #b8b7b7;
    }
    .navbar{
        display: flex;
        justify-content: left;
        padding: 10px 150px;
    }
    .navbar .nav-item{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nav-item .arrow-right{
        margin-top: 2px;
    }
    .nav-item .nav{
        text-decoration: none;
        cursor: pointer;
        font-weight: bold;
    }
    .nav-item .nav:hover{
        color: #000;
    }

    /* actionFigure */

    .actionFigure{
        padding: 10px 150px;
        display: flex;
        justify-content: space-between;
    }
    .actionFigure .left{
        width: 350px;
        height: 1400px;
    }
    .filter-wrapper,.toyHobby-wrapper{
        border-bottom: 1px solid #b8b7b7;
    }
    .navFilture{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .navFilture h4{
        font-size: 20px;
        color: #000;
        font-weight: bold;
    }
    .box{
        display: flex;
        margin: 15px 0;
    }
    .box-item{
        border: 1px solid #b8b7b7;
        margin: 3px;
        display: flex;
        align-items: center;
        border-radius: 10px;
    }

    /* toyHobby */

    .toyHobby-wrapper{
        border-bottom: 1px solid #b8b7b7;
        margin-top: 15px;
    }
    .toyHobby{
        margin-bottom: 15px;
    }
    .icon-cancel,.icon-arrow-down{
        font-size: 20px;
        margin-top: 2px;
    }
    .navToyHobby h4{
        font-size: 20px;
        color: #000;
        font-weight: bold;
    }
    .navToyHobby{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .check-child{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0;
        /* border-bottom: 1px solid #ccc;  */
    }
    .check-content{
        display: flex;
        align-items: center;
    }
    .check-content .content{
        margin-left: 5px;
    }

    /* location */
    #location{
        border-bottom: 1px solid #b8b7b7;
    }
    .location{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15px 0;
    }
    .location h4{
        font-size: 20px;
        color: #000;
        font-weight: bold;
    }
    /* brand */
    #brand{
        border-bottom: 1px solid #b8b7b7;
    }
    .brand{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15px 0;
    }
    .brand h4{
        font-size: 20px;
        color: #000;
        font-weight: bold;
    }
    /* Age level */
    #ageLevel{
        border-bottom: 1px solid #b8b7b7;
    }
    .ageLevel{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15px 0;
    }
    .ageLevel h4{
        font-size: 20px;
        color: #000;
        font-weight: bold;
    }
    /* Condition */
    #condition{
        border-bottom: 1px solid #b8b7b7;
    }
    .condition{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15px 0;
    }
    .condition h4{
        font-size: 20px;
        color: #000;
        font-weight: bold;
    }
    /* rating */
    #rating{
        border-bottom: 1px solid #b8b7b7;
    }
    .rating{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15px 0;
    }
    .rating h4{
        font-size: 20px;
        color: #000;
        font-weight: bold;
    }
    .ratingCheck-item{
        display: flex;
        align-items: center;
    }
    .checkboxStar{
        margin-left: 10px;
        display: flex;
        align-items: center;
    }
    .checkboxStar .icon-star{
        margin-left: 5px;
    }
    .ratingCheck{
        margin-bottom: 15px;
    }
    /* price */
    #price{
        border-bottom: 1px solid #b8b7b7;
    }
    .price{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15px 0;
    }
    .price h4{
        font-size: 20px;
        color: #000;
        font-weight: bold;
    }
    .first-last-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .btn-first,.btn-last{
        width: 150px;
        height: 40px;
        border: 1px solid #b8b7b7;
        border-radius: 10px;
        text-align: center; 
        padding-top: 6px;
    }
    .btn-save{
        width: 100%;
        height: 40px;
        border: 1px solid #5a4098;
        margin: 15px 0;
        background: none;
        border-radius: 10px;
        font-size: 20px;
    }
    .price-wrapper{
        margin-bottom: 15px;
    }
    .price-destination{
        display: flex;
        align-items: center;
    }
    .destination-item{
        display: flex;
        align-items: center;
        padding: 5px 0;
        margin-left: 10px;
    }
    .destination-item .space{
        padding: 0 10px;
    }
    /* right */
    .actionFigure .right{
        width: 920px;
        height: auto;
    }
    .navShowData{
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
    .navShowData .nav h5{
        font-size: 15px;
        color: #000;
    }
    .nav span{
        font-size: 15px;
        color: #000;
        font-weight: bold;
    }
    .sortBy{
        display: flex;
        align-items: center;
    }
    .sortBy .sort{
        font-size: 15px;
        color: #000;
        font-weight: bold;
    }







    /* showProduct */
    .showProduct-wrapper{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 5px;
    }
    .product{
        flex: 0 0 calc(20% - 10px);
        height: auto;
        border-radius: 10px;
        /* width: calc(16% - 10px);  */
        overflow: hidden;
        margin-top: 20px;
        border: 1px solid #b8b7b7;
        box-shadow: 0 0 rgba(0, 0, 0, 1);
    }
    .image{
        width: 100%;
        height: auto;
    }
    .image img{
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        object-fit: cover;
        width: 100%;
        height: auto
    }
    .content{
        margin-left: 10px;
    }
    .content h5{
        font-size: 18px;
        color: #000;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .price-after{
        margin-top: 5px;
        font-size: 22px;
        color: #000;
        font-weight: bold;
    }
    .discount{
        display: flex;
        align-items: center;
        margin-top: 5px;
    }
    .cent{
        padding: 3px 5px;
        border-radius: 10px;
        color:rgb(224, 58, 58) ;
        background: #ffd1d1;
    }
    .price-before{
        margin-left: 10px;
        text-decoration: line-through;
        color: #868585;
    }
    .locationProduct{
        display: flex;
        align-items: center;
        margin-top: 5px;
    }
    .locationProduct .icon-rounded{
        font-size: 20px;
    }
    .locationProduct p{
        margin-left: 5px;
        color: #868585;
    }
    .reviews{
        display: flex;
        align-items: center;
        margin-top: 5px;
    }
    .icon-kidstar{
        font-size: 20px;
        color: burlywood;
    }
    .stars{
        margin-left: 5px;
        color: #000;
        color: #868585;
    }
    .solds{
        color: #868585;
        margin-left: 15px;
        margin-left: 10px;
        padding-left: 10px;
        border-left: 1px solid #c5c2c2;
    }

    /* Cart */
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
        background: #7f7f7f;
    }
    .cartParent{
        width: 450px;
        height:auto;
        background: #fff;
        border-radius: 10px;
        border: 1px solid rgb(216, 214, 214);
        
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