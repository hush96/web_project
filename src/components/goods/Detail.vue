<template>
  <div class="box">
    <!--  轮播图 -->
    <div class="swiper all">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for='(item, i) in imgList' :key="i">
          <img class="imgsty" :src="item.src" />
      </van-swipe-item>
    </van-swipe>
    </div>
    <!-- 加入购物车 -->
    <div class="add_cart all">
        <span class="span_head"  v-for='(item, i) in cateList' :key="i">{{item.title}}</span>
        <div class="add_body" v-for='(sub) in imgInfo' :key="sub.id">
         <p class="p_head">市场价:  <del>￥{{sub.market_price}}</del> 销售价:<i>￥{{sub.sell_price}}</i></p>
          <div class="count">
            <span>购买数量</span>
            <!-- 进步器功能 -->
            <van-stepper v-model="num" min="0" max="10"  button-size='30px' />
          </div>
          <div class="btns">
            <van-button size="normal" type="info">立即购买</van-button>
            <van-button size="normal" type="danger" @click="addCar">加入购物车</van-button>
          </div>
        </div>
    </div>
    <!-- 商品参数 -->
    <div class="cate all" v-for='(item) in imgInfo' :key="item.id">
      <div class=" cate_h">商品参数</div>
      <div class="cate_body">
        <p>商品货号:{{item.goods_no}}</p>
        <p>库存情况:{{item.stock_quantity}}件</p>
        <p>上架时间:{{item.add_time}}</p>
      </div>
      <!-- 图文介绍和商品评论 -->
      <div class="pros">
        <van-button :block="true" plain type="info" @click='getPhoto(item.id)'>图文介绍</van-button>
        <van-button :block="true" plain type="danger">商品评论</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 参数列表
      cateList: [],
      // 轮播图图片
      imgList: [],
      //  img的参数
      imgInfo: [],
      //  选择的数量
      num: 1
    }
  },
  created () {
    this.getInfor()
    this.getImg()
    this.getInfo()
  },
  methods: {
    addCar () {
      // 触发方法
      this.$store.commit('add', {
        id: this.$route.params.id,
        num: this.num
      })
    },
    //   获取商品详情信息
    async getInfor () {
      // 获取id
      let newId = this.$route.params.id
      const { data: res } = await this.$http.get(`/api/goods/getdesc/${newId}`)
      console.log(res)
      if (res.status !== 0) {
        return this.$toast('获取参数失败')
      }
      this.cateList = res.message
    },
    //  获取图片轮播图片
    async getImg () {
      let newId = this.$route.params.id
      const { data: res } = await this.$http.get(`/api/getthumimages/${newId}`)
      //   console.log(res)
      if (res.status !== 0) {
        return this.$toast('获取参数失败')
      }
      this.imgList = res.message
    },
    //  获取商品参数
    async getInfo () {
      let newId = this.$route.params.id
      const { data: res } = await this.$http.get(`/api/goods/getinfo/${newId}`)
      console.log(res)
      if (res.status !== 0) {
        return this.$toast('获取参数失败')
      }
      this.imgInfo = res.message
    },
    //  去往图文介绍页面
    getPhoto (id) {
      this.$router.push('/goodsdesc/' + id)
    }
  },
  computed: {
  }
}
</script>

<style lang="less" scoped>
.swiper {
    height: 230px;
}
.box {
    // height: 750px;
    padding: 10px;
}
.imgsty {
    height: 230px;
}
.all {
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 10px;
    margin-bottom: 10px;
}
.add_cart {
    padding: 15px;
    box-sizing: border-box;
    height: 190px;
}
.span_head {
    border-bottom: 1px solid #ccc;
    width: 310px;
    float: left;
    text-align: left;
}
.add_body {
    float: left;
    padding: 5px;
  font-size: 14px;
  color:  #8f8f94;
}
.p_head {
  margin: 10px;
  del {
    margin: 0 5px;
  }
  i {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: red;
  }
}
.count {
  height: 30px;
  margin: 15px 0;
}
.count span {
  float: left;
  margin-left: 10px;
}
.van-stepper {
  margin-left: -45px;
  display: inline-block;
}
.btns {
  float: left;
  padding: 0 10px;
  .van-button {
    height: 33px;
    margin-right: 3px;
    line-height: 33px;
  }
}
.cate {
  box-sizing: border-box;
  .cate_h {
    border-bottom: 1px solid #ccc;
    text-align: left;
    width: 310px;
    font-size: 17px;
    padding-bottom: 8px;
  }
  .cate_body {
    text-align: left;
    font-size: 14px;
    padding: 10px;
    color: #8f8f94;
    border-bottom: 1px solid #ccc;
  }
}
.pros .van-button {
  margin: 15px 0;
  border-radius: 5px;
}
</style>
