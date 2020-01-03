<template>
  <div>
     <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
      <van-swipe-cell>
    <van-card
      :num="item.cou"
      :price="item.sell_price"
      :title="item.title"
      :thumb="item.thumb_path" v-for="item in this.$store.state.goodList" :key="item.id">
      <!-- 加减按钮 -->
      <div slot="footer">
        <van-stepper  :model="num" min="1" @change="onChange"/>
      </div>

      <!-- 右滑删除 -->
        <template slot="right">
          <van-button square type="danger" text="删除" />
        </template>

    </van-card>
      </van-swipe-cell>
    </van-pull-refresh>
    <!-- <van-submit-bar :price="$store.getters.money" button-text="提交订单" /> -->
    <van-submit-bar :price="$store.getters.money" button-text="提交订单" />
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      goodList: [],
      num: '',
      allPrice: '',
      isLoading: false
    }
  },
  created () {
    this.$store.dispatch('getshopcarlist')
  },
  methods: {
    // 异步获取按钮num
    onChange (num) {
    },
    // 下拉刷新
    onRefresh () {
      setTimeout(() => {
        this.isLoading = false
      }, 300)
    }
  },
  computed: {
    // ...mapState(['goodList', 'num']),
    // ...mapGetters(['money'])
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
