// 导入 Vue
import Vue from 'vue'

// 导入 Button 组件
import { Button, Image, Card, PullRefresh, Row, Col, Lazyload, Loading, Toast } from 'vant'

// 挂载 Button 组件
Vue.use(Lazyload, {
  lazyComponent: true
})
Vue.use(Button)
Vue.use(Image)
Vue.use(Card)
Vue.use(PullRefresh)
Vue.use(Row).use(Col)
Vue.use(Lazyload)
Vue.use(Loading)
Vue.use(Toast)
