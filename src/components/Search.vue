<template>
  <div>
   <Header nav1="返回" nav2="黑马程序员.vant"></Header>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="square"
      @search="onSearch"
    >
      <div slot="action" @click="handlequxiao">取消</div>
    </van-search>

    <van-list
      :style="{ display : flag}"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-swipe-cell v-for="item in list" :key="item.id">
        <van-cell :title="item.name" :value="item.ctime|dataFormat" />
        <template slot="right">
          <van-button square type="danger" text="删除" @click="handleDel()" />
        </template>
      </van-swipe-cell>
    </van-list>
    <div :style="{display : flag1}">
      <van-row type="flex" justify="space-between">
        <van-col span="6">搜索历史</van-col>

        <van-col span="1">
          <van-icon  name="delete" @click="handleDelete" />
        </van-col>
      </van-row>
      <van-row type="flex">
        <van-col class="hh" v-for="(item,index) in haha" :key="index">{{item}}</van-col>
      </van-row>
      <van-row :style="{display : flag2}">
        <van-divider :style="{ color: '#969799', borderColor: 'inherit', padding: '0 40px' }">暂无搜索历史</van-divider>
      </van-row>
    </div>
     <Tab></Tab>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      flag: 'none',
      flag1: 'block',
      flag2: 'block',
      list: [],
      haha: [],
      loading: false,
      finished: false,
      active: 0,
    }
  },

  created() {},
  methods: {
    async onSearch() {
      if (this.value.trim() === '') {
        this.$toast('请输入内容')
      } else {
        this.flag = 'block'
        this.flag1 = 'none'
        this.haha.push(this.value)
        const { data: res } = await this.$http.get('/api/getprodlist')
        console.log(res)
        this.list = res.message

        console.log(this.list)
      }
    },
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    },
    handlequxiao() {
      this.list = []
      this.value = ''
      this.flag1 = 'block'
      if (this.haha.length >= 1) {
        this.flag2 = 'none'
      }
    },
    handleDelete() {
      this.haha = []
      this.flag2 = 'block'
    },
    handleDel(id) {
      const index = this.list.findIndex(item => item.id === id)
      this.list.splice(index, 1)
      console.log(this.list)
    },
    onClickLeft() {

    },
    onClickRight() {

    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #1989fa;
  // position: fixed;
  // width: 100%;
  

}

.van-icon-arrow-left::before {
     color: #fff;;
}
.van-nav-bar__text {
  color: #FFF;
}
.van-nav-bar__title {
  color: #FFF;
}
.van-row {
  margin: 0 10px;
  padding: 0 10px;
}
.hh {
  margin: 10px 5px;
  background-color: #969799;
}
</style>
