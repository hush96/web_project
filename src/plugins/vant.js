// 导入 Vue
import Vue from 'vue'

// 导入 Button 组件
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


