// 导入 Vue
import Vue from 'vue'
<<<<<<< HEAD

// 导入 Button 组件
<<<<<<< HEAD
import { Tabbar, TabbarItem, GridItem ,Grid , Swipe , SwipeItem} from 'vant'
import { Button , Icon , Toast , List , Cell, NavBar } from 'vant'
import { 
    Search , 
    Divider , 
    Col , 
    Row , 
    SwipeCell, 
    Card,
    Stepper,
    SubmitBar,
    PullRefresh,
    Image  
} from 'vant'
// 挂载 Button 组件
Vue.use(Button)
Vue.use(Col)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Row)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(NavBar)
Vue.use(SwipeCell)
Vue.use(Icon)
Vue.use(List)
Vue.use(Cell)
Vue.use(Toast)
Vue.use(Divider)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Search)
Vue.use(Stepper)
Vue.use(SubmitBar)
Vue.use(PullRefresh)
Vue.use(Card)
Vue.use(Image)


=======
<<<<<<< HEAD
import { Button, tabs, tab, Lazyload, Image, overlay, row, col, ImagePreview } from 'vant'

// 挂载 Button 组件
Vue.use(Button)
Vue.use(tabs)
Vue.use(tab)
Vue.use(Lazyload)
Vue.use(Image)
Vue.use(overlay)
Vue.use(row)
Vue.use(col)
Vue.use(ImagePreview)
=======
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
>>>>>>> e3ac08e75e47316204cf97755f058679cdd8ffa0
>>>>>>> 94e8790f7d9e1b83eaac0aab173f03ba8978aed1
