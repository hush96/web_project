import Vue from 'vue'
import VueRouter from 'vue-router'
import ImgList from '../components/image/ImgList.vue'
import imgDatails from '../components/image/imgDatails.vue'
import axios from 'axios'

Vue.use(VueRouter)

axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'
Vue.prototype.$http = axios

const routes = [
  {
    path: '/',
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
  }
]

const router = new VueRouter({
  routes
})

export default router
