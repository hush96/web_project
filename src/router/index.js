import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import ImgList from '../components/image/ImgList.vue'
import imgDatails from '../components/image/imgDatails.vue'
import axios from 'axios'
=======
import axios from 'axios'
<<<<<<< HEAD
import Newslist from '../components/news/Newslist.vue'
import Detail from '../components/news/Detail.vue'
>>>>>>> e3ac08e75e47316204cf97755f058679cdd8ffa0

axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios

=======
import List from '../components/goods/List.vue'
import Detail from '../components/goods/Detail.vue'
import Goodsdesc from '../components/goods/Goodsdesc.vue'
import Cart from '../components/goods/Cart.vue'
>>>>>>> faf7d14a1014b21116e7498ba74a027ba9fcf47f
Vue.use(VueRouter)

axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios

const routes = [
  {
    path: '/',
<<<<<<< HEAD
    redirect: '/photo/list'
  },
  {
    path: '/photo/list',
    name: 'ImgList',
    component: ImgList
  },
  {
    path: '/photo/info',
    name: 'imgDatails',
    component: imgDatails
=======
<<<<<<< HEAD
    redirect: '/newslist'
  },
  {
    path: '/newslist',
    component: Newslist
  },
  {
    path: '/news/detail/:id',
    component: Detail
=======
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
>>>>>>> faf7d14a1014b21116e7498ba74a027ba9fcf47f
>>>>>>> e3ac08e75e47316204cf97755f058679cdd8ffa0
  }
]

const router = new VueRouter({
  routes
})

export default router
