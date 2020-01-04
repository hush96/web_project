<template>
  <div class="news">
    <h3 class="tit">{{DetaList.title}}</h3>
    <div class="info">
      <span class="sj">发表时间: {{DetaList.add_time|dataFormat}}</span>
      <span class="dj">点击次数: {{DetaList.click}}</span>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      DetaList: {}
    }
  },
  created () {
    let newId = this.$route.params.id
    this.shuju(newId)
  },
  methods: {
    async shuju (id) {
      const { data: res } = await this.$http.get('/api/getnew/' + id)
      if (res.status !== 0) {
        return this.Toast.fail('文章列表加载失败')
      }
      this.DetaList = res.message[0]
      console.log(this.DetaList)
      var wen = document.querySelector('.content')
      wen.innerHTML = this.DetaList.content
    }
  }
}
</script>

<style lang="less" scoped>
 .content {
  text-align: left;
  // text-indent:2em;
}
.news {
  padding: 0 10px;
}
.tit {
  color: #1989fa;
  font-size: 17px;
  text-align: center;
  line-height: 30px;
  margin: 0;
  padding: 5px 0;
}
.info {
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-size: 13px;
  color: #1989fa;
  border-bottom: 1px solid #ccc;
  padding: 7px 0;
}
.sj {
  color: #cccccc;
}
.dj {
  color: #ff7f00;
}
</style>
