<template>
   <div>
        <section id="productDetail-container">
            <div class="productDetail-child" v-if="productDetailId">
                <!-- tieu de -->
                <div class="navbar">
                        <div class="nav-item">
                            <RouterLink class="nav">Home</RouterLink>
                            <Icon class="arrow-right" icon="material-symbols:arrow-forward-ios"></Icon>
                        </div>
                        <div class="nav-item">
                            <RouterLink class="nav">Film & Music</RouterLink>
                            <Icon class="arrow-right" icon="material-symbols:arrow-forward-ios"></Icon>
                        </div>
                        <div class="nav-item">
                            <RouterLink class="nav">Guitar & Bass</RouterLink>
                            <Icon class="arrow-right" icon="material-symbols:arrow-forward-ios"></Icon>
                        </div>
                        <div class="nav-item">
                            <RouterLink class="nav">Pick Guitar & Bass</RouterLink>
                            <Icon class="arrow-right" icon="material-symbols:arrow-forward-ios"></Icon>
                        </div>
                    <div class="nav-item">
                            <RouterLink class="nav">Awesome Brand & Cool product with nice</RouterLink>
                    </div>
                </div>
                    <!-- noi dung san pham -->
                <div class="item-wrapper">
                    <div class="item">
                        <div class="left">
                                <div class="image-top">
                                    <img :src="productDetailId.thumbnails" alt="">
                                </div>
                                <div class="image-bottom">
                                    <img src="" alt="">
                                    <img src="" alt="">
                                    <img src="" alt="">
                                    <img src="" alt="">
                                    <img src="" alt="">
                                </div>
                        </div>
                        <div class="right" >
                                <div class="right-first">
                                    <h2>{{ productDetailId.name }}</h2>
                                    <div class="star">
                                        <Icon class="icon-star" icon="material-symbols:kid-star"></Icon>
                                        <p class="review">{{ listDetail.star }}</p>
                                        <p class="sold"> Sold {{ listDetail.sold }}</p>
                                    </div>
                                    <div class="priceBefore">${{ (productDetailId.discount === 0 ? productDetailId.price : 
                                    (productDetailId.price * (100 - productDetailId.discount) / 100)).toFixed(2) }}</div>
                                    <div class="discount">
                                        <p class="percent">{{productDetailId.discount}}%</p>
                                        <p class="price">${{ productDetailId.price }}</p>
                                    </div>
                                </div>
                                <div class="right-second">
                                    <div class="name-color">
                                        <h4>Color :</h4>
                                        <p>{{ selectedColor }}</p>
                                    </div>
                                    <div class="btn-color">
                                        <button :class="{style : selectedColor === 'Black'}" class="btn-black" @click="selecColor('Black')">Black</button>
                                        <button :class="{style : selectedColor === 'Yellow'}" class="btn-yellow" @click="selecColor('Yellow')">Yellow</button>
                                        <button :class="{style : selectedColor === 'Purple'}" class="btn-purple" @click="selecColor('Purple')">Purple</button>
                                        <button :class="{style : selectedColor === 'Turquoiser'}" class="btn-turquoiser" @click="selecColor('Turquoiser')">Turquoiser</button>
                                    </div>
                                </div>
                                <div class="right-third">
                                    <h3>Details</h3>
                                    <p class="condition">Condition<span>{{ details.condition }}</span></p>
                                    <p class="unit">Unit weight<span>{{ details.unit }}</span></p>
                                    <p class="category">Category<span>{{ productDetailId.category_id }}</span></p>
                                    <p class="storefront">Storefront<span>{{ details.storefront }}</span></p>
                                    <p class="rombo">{{ productDetailId.description }}</p>
                                    <p class="origami">{{ details.origami }}</p>
                                    <p class="content">{{ details.content }}</p>
                                </div>
                        </div>
                        <!-- chi tiet san pham -->
                       <div style="width: 250px;">
                            <div id="detailOrder_wrapper" v-if="isShowDetailOrder">
                                <div class="detailOrder-child">
                                    <div class="orderImage">
                                        <img :src="productDetailId.thumbnails" alt="">
                                        <p>{{ selectedColor }}</p>
                                    </div>
                                    <div class="orderContent">
                                        <p class="inStock">In Stock</p>
                                        <Icon class="icon-tick" icon="material-symbols:fitbit-check-small"></Icon>
                                    </div>
                                </div>
                                <!-- quantity -->
                                <div class="product-quantity">
                                    <h6>Quantity</h6>
                                    <div class="quantity-controls">
                                        <input type="number" value="1" min="1" id="quantity">
                                        <button class="decrease">-</button>
                                        <button class="increase">+</button>
                                    </div>
                                </div>
                                <!-- subtotal -->
                                <div class="subtotal">
                                    <h6>Subtotal</h6>
                                    <div class="sub-price">
                                        <p class="subtotalPrice">${{ productDetailId.price }}</p>
                                        <p class="subtotalPriceBefore">${{ (productDetailId.discount === 0 ? productDetailId.price : 
                                    (productDetailId.price * (100 - productDetailId.discount) / 100)).toFixed(2) }}</p>
                                    </div>
                                </div>
                                <!-- 2 btn-buyNow -->
                                <div class="btn-parent">
                                    <button class="add">
                                        <Icon class="icon-cart" icon="material-symbols:shopping-cart"></Icon>
                                        Add To Cart
                                    </button>
                                    <button class="buyNow">Buy Now</button>
                                </div>
                                <div class="wishlistShare">
                                    <div class="wishlist">
                                        <Icon class="heart" icon="ic:baseline-favorite-border"></Icon>
                                        <p class="contentwish">Wishlist</p>
                                    </div>
                                    <div class="share">
                                        <Icon class="share" icon="ic:baseline-share"></Icon>
                                        <p class="contentshare">Share</p>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            <div class="rombo-wrapper">
                    <div class="rombo-item">
                        <div class="nameImage">
                            <img src="https://img.freepik.com/free-vector/golden-elegant-logo-flat-style_52683-17268.jpg?t=st=1717296024~exp=1717299624~hmac=71610d93c8e57c312d0de2ca8795af82aff7724b607b1ceebdf9e05beecef8b6&w=740" alt="">
                            <div class="nameTime">
                                <div class="nameCheck">
                                    <Icon class="check-icon" icon="mdi:check-bookmark"></Icon>
                                    <h4 class="name">Rombo</h4>
                                </div>
                                <div class="address">
                                    <p class="ipaddress">Jakarta Barat</p>
                                    <p class="timeonline">Online 29 Minutes ago</p>
                                </div>
                            </div>
                        </div>
                        <div class="review">
                            <div class="review-star">
                                <div class="star">
                                    <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                    <p>4.8</p>
                                </div>
                                <div class="bout-review">
                                    <p>1.2k reviews</p>
                                </div>
                            </div>
                            <div class="sold">
                                <p>700+</p>
                                <p>Product sold</p>
                            </div>
                            <div class="time">
                                <p>1-2 days</p>
                                <p>Order Processing Time</p>
                            </div>
                        </div>
                        <div class="button">
                            <button><Icon class="icon-chat" icon="material-symbols-light:chat-rounded"></Icon>Chat Now</button>
                            <button>Follow</button>
                        </div>
                    </div>
            </div>
                <!-- phan danh gia review cua khach hang -->
            <div class="comment">
                        <div class="comment-left">
                            <div class="overal-wrapper">
                                <h5>Overall rating</h5>
                                <div class="review-stars">
                                    <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                    <p class="numbers">4.8</p>
                                    <p class="number-reviews">of 148 review</p>
                                </div>
                                <div class="listReview" v-for="item in listReview" :key="item.id">
                                    <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                    <p class="number-star">{{ item.numberStar }}</p>
                                    <div class="line"> <div class="red-overlay"></div></div>
                                    <p class="number-use">{{ item.numberUse }}</p>
                                </div>
                            </div>
                            <div class="review-filter-wrapper">
                                <div class="filter-child">
                                    <h5>Review Filter</h5>
                                    <a href="">Reset All</a>
                                </div>
                                <div class="media-child">
                                    <div class="media-child-child">
                                        <h5>Media</h5>
                                        <Icon class="icon-arrow-down" icon="material-symbols-light:keyboard-arrow-down"></Icon>
                                    </div>
                                    <div class="media-checkbox">
                                        <input class="checkbox-media" type="checkbox" name="" id="">
                                        <p>Watch Photo & Video</p>
                                    </div>
                                </div>
                                <div class="reviewtopic-child">
                                    <div class="reviewtopic-chid-child">
                                        <h5>Review topic</h5>
                                        <Icon class="icon-arrow-down" icon="material-symbols-light:keyboard-arrow-down"></Icon>
                                    </div>
                                    <div class="reviewtopic-checkbox-container">
                                        <div class="reviewtopic-checkbox" v-for="item in reviewTopic" :key="item.id">
                                            <input class="checkbox" type="checkbox" name="" id="">
                                            <p>{{ item.value }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="rating-child">
                                    <div class="rating-child-child">
                                        <h5>Rating</h5>
                                        <Icon class="icon-arrow-down" icon="material-symbols-light:keyboard-arrow-down"></Icon>
                                    </div>
                                    <div class="rating-checkbox" v-for="item in rating">
                                        <input class="checkbox-rating" type="checkbox" name="" :id="item.id" @change="toggleColor(item.id)">
                                        <!-- :id="item.id" : xac dinh ptu duy nhat
                                        su kien change se duoc gui va goi toi ham toggleColor(item.id) -->
                                        <p>{{ item.value }}</p>
                                        <Icon class="icon-star" icon="material-symbols-light:kid-star" :class="{ 'yellow-star': checkedIds.includes(item.id) }"></Icon>
                                        <!-- includes co tac dung kiem tra xem item.id co chua trong checkedIds hay khong
                                        neu co thi class yellow-star duoc add vao -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="comment-right">
                            <div class="customer-wrapper">
                                <h3>Customer Reviews</h3>
                                <div class="sortby">
                                    <h5>Sort  by :</h5>
                                    <p>Newest</p>
                                    <Icon class="icon-arrow-down" icon="material-symbols-light:keyboard-arrow-down"></Icon>
                                </div>
                            </div>
                            <div class="writeReview">
                                <p>Share your thoughts with other customers.</p>
                                <button class="btn">Write a review</button>
                            </div>
                            <div class="personComment-container">
                                <!-- cac comment cua khach -->
                                <div class="personComment-child">
                                    <div class="person-nav">
                                    <img src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
                                    <div class="information">
                                        <div class="name">Vincent</div>
                                        <div class="reviewStar-parent">
                                            <div class="reviewStar">
                                                <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                                <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                                <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                                <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                                <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                            </div>
                                            <p>30 July 2022</p>
                                        </div>
                                    </div>
                                    <Icon class="icon-menu" icon="gravity-ui:ellipsis-vertical"></Icon>
                                </div>
                                <div class="contentComment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur expedita, labore a, eius dolorum delectus atque dolorem, rerum vitae quia necessitatibus non quam sunt porro eveniet placeat sint qui. Aliquid.</div>

                                <div class="imageReply">
                                    <img src="https://savani.vn/images/products/2023/08/17/large/ao-so-mi-dai-tay-nam-mls133k3-2-z01-5_1692261841.jpg" alt="">
                                    <img src="https://cdn0918.cdn4s1.com/media/san-pham/ao-so-mi-nam/ao-so-mi-nam-form-rong-vigo-co-v-jbagy-js03-12.jpg" alt="">
                                </div>
                                <div class="reply-parent">
                                    <div class="personReply">
                                        <Icon class="icon-like" icon="ic:outline-recommend"></Icon>
                                        <p>12 person helped</p>
                                        <p class="viewReply">View Reply</p>
                                    </div>
                                </div>
                                </div>
                                <div class="personComment-child">
                                    <div class="person-nav">
                                    <img src="https://cdn.pixabay.com/photo/2016/01/10/22/07/woman-1132617_1280.jpg" alt="">
                                    <div class="information">
                                        <div class="name">Vincent</div>
                                        <div class="reviewStar-parent">
                                            <div class="reviewStar">
                                                <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                                <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                                <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                                <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                                <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                            </div>
                                            <p>30 July 2022</p>
                                        </div>
                                    </div>
                                    <Icon class="icon-menu" icon="gravity-ui:ellipsis-vertical"></Icon>
                                </div>
                                <div class="contentComment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur expedita, labore a, eius dolorum delectus atque dolorem, rerum vitae quia necessitatibus non quam sunt porro eveniet placeat sint qui. Aliquid.</div>
                                <div class="reply-parent">
                                    <div class="personReply">
                                        <Icon class="icon-like" icon="ic:outline-recommend"></Icon>
                                        <p>12 person helped</p>
                                        <p class="viewReply">View Reply</p>
                                    </div>
                                </div>
                                </div>
                                <div class="personComment-child">
                                    <div class="person-nav">
                                    <img src="https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_1280.jpg" alt="">
                                    <div class="information">
                                        <div class="name">Vincent</div>
                                        <div class="reviewStar-parent">
                                            <div class="reviewStar">
                                                <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                                <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                                <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                                <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                                <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                            </div>
                                            <p>30 July 2022</p>
                                        </div>
                                    </div>
                                    <Icon class="icon-menu" icon="gravity-ui:ellipsis-vertical"></Icon>
                                </div>
                                <div class="contentComment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur expedita, labore a, eius dolorum delectus atque dolorem, rerum vitae quia necessitatibus non quam sunt porro eveniet placeat sint qui. Aliquid.</div>
                                <div class="imageReply">
                                    <img src="https://savani.vn/images/products/2023/08/17/large/ao-so-mi-dai-tay-nam-mls133k3-2-z01-5_1692261841.jpg" alt="">
                                    <img src="https://cdn0918.cdn4s1.com/media/san-pham/ao-so-mi-nam/ao-so-mi-nam-form-rong-vigo-co-v-jbagy-js03-12.jpg" alt="">
                                </div>
                                <div class="reply-parent">
                                    <div class="personReply">
                                        <Icon class="icon-like" icon="ic:outline-recommend"></Icon>
                                        <p>12 person helped</p>
                                        <p class="viewReply">View Reply</p>
                                    </div>
                                </div>
                                </div>
                                <div class="personComment-child">
                                    <div class="person-nav">
                                    <img src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg" alt="">
                                    <div class="information">
                                        <div class="name">Vincent</div>
                                        <div class="reviewStar-parent">
                                            <div class="reviewStar">
                                                <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                                <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                                <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                                <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                                <Icon class="icon-star" icon="material-symbols-light:kid-star"></Icon>
                                            </div>
                                            <p>30 July 2022</p>
                                        </div>
                                    </div>
                                    <Icon class="icon-menu" icon="gravity-ui:ellipsis-vertical"></Icon>
                                </div>
                                <div class="contentComment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur expedita, labore a, eius dolorum delectus atque dolorem, rerum vitae quia necessitatibus non quam sunt porro eveniet placeat sint qui. Aliquid.</div>
                                <div class="reply-parent">
                                    <div class="personReply">
                                        <Icon class="icon-like" icon="ic:outline-recommend"></Icon>
                                        <p>12 person helped</p>
                                        <p class="viewReply">View Reply</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

            </div>
                <!-- chi tiet san pham -->
            
            </div>
        </section>
   </div>
</template>
<script setup>
import { ref,onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import { productId } from '@/services/products';
    const isShowDetailOrder = ref(false)
    
    const checkedIds = ref([]);
    const toggleColor = (id) => {
        console.log(id);
        if (checkedIds.value.includes(id)) {
            checkedIds.value = checkedIds.value.filter(item => item !== id);
        } else {
            checkedIds.value.push(id);
        }
    };
    const image = ref(
        {
            image_1: 'https://images.pexels.com/photos/20363394/pexels-photo-20363394/free-photo-of-th-i-trang-b-d-ao-s-mi-ca-v-t.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            image_2: 'https://images.pexels.com/photos/10040216/pexels-photo-10040216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            image_3: 'https://images.pexels.com/photos/5856083/pexels-photo-5856083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            image_4: 'https://images.pexels.com/photos/19272484/pexels-photo-19272484/free-photo-of-ng-i-dan-ong-d-ng-d-i-mu-fedora-mau-d.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            image_5: 'https://images.pexels.com/photos/5061274/pexels-photo-5061274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            image_6: 'https://images.pexels.com/photos/17627753/pexels-photo-17627753/free-photo-of-dan-ong-ao-s-mi-d-ng-chan-dung.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
    )
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
    const reviewTopic = ref([
        {
            id: 1, value: 'Quality'
        },
        {
            id: 2, value: 'Packaging'
        },
        {
            id: 3, value: 'Price'
        },
        {
            id: 4, value: 'As descripbed'
        },
        {
            id: 5, value: 'Delivery'
        }
    ])
    const listReview = ref([
        { 
            id:1,
            numberStar:"5.0",
            numberUse:2347
        },
        {
            id:2,
            numberStar:"4.8",
            numberUse:256
        },
        {
            id:3,
            numberStar:"4.5",
            numberUse:23
        },
        {
            id:4,
            numberStar:"4.0",
            numberUse:20
        },
        {
            id:5,
            numberStar:"3.0",
            numberUse:10
        }
    ])
    const details = ref({
        condition:" New",
        unit:"10 g",
        category:" Pick Guitar & Bass",
        storefront:"Guitar : Pick",
        rombo:"The Rombo Origami Pick Set (4 guitar picks) consis of",
        origami:"4 x Rombo Origami | 0.75mm",
        content:"As the world's leading provider of English language teaching courses and qualifications, we offer a comprehensive range of training and support to help teachers develop their professional skills."
    })
    // color
    const selectedColor = ref("");  // bien luu mau sac da chon
    const selecColor = (color) => { // gan mau cho gia tri bien selectedColor
        selectedColor.value = color;
        isShowDetailOrder.value=true
    }

    const listDetail = ref(
        {   
            title:"Awesome Brand & Cool product with nice color - White",
            star:4.5,
            review:"1.3k review",
            sold:"700+",
            priceBefore:"85.00",
            percent:40,
            price:"Rp45.00"
        }
    );

    const productDetailId = ref('')
    const route = useRoute()
    const fetchProductDetail = async(idProduct) => {
        try {
            const response = await productId(idProduct);
            console.log("log ra response id tao coi",response);
            
            productDetailId.value = response.data.data;
            console.log("log ra product detail id tao coi",productDetailId.value);
        } catch (error) {
            console.log('Failed to fetch product detail:', error);
            
        }
    }
    onMounted(() => {
        const id = route.params.id;
        fetchProductDetail(id);
    })
    watch(() => route.params.id, (newId) =>{
        fetchProductDetail(newId);
    })
    
</script>
<style scoped>
    .style{
        background: #b8b7b7 !important;
    }
    #productDetail-container{
        background: #fff;
        width: 100%;
        height: auto;
    }
    .productDetail-child{
        padding: 10px 150px;
    }
    .navbar{
        display: flex;
        justify-content: left;
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
    .item{
        display: flex;
        margin-top: 20px;
        justify-content: space-between;
        border-bottom: 1px solid #b8b7b7;
    }
    .item .left{
        width: 400px;
        height: 500px;
    }
    .left .image-top img{
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 10px;
    }
    .left .image-bottom{
        display: flex;
        flex-wrap: wrap;
        gap: 14.5px;
    }
    .left .image-bottom img{
        width: 60px;
        height: 70px;
        object-fit: cover;
        border-radius: 10px;
        
    }
    .item .right{

        width: 600px;
        height: 700px;
    }
    .item .right h2{
        font-size: 30px;
        color: #000;
        font-weight: bold
    }
    .star {
        display: flex;
        align-items: center;
    }
    .star .icon-star {
        font-size: 20px;
        color: rgb(234, 191, 106);
        margin-right: 5px;
    }
    .star p {
        margin: 0 10px 0 0;
        font-size: 14px;
    }
    .right{
        margin-left: 30px;
    }
    .right-first{
        border-bottom: 1px solid #b8b7b7;
    }
    .right .priceBefore{
        font-size: 25px;
        font-weight: bold;
    }
    .discount{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .discount .percent{
        border-radius: 5px;
        padding: 4px 5px;
        background: #ffd1d1;
        margin-right: 10px;
        color: rgb(227, 72, 72);
    }
    .discount .price{
        text-decoration: line-through;
        color: #b2afaf;
    }
    .right-second{
        border-bottom: 1px solid #b8b7b7;
    }
    .name-color{
        display: flex;
        align-items: center;
    }
    .name-color h4{
        color: #000;
        font-size: 20px;
        font-weight: bold;
    }
    .name-color p{
        font-size: 15px;
        color: #757474;
        margin-top: 3px;
        padding-left: 10px;
    }
    .btn-color{
        margin-bottom: 20px;
    }
    .btn-color .btn-black,.btn-yellow,.btn-purple,.btn-turquoiser{
        padding: 10px 25px;
        color: #000;
        background: none;
        border: 1px solid #b8b7b7;
        border-radius: 5px;
        margin-top: 10px;
    }
    .btn-color .btn-yellow,.btn-purple,.btn-turquoiser{
        margin-left: 10px;
    }
    .right-third{
        margin-top: 15px;
        display: flex;
        flex-direction: column;
    }
    .right-third h3{
        font-size: 20px;
        font-weight: bold;
        color: #000;
    }
    .right-third p{
        display: flex;
        align-items: center;
        padding: 3px 0;
    }
    .right-third span{
        margin-left: 20px;
        display: inline-block;
        color: #000;
        font-weight: bold;
    }
    .right-third .rombo{
        padding: 15px 0;
    }
    .rombo-wrapper{
        margin-top: 20px;
        border-bottom: 1px solid #b8b7b7;
    }
    .rombo-item{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .nameImage{
        display: flex;
        align-items: center;
    }
    .nameImage img{
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 50%;
    }
    .nameTime{
        margin-left: 10px;
    }
    .nameCheck{
        display: flex;
        align-items: center;
    }
    .nameCheck .check-icon{
        font-size: 25px;
        color: #4CAF50;
    }
    .nameCheck .name{
        font-size: 25px;
        color: #000;
        font-weight: bold;
        margin-left: 3px;
    }
    .address{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .address .timeonline{
        margin-left: 5px;
    }
    .rombo-item .review{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
    .review-star{
        margin-right: 50px;
        padding-right: 30px;
        border-right: 1px solid #d1cfcf;
    }
    .time{
        margin-left: 50px;
        padding-left: 30px;
        border-left: 1px solid #d1cfcf;
    }
    .button button{
        padding: 15px 20px;
        margin: 0 5px;
        background: none;
        border-radius: 10px;
        border: 1px solid rgb(80, 4, 80);
    }
    .icon-chat{
        font-size: 15px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
    }
    .comment{
        display: flex;
        margin-top: 20px;
    }
    .comment .comment-left{
        width: 400px;
        height: auto;

    }
    .comment .comment-right{
        width: 600px;
        height: auto;

        margin-left: 50px;
    }
    .overal-wrapper{
        border: 1px solid rgb(219, 216, 216);
        border-radius: 10px;
        padding: 10px;
    }
    .overal-wrapper h5{
        font-size: 15px;
        color: #000;
        margin: 5px;
    }
    .review-stars{
        display: flex;
        align-items: center;
    }
    .review-stars .icon-star{
        font-size: 30px;
        color:rgb(234, 191, 106);
    }
    .review-stars p{
        font-size: 15px;
        padding: 0 5px;
    }
    .review-stars .numbers{
        font-size: 30px;
    }
    .review-stars .number-reviews{
        margin-top: 10px;
    }
    .listReview{
        display: flex;
        align-items: center;
    }
    .listReview .icon-star{
        color:rgb(234, 191, 106) ;
        margin-left: 3px;
    }
    .listReview .number-star{
        margin: 0 5px;
    }
    .listReview .line{
        position: relative;
        width: 80%; /* Chiều rộng của đường line */
        height: 2px; /* Chiều cao của đường line */
        background-color: #b3b1b1;
        margin-top: 15px;
        padding: 0 10px;
    }
    .red-overlay {
        position: absolute; /* Vị trí tuyệt đối để chồng lên đường line */
        top: 0; /* Đặt top và left để phần tử chồng lên góc trên bên trái của đường line */
        left: 0;
        width: 50%; /* Chiều rộng của phần overlay đỏ */
        height: 100%; /* Chiều cao của phần overlay đỏ */
        background-color: rgb(33, 20, 20); /* Màu sắc của phần overlay đỏ */
        opacity: 0.5; /* Độ mờ của phần overlay đỏ (0.5 là 50% độ mờ) */
    }
    .listReview .number-use{
        margin-left: 5px;
    }

    /* ghi chu */
    .review-filter-wrapper{
        border: 1px solid rgb(219, 216, 216);
        border-radius: 10px;
        padding: 10px;
        margin-top: 20px;
    }
    .filter-child{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #b8b7b7;
        margin: 20px 10px 10px 10px; /* Combined margin shorthand */
        padding-bottom: 10px; /* Added padding-bottom to create space inside the border */
        
    }
    .filter-child h5{
        font-size: 15px;
        color: #000;
    }
    .filter-child a{
        text-decoration: none;
    }

    /* media */

    .media-child{
        border-bottom: 1px solid #b8b7b7;
        margin: 20px 10px 10px 10px; 
        /* top right bottom left */
        padding-bottom: 10px; 
    }
    .media-child-child{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .media-child-child h5{
        font-size: 15px;
        color: #000;
    }
    .media-child-child .icon-arrow-down{
        font-size: 25px;
        margin-top: 3px;
    }
    .media-checkbox{
        display: flex;
        align-items: center;
    }
    .media-checkbox p{
        margin-left: 5px;
    }

    /* reviewTopic */

    .reviewtopic-child{
        border-bottom: 1px solid #b8b7b7;
        margin: 20px 10px 10px 10px; /* Combined margin shorthand */
        padding-bottom: 10px; /* Added padding-bottom to create space inside the border */
    }
    .reviewtopic-chid-child{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .reviewtopic-chid-child h5{
        font-size: 15px;
        color: #000;
    }
    .reviewtopic-chid-child .icon-arrow-down{
        font-size: 25px;
        margin-top: 3px;
    }
    .reviewtopic-checkbox{
        display: flex;
        align-items: center;
    }
    .reviewtopic-checkbox p{
        margin-left: 5px;
    }

    /* Rating */

    .rating-child{
        margin: 20px 10px 10px 10px; /* Combined margin shorthand */
        padding-bottom: 10px; /* Added padding-bottom to create space inside the border */
    }
    .rating-child-child{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .rating-child-child h5{
        font-size: 15px;
        color: #000;
    }
    .rating-child-child .icon-arrow-down{
        font-size: 25px;
        margin-top: 3px;
    }
    .rating-checkbox{
        display: flex;
        align-items: center;
    }
    .rating-checkbox p{
        margin-left: 5px;
    }
    
    /* su kien click hien mau star */
    .icon-star {
        color: grey;
        transition: color 0.3s;
    }

    .yellow-star {
        color: rgb(234, 191, 106);
    }


    /* right */

    .customer-wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 10px 10px 10px; /* Combined margin shorthand */
        padding-bottom: 10px; /* Added padding-bottom to create space inside the border */
    }
    .customer-wrapper h3{
        font-size: 20px;
        color: #000;
        font-weight: bold;

    }   
    .sortby{
        display: flex;
        align-items: center;
    }
    .sortby h5{
        font-size: 15px;
        color: #000;
        font-weight: bold;
        margin-right: 10px;
    }
    .sortby p{
        margin-right: 10px;
    }
    .writeReview{
        border-radius: 10px;
        height: 50px;
        border: 1px solid #b2afaf;
        margin: 10px 10px 10px 10px; /* Combined margin shorthand */
        padding: 10px; /* Added padding-bottom to create space inside the border */
        background: #f0eeee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .writeReview p{
        color: #000;
    }
    .writeReview .btn{
        padding: 8px 20px;
        border: none;
        background: rgb(133, 6, 147);
        color: #fff;
        border-radius: 10px;
    }
    .personComment-container .personComment-child{
        border-bottom: 1px solid #b8b7b7;
        margin: 10px 10px 10px 10px; /* Combined margin shorthand */
        padding-bottom: 10px;
    }
    .person-nav{
        display: flex;
        margin: 10px 10px 10px 10px; /* Combined margin shorthand */
        padding-top: 10px; /* Added padding-bottom to create space inside the border */
    }
    .contentComment{
        padding-left: 70px;
        margin-bottom: 5px;
    }
    .person-nav .icon-menu{
        font-size: 20px;
        margin-left: 300px;
        margin-top: 5px;
    }
    .person-nav img{
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
    }
    .information{
        margin-left: 10px;
    }
    .information .name{
        font-size: 15px;
        color: #000;
        font-weight: bold;
    }
    .reviewStar-parent{
        display: flex;
        align-items: center;
    }
    .information .icon-star{
        color: rgb(234, 191, 106);
    }
    .reviewStar-parent p{
        margin-left: 10px;
        margin-bottom: 5px;
    }
    .content{
        margin: 10px 10px 10px 0px;
    }
    .imageReply{
        display: flex;
        padding-left: 70px;
        margin-bottom: 10px;
    }
    .imageReply img{
        width: 70px;
        height: 60px;
        object-fit: cover;
        padding: 5px 5px 5px 0;
    }
    .personReply{
        display: flex;
        padding-left: 60px;
        align-items: center;
    }
    .personReply .icon-like{
        color: #000;
        font-size: 20px;
        margin-left: 10px;
    }   
    .personReply p{
        margin-left: 10px;
    }
    .personReply .viewReply{
        margin-left: 270px;
    }

    /* wrapper detail */
    #detailOrder_wrapper{
        width: 250px;
        height: 350px;
        border: 1px solid #b8b7b7;
        border-radius: 10px;
        margin-left: 10px;
    }
    /* chi tiet san pham */
    .detailOrder-child{
        display: flex;
        align-items: center;
        padding-left: 10px;
    }
    .orderImage{
        display: flex;
        align-items: center;
        width: 140px;
    }
    .orderImage img{
        width: 60px;
        height: 60px;
        object-fit: cover;
    }
    .orderImage p{
        margin-bottom: 50px;
        margin-left: 5px;
    }
    .orderContent{
        /* width: 50px;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 50px; */
        display: flex;
        align-items: center;
        margin-bottom: 50px;
        padding-left: 15px;
    }
    .orderContent .icon-tick{
        font-size: 25px;
        color: #4CAF50;

    }
    .subtotal{
        display: flex;
        margin: 10px 10px 10px 10px;
        align-items: center;
    }
    .subtotal h6{
        font-size: 15px;
        margin-top: 20px;
    }
    .sub-price{
        margin-left: 70px;
    }
    .sub-price .subtotalPrice{
        font-size: 12px;
        text-decoration: line-through;
    }
    .subtotal .subtotalPriceBefore{
        font-size: 20px;
        color: #000;
        font-weight: bold;
    }
    .btn-parent {
        display: flex;
        flex-direction: column;
        gap: 10px; /* khoảng cách giữa các nút */
        margin: 10px 10px 10px 10px;
    }

    .add,.buyNow {
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        background-color: #4CAF50; /* màu nền cho nút */
        color: white; /* màu chữ */
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .add{
        background: none;
        border: 1px solid #4CAF50;
        color: #4CAF50;
    }
    .icon-cart {
        margin-right: 8px; /* khoảng cách giữa icon và text */
        font-size: 18px; /* kích thước của icon */
    }
    /* quantity */
    .product-quantity {
        margin: 10px 10px 10px 10px;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
    .product-quantity h6{
        font-size: 15px;
    }
    .quantity-controls {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .quantity-controls .decrease,.increase {
        background-color: #f0f0f0;
        border: none;
        padding: 5px;
        cursor: pointer;
    }
    .quantity-controls .decrease{
        margin-right: 3px;
    }
    .quantity-controls input {
        width: 30px;
        text-align: center;
        margin: 0 8px;
    }
    .product-price {
        margin: 16px 0;
    }
    .wishlistShare{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px;
    }
    .wishlist,.share{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .iconheart,.iconshare{
        font-size: 25px;
    }
    .contentwish,.contentshare{
        margin-left: 3px;
    }
</style>