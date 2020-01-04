import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './plugins/vant'
import Header from './components/zujian/Header.vue'

// 底部封装的组件
import Tab from './components/zujian/Tab.vue'

Vue.component('Header', Header)

Vue.component('Tab', Tab)
Vue.prototype.$http = axios
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'

Vue.filter('dataFormat', function(dateStr, pattern = '') {
  var dt = new Date(dateStr)

  var year = dt.getFullYear()

  var month = dt.getMonth() + 1

  month = month < 10 ? '0' + month : month

  var day = dt.getDate()
  day = day < 10 ? '0' + day : day

  return `${year}-${month}-${day}`

})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
