<template>
  <div>
    <Header nav1="返回" nav2="黑马程序员.vant"></Header>
     <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功"> 
    <van-card
      :num="item.cou"
      :price="item.sell_price"
      :title="item.title"
      :thumb="item.thumb_path" v-for="item in goodList" :key="item.id">
      <!-- 加减按钮 -->
      <div slot="footer">
        <van-stepper  :model="num" min="1" @change="addShopNum" /> 
      </div>

      <!-- 左滑删除 -->
      <van-swipe-cell>
        <template slot="right">
          <van-button square type="danger" text="删除" />
        </template>
      </van-swipe-cell>

    </van-card>
    </van-pull-refresh>
    <van-submit-bar :price="305000" button-text="提交订单" />
    
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodList:[],
      num: '',
      allPrice: '',
      isLoading: false
    }
  },
  created() {
    this.getshopcarlist()
  },
  methods: {
    // 获取页面数据
    async getshopcarlist() {
      const {data: res} = await this.$http.get('/api/goods/getshopcarlist/87,88,89')
      console.log(res)
      this.goodList = res.message
    },
    addShopNum (event) {
      console.log(event)
      this.num = event
      this.allPrice = 
      this.getshopcarlist()
    },
    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
      }, 300);
    }
  },
 computed: {
   
 }
}
</script>

<style lang="less" scoped>
.van-card__price{
  color: red;
  font-size: 15px;
}
.van-card__bottom {
  margin-bottom: 45px;
}
</style>