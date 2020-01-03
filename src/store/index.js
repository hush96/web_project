import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodList: localStorage['goodList'] ? JSON.parse(localStorage['goodList']) : [],
    num: ''
  },
  mutations: {
    initList (state, data) {
      state.goodList = data
    },
    addNum (state, obj) {
      state.num = obj
    },
    add2Car (state, obj) {
      console.log(obj)
      if (state.goodList[obj.id] !== undefined) {
        // 商品存在
        state.goodList[obj.id] += obj.num
      } else {
        // 商品不存在
        // state.goodList[obj.id] = obj.num
        // 如果是动态增加的属性 必须使用Vue.set才可以跟踪数据改变
        // 参数1:对象  参数2:属性名  参数3:属性值
        Vue.set(state.goodList, obj.id, obj.num)
        this.state.num = obj.num
      }
      console.log(state)
    }

  },
  actions: {
    // 获取页面数据
    async getshopcarlist (context) {
      const { data: res } = await axios.get('/api/goods/getshopcarlist/87,88,89')
      console.log(res)
      context.commit('initList', res.message)
    }
  },
  modules: {

  },
  getters: {
    money (state) {
      let money = 0
      state.goodList.forEach(item => {
        money += item.sell_price * state.num
      })
      console.log(money)
      return money
    }
  }
})
