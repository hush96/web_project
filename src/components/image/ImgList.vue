<template>
  <div>
    <Header nav2="黑马程序员"></Header>

    <van-tabs>
      <van-tab :key="index.id" v-for="index in tab" :title="index.title">
        <ul>
          <li v-for="index in imga" :key="index.id">
            <van-image @click="tiaozhuan" round lazy-load class="tupian" :src="index.src" />
            <div class="zi">
              <p>123</p>
            </div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
    <Tab></Tab>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: [],
      imga: []
    }
  },
  created() {
    this.tabList()
    this.imgList()
  },
  methods: {
    async tabList() {
      const { data: res } = await this.$http.get('/api/getimgcategory')
      if (res.status !== 0) {
        this.$message.error('获取tab栏数据失败')
      }
      this.tab = res.message
    },
    async imgList(i) {
      const { data: res } = await this.$http.get(`/api/getthumimages/43`)
      if (res.status !== 0) {
        this.$message.error('获取图片失败')
      }
      this.imga = res.message
      console.log(this.imga)
    },
    tiaozhuan() {
      this.$router.push('/photo/info')
    }
  }
}
</script>

<style lang="less" scoped>
.tupian {
  width: 350px;
  margin-left: 12px;
  margin-top: 10px;
  border-radius: 5px;
}
li {
  position: relative;
}
.zi {
  width: 350px;
  margin-left: 12px;
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  background: rgba(0, 0, 0, 0.4);
  font-size: 12px;
  color: #fff;
}
</style>
