<template>
  <!-- 底部导航 -->
  <van-tabbar v-if="$route.path !== '/shopcar'" router v-model="active" active-color="#07c160" inactive-color="#000">
    <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/member" icon="manager-o">会员</van-tabbar-item>
    <van-tabbar-item to="/shopcar" icon="cart-o" :info="this.$store.state.count">购物车</van-tabbar-item>
    <van-tabbar-item to="/search" icon="search">搜索</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  //   props: ['n1', 'n2', 'n3', 'n4'],
  data() {
    return {
      active: 0
    }
  },
  created() {
    this.$store.commit('get')
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
