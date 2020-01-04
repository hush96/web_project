<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
      <van-swipe-cell>
        <van-card
          :num="item.cou"
          :desc="'￥' + item.sell_price"
          :title="item.title"
          :thumb="item.thumb_path"
          v-for="item in goodsAll"
          :key="item.id"
        >
          <!-- 加减按钮 -->
          <div slot="footer">
            <van-stepper :model="num" min="1" @change="onChange" />
          </div>

          <!-- 右滑删除 -->
          <template slot="right">
            <van-button square type="danger" text="删除" />
          </template>
        </van-card>
      </van-swipe-cell>
    </van-pull-refresh>
    <van-submit-bar :price="allPrice * 100" button-text="提交订单" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodList: [],
      goodsAll: [],
      num: '',
      allPrice: 0,
      isLoading: false,
      urlId: ''
    }
  },
  created() {
    this.$store.commit('get')
    this.getId()
    this.getList()
  },
  methods: {
    // 异步获取按钮num
    onChange(num) {},
    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
      }, 300)
    },
    getId() {
      this.goodList = this.$store.state.arr
      this.goodList.forEach(item => {
        this.urlId += ',' + item.id
      })

      this.urlId = this.urlId.substring(1, this.urlId.length)
      // console.log(this.urlId)
    },
    async getList() {
      const { data: res } = await this.$http.get(`/api/goods/getshopcarlist/${this.urlId}`)
      if (res.status !== 0) {
        return this.$toast('获取参数失败')
      }
      this.goodsAll = res.message
      console.log(res.message)
      // res.message.forEach(item => {
      //   this.allPrice += item.sell_price
      // })
    }
  },
  computed: {
  }
}
</script>

<style lang="less" scoped>
.van-card__price {
  color: red;
  font-size: 15px;
}
.van-card__bottom {
  margin-bottom: 45px;
}
.van-card__desc {
  float: left;
  color: red;
  padding-left: 15px;
}
</style>
