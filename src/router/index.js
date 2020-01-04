import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Search from '../components/Search.vue'
import Member from '../components/Member.vue'
import Shopcar from '../components/Shopcar.vue'
import Addgoods from '../components/Addgoods.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/member',
    component: Member
  },
  {
    path: '/shopcar',
    component: Shopcar
  },
  {
    path: '/search',
    component: Search,
  
  },

    { path : '/addgoods' , component: Addgoods}
  
]
const router = new VueRouter({
  routes
})

export default router
