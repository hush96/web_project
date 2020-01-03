import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Home.vue'
import Search from '../components/Search.vue'
import Member from '../components/Member.vue'
import Shopcar from '../components/Shopcar.vue'
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
    component: Search
  },

]
const router = new VueRouter({
  routes
})

export default router
