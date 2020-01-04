<template>
  <div>
    <Header nav2="黑马程序员"></Header>

    <!-- <lazy-component> -->
    <!-- 加载 -->
    <van-loading type="spinner" color="#1989fa" v-if="isShow" />
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-card v-for="item in list" :key="item.id" :title="item.title" :thumb="item.img_url" @click="toDetalist(item.id)">
        <div slot="bottom">
          <div slot="price" class="pri">发表时间: {{ item.add_time | dataFormat }}</div>
          <div slot="num" class="num">点击: {{ item.click }}</div>
        </div>
      </van-card>
    </van-pull-refresh>
    <!-- </lazy-component> -->
    <Tab></Tab>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 获取到数据
      list: [],
      isLoading: false,
      isShow: true
    }
  },
  created() {
    this.hangle()
  },
  methods: {
    async hangle() {
      const { data: res } = await this.$http.get('/api/getnewslist')
      console.log(res)
      if (res.status !== 0) {
        return this.Toast.fail('文章列表加载失败')
      }
      this.list = res.message
      this.isShow = false
      // console.log(this.list)
    },
    toDetalist(id) {
      this.$router.push('/news/detail/' + id)
    },
    onRefresh() {
      setTimeout(() => {
        this.hangle()
        this.$toast('刷新成功')
        this.isLoading = false
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped>
.van-card__content {
  min-height: 0;
}
.van-card__header {
  height: 60px;
}
.van-card__thumb {
  // position: relative;
  width: 73px;
  height: 60px;
  margin-right: 8px;
}
.van-card {
  margin: 0 5px;
  padding: 5px;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.van-card__title {
  position: relative;
  top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 15px;
  font-weight: 750;
  color: #000;
  line-height: 17px;
  float: left;
}
.van-card__bottom {
  color: #226aff;
  display: inline-block;
}
.pri {
  float: left;
  color: #cccccc;
}
.num {
  position: relative;
  float: right;
  font-size: 13px;
  color: #ff7f00;
}
</style>
