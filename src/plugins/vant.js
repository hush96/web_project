// 导入 Vue
import Vue from 'vue'
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
