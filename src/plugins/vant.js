// 导入 Vue
import Vue from 'vue'

// 导入 Button 组件
import {
  Search,
  Divider,
  Col,
  Row,
  SwipeCell,
  Card,
  Stepper,
  SubmitBar,
  PullRefresh,
  Image,
  Tabbar,
  TabbarItem,
  GridItem,
  Grid,
  Swipe,
  SwipeItem,
  Button,
  Icon,
  Toast,
  List,
  Cell,
  NavBar,
  tabs,
  tab,
  Lazyload,
  overlay,
  ImagePreview,
  Loading
} from 'vant'
// 挂载 Button 组件
Vue.use(Button)
Vue.use(Col)
Vue.use(Row)
Vue.use(Grid)
Vue.use(NavBar)
Vue.use(Grid).use(GridItem)
Vue.use(Icon)
Vue.use(Toast)
Vue.use(Divider)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Search)
Vue.use(Stepper)
Vue.use(SubmitBar)
Vue.use(SwipeCell)
Vue.use(PullRefresh)
Vue.use(Image)
Vue.use(ImagePreview)
Vue.use(Lazyload, {
  lazyComponent: true
})
Vue.use(tabs)
Vue.use(tab)
Vue.use(overlay)
Vue.use(Row).use(Col)
Vue.use(Loading)
Vue.use(Card)
Vue.use(List)
Vue.use(Cell)
Vue.use(Swipe).use(SwipeItem)
