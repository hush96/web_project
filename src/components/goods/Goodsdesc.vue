<template>
  <div>
      <h4 v-for='(item, i) in cateList' :key="i" class="goods_title">{{item.title}}</h4>
      <hr>
      <div class="goods_content">
          <p class="goods_con"></p>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 参数列表
      cateList: []
    }
  },
  created () {
    //   获取图片信息
    this.getInfor()
  },
  methods: {
    //   获取商品详情信息
    async getInfor () {
      let newId = this.$route.params.id
      const { data: res } = await this.$http.get(`/api/goods/getdesc/${newId}`)
      //   console.log(res)
      if (res.status !== 0) {
        return this.$toast('获取参数失败')
      }
      this.cateList = res.message
      var con = document.querySelector('.goods_con')
      //   console.log(res.message[0].content)
      con.innerHTML = res.message[0].content
    }
  }
}
</script>

<style lang="less" scoped>
.goods_title {
    font-size: 16px;
    color: #226aff;
    text-align: center;
}
.goods_content {
    padding: 5px;
    text-align: left;
}
</style>
