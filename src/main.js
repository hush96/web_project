import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './plugins/vant'
<<<<<<< HEAD
import Header from './components/zujian/Header.vue'
=======
import pinglun from './components/pinglun.vue'

Vue.component('pinglun', pinglun)

Vue.filter('dataFormat', function(dateStr, pattern = '') {
  var dt = new Date(dateStr)

  var year = dt.getFullYear()

  var month = dt.getMonth() + 1

  month = month < 10 ? '0' + month : month

  var day = dt.getDate()
  day = day < 10 ? '0' + day : day

  // if (pattern.toLowerCase() === 'yyy-mm-dd') {
  return `${year}-${month}-${day}`
  // } else {
  //   var hour = dt.getHours()

  //   var monent = dt.getMinutes()

  //   var seconds = dt.getSeconds()

  //   return `${year}-${month}-${day} ${hour}:${monent}:${seconds}`
  // }
})
>>>>>>> 94e8790f7d9e1b83eaac0aab173f03ba8978aed1

// 底部封装的组件
import Tab from './components/zujian/Tab.vue'

Vue.component('Header', Header)

Vue.component('Tab', Tab)
Vue.prototype.$http = axios
Vue.config.productionTip = false
<<<<<<< HEAD
axios.defaults.baseURL = 'http://www.liulongbin.top:3005/'

Vue.filter('dataFormat', function(dateStr, pattern = '') {
=======
Vue.filter('dataFormat', function (dateStr, pattern = '') {
>>>>>>> 94e8790f7d9e1b83eaac0aab173f03ba8978aed1
  var dt = new Date(dateStr)

  var year = dt.getFullYear()

  var month = dt.getMonth() + 1

  month = month < 10 ? '0' + month : month

  var day = dt.getDate()
  day = day < 10 ? '0' + day : day

<<<<<<< HEAD
  return `${year}-${month}-${day}`
=======
  // if (pattern.toLowerCase() === 'yyy-mm-dd') {
  return `${year}-${month}-${day}`
  // } else {
  //   var hour = dt.getHours()

  //   var monent = dt.getMinutes()

  //   var seconds = dt.getSeconds()

  //   return `${year}-${month}-${day} ${hour}:${monent}:${seconds}`
  // }
})
>>>>>>> 94e8790f7d9e1b83eaac0aab173f03ba8978aed1

})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
