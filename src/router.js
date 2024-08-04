import { createWebHistory, createRouter, createWebHashHistory } from 'vue-router'

import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Product from './pages/Product.vue'
import Home from './pages/Home.vue'
import ProductItem from './components/product/productItem.vue'
import ProductDetail from './pages/ProductDetail.vue'
import Search from './pages/Search.vue'
import Cart from './components/home/Cart.vue'
import CartDetail from './pages/CartDetail.vue'
import Checkout_Information from './pages/Checkout_Information.vue'
import Account_setting from './pages/Account_setting.vue'
import Create_product from './pages/Create_product.vue'
import Update_product from './pages/Update_product.vue'
import Reset_password from './pages/Reset_password.vue'
import Forgot_password from './pages/Forgot_password.vue'
import CategoriID from './pages/CategoriID.vue'
const routes = [
  { path: '/login', component: Login },
  { path: '/forgotpassword', component: Forgot_password },
  { path: '/resetpassword', component: Reset_password },
  { path: '/register', component: Register},
  { path: '/', component: Home},
  { path: '/product/', component: Product},
  { path: '/product/:id', component: ProductDetail},
  { path: '/search/:id',name:'search', component:Search},
  { path: '/cartdetail/',name:'cartdetail', component:CartDetail},
  { path: '/checkoutinformation/',name:'checkoutinformation', component:Checkout_Information},
  { path: '/accountsetting/',name:'accountsetting', component:Account_setting},
  { path: '/createproduct/',name:'createproduct', component:Create_product},
  { path: '/updateproduct/',name:'updateproduct', component:Update_product},
  { path: '/categories/:id',name:'categories', component:CategoriID}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router