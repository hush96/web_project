import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import Newslist from '../components/news/Newslist.vue'
import Detail from '../components/news/Detail.vue'

axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/newslist'
  },
  {
    path: '/newslist',
    component: Newslist
  },
  {
    path: '/news/detail/:id',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
