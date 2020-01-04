<template>
  <div>
    <Header nav2="黑马程序员"></Header>
    <div v-for="index in tuwen" :key="index.id">
      <van-row type="flex" justify="center">
        <van-col span="18">
          <h4>{{ index.title }}</h4>
        </van-col>
      </van-row>
      <van-row type="flex" justify="space-between">
        <van-col span="18">
          <span>发表时间:{{ index.add_time | dataFormat }}</span>
        </van-col>
        <van-col span="3">
          <span>点击:{{ index.click }}</span>
        </van-col>
      </van-row>
      <hr />
      <van-row type="flex" justify="space-around">
        <van-col span="7" v-for="i in tu" :key="i.id">
          <img @click="yulan()" :src="i.src" />
        </van-col>
      </van-row>
      <p>{{ index.content }}</p>
    </div>
    <pinglun></pinglun>
    <Tab></Tab>
  </div>
</template>

<script>
import { ImagePreview } from 'vant'
export default {
  data() {
    return {
      tuwen: [],
      tu: []
    }
  },
  created() {
    this.imgtuwen()
    this.tupian()
  },
  methods: {
    async imgtuwen() {
      const { data: res } = await this.$http.get('/api/getimageInfo/43')

      if (res.status !== 0) {
        this.$message.error('获取图文详情数据失败')
      }
      this.tuwen = res.message
    },
    async tupian() {
      const { data: res } = await this.$http.get(`/api/getthumimages/43`)
      if (res.status !== 0) {
        this.$message.error('获取图片失败')
      }
      this.tu = res.message
    },
    yulan() {
      var t = this.tu
      var m = []
      t.forEach((item, index, arr) => {
        m.push(item.src)
      })
      ImagePreview(m)
    }
  }
}
</script>

<style lang="less" scoped>
img {
  width: 100%;
  box-shadow: 1px 0 8px 1px rgba(0, 0, 0, 0.3);
  margin: 10px 0;
}
h4 {
  color: #26a2ff;
  font-size: 15px;
}
span {
  font-size: 13px;
  color: #8f8f94;
}
</style>
