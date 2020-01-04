<template>
  <div>
    <Header nav2="黑马程序员.vant"></Header>
    <van-swipe :autoplay="3000" indicator-color="green">
      <van-swipe-item v-for="item in swipeList" :key="item.id">
        <img :src="item.img" alt />
      </van-swipe-item>
    </van-swipe>

    <!-- 九宫格 -->
    <van-grid :column-num="3" clickable>
      <van-grid-item text="新闻资讯" to="/newslist">
        <img src="../assets/menu1.png" alt />
        <p>新闻资讯</p>
      </van-grid-item>
      <van-grid-item text="图片分享" to="/photo/list">
        <img src="../assets/menu2.png" alt />
        <p>图片分享</p>
      </van-grid-item>
      <van-grid-item text="商品购买" to="/goods/list">
        <img src="../assets/menu3.png" alt />
        <p>商品购买</p>
      </van-grid-item>
      <van-grid-item text="留言反馈">
        <img src="../assets/menu4.png" alt />
        <p>留言反馈</p>
      </van-grid-item>
      <van-grid-item text="视频专区">
        <img src="../assets/menu5.png" alt />
        <p>视频专区</p>
      </van-grid-item>
      <van-grid-item text="联系我们">
        <img src="../assets/menu6.png" alt />
        <p>联系我们</p>
      </van-grid-item>
    </van-grid>
    <Tab></Tab>
  </div>
</template>

<script>
export default {
  data() {
    return {
         swipeList: []
    }
  },
  created() {
      this.getSwipe()

  },
  methods: {
        async getSwipe() {
      const {data: res} = await this.$http.get('/api/getlunbo')
      console.log(res)
      this.swipeList = res.message
      console.log(this.swipeList)
    }

  }
}
</script>

<style lang="less" scoped>
 .van-swipe-item  img{
    width: 100%;
    height: 200px;
  }
 .van-grid-item__text {
    font-size: 14px;
}
.van-grid-item img {
  width: 60px;
  height: 60px;
}
.van-grid-item p {
  font-size: 14px;
}

</style>
