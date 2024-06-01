import { createWebHistory, createRouter, createWebHashHistory } from 'vue-router'

import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Product from './pages/Product.vue'
import Home from './pages/Home.vue'
import ProductItem from './components/product/productItem.vue'
const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register},
  { path: '/', component: Home},
  { path:'/product', component: Product},
  { path:'/product/:id', component: ProductItem}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router