import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant'

Vue.config.productionTip = false
Vue.filter('dataFormat', function (dateStr, pattern = '') {
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
