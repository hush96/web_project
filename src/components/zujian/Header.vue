<template>
  <!-- 头部 -->
  <div class="box">
  <div class="header_box">
    <span @click="$router.go(-1)" v-if="$route.path != '/home'" class="goback">
      <van-icon style="margin-right:3px;" name="arrow-left" />
      {{nav1}}
    </span>
    {{ nav2 }}
    <span class="add" @click="addgood" >{{nav3}}</span>
  </div>
  </div>
</template>

<script>
export default {
  props: ['nav1', 'nav2', 'nav3'],
  data() {
    return {}
  },
  created() {},
  methods: {
    addgood() {
      this.$router.push('/addgoods')
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 50px;
}
.header_box {
  position: fixed;
  width: 100%;
  z-index: 999;
  background-color: #1989fa;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: aliceblue
}
.goback {
  position: absolute;
  left: 0;
}
.add{
  position: absolute;
  right: 20px;
}
.van-icon-arrow-left::before{
  margin-left: 10px;
}
</style>
