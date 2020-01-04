<template>
  <div>
       <Header nav1="返回" nav2="黑马程序员.vant" ></Header>
       <textarea placeholder="吴万牛逼"></textarea>
       <button>添加商品</button>
       <Tab></Tab>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  textarea {
    width: 99%;
    height: 200px;
    margin: 10px auto;
  }
  button{
    width: 100%;
    height: 40px;
    color: #fff;
    background-color: #1989fa;
    border: none;
  }
</style>
