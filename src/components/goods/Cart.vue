<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
      <div v-for="item in goodsAll" :key="item.id">
        <van-swipe-cell>
          <van-card
            :num="item.cou"
            :desc="'￥' + item.sell_price"
            :title="item.title"
            :thumb="item.thumb_path"
          >
            <!-- 加减按钮 -->
            <template slot="footer">
              <van-stepper v-model="item.cou" min="1" @change="onChange(item.id)" />
            </template>

            <!-- 右滑删除 -->
            <template slot="right">
              <van-button square type="danger" text="删除" />
            </template>
          </van-card>
        </van-swipe-cell>
      </div>
    </van-pull-refresh>
    <van-submit-bar :price="total * 100" button-text="提交订单" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodList: [],
      goodsAll: [],
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
    onChange(id) {
      id = id + ''
      const index = this.goodList.findIndex(item => item.id === id)
      this.goodList.forEach((item, index) => {
        item.num = this.goodsAll[index].cou
      })
      const obj = this.goodList[index]
      this.$store.commit('edit', obj)
    },
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
      this.goodsAll.forEach((item, index) => {
        item.cou = this.goodList[index].num
      })
    }
  },
  computed: {
    total() {
      let num = 0
      this.goodList.forEach(item => {
        num += item.num * item.price
      })
      return num
    }
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
