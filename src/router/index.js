import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Search from '../components/Search.vue'
import Member from '../components/Member.vue'
import Addgoods from '../components/Addgoods.vue'
import ImgList from '../components/image/ImgList.vue'
import imgDatails from '../components/image/imgDatails.vue'
import Newslist from '../components/news/Newslist.vue'
import NewDetail from '../components/news/NewDetail.vue'
import List from '../components/goods/List.vue'
import Detail from '../components/goods/Detail.vue'
import Goodsdesc from '../components/goods/Goodsdesc.vue'
import Cart from '../components/goods/Cart.vue'
import pinglun from '../components/pinglun.vue'

axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/member',
    component: Member
  },
  {
    path: '/search',
    component: Search
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
  },
  {
    path: '/newslist',
    name: 'Newslist',
    component: Newslist
  },
  {
    path: '/news/detail/:id',
    component: NewDetail
  },
  {
    path: '/goods/list',
    component: List
  },
  {
    path: '/goods/detail/:id',
    component: Detail
  },
  {
    path: '/goodsdesc/:id',
    component: Goodsdesc
  },
  {
    path: '/shopcar',
    component: Cart
  },
  { path: '/goodscomments', component: pinglun },
  { path: '/addgoods', component: Addgoods }
]

const router = new VueRouter({
  routes
})

export default router
