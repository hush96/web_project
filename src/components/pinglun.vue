<template>
  <div>
    <h4>发表评论</h4>
    <hr />
    <van-row type="flex" justify="center">
      <van-col span="23">
        <textarea placeholder="输入留言" name=""></textarea>
      </van-col>
    </van-row>

    <van-button class="btn" type="primary" size="large">发表评论</van-button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
textarea {
    width: 90%;
    height: 100px;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 24px;
}
</style>
