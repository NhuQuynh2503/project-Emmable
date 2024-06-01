//import './assets/main.css'

import { createApp } from 'vue'
import "./assets/main.css"
import router from './router'
import App from './App.vue'
import { Icon } from '@iconify/vue'
const app = createApp(App)
app.component('Icon',Icon)
app.use(router)
app.mount('#app')
//createApp(App).mount('#app')
