import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import List from '../components/goods/List.vue'
import Detail from '../components/goods/Detail.vue'
import Goodsdesc from '../components/goods/Goodsdesc.vue'
import Cart from '../components/goods/Cart.vue'
Vue.use(VueRouter)

axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios

const routes = [
  {
    path: '/',
    redirect: '/goods/list'
  },
  {
    path: '/goods/list',
    name: 'list',
    component: List
  },
  {
    path: '/goods/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/goodsdesc/:id',
    name: 'goodsdesc',
    component: Goodsdesc
  },
  {
    path: '/shopcar',
    name: 'cart',
    component: Cart
  }
]

const router = new VueRouter({
  routes
})

export default router
