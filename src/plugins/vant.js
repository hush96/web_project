// 导入 Vue
import Vue from 'vue'
<<<<<<< HEAD

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
=======
import {
  PullRefresh,
  Button,
  Grid,
  GridItem,
  Toast,
  Image,
  Card,
  List,
  Cell,
  Tabbar,
  TabbarItem,
  Lazyload,
  Swipe,
  SwipeItem,
  Stepper,
  SubmitBar,
  SwipeCell
} from 'vant'

// 挂载 Button 组件
Vue.use(Button)
Vue.use(PullRefresh)
Vue.use(Grid).use(GridItem)
Vue.use(Toast)
Vue.use(Image)
Vue.use(Card)
Vue.use(List)
Vue.use(Cell)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Lazyload)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Stepper)
Vue.use(SubmitBar)
Vue.use(SwipeCell)
>>>>>>> faf7d14a1014b21116e7498ba74a027ba9fcf47f
