<template>
  <div class="card">
    <img src="~@img/job/hello.png" alt="">
    <div class="title">Hi，你好</div>
    <div class="tip">登录后，我们将为推荐合适的职位</div>
    <div class="btn cp" @click="login">立即登录</div>
  </div>
</template>

<script>
// import { isLogin } from '@/utils/business/auth' // 是否登录
export default {
  methods: {
    login () {
      // isLogin(() => {
      //   window.reload()
      // })
    }
  }
}
</script>

<style lang="stylus" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 424px;
  height: 230px;
  background: linear-gradient(177deg, #FEEDE6 0%, #FFFFFF 40%);
  border-radius: 4px;
  opacity: 1;
  border: 1px solid #F0F2F7;

  img {
    margin-top: 32px;
    width: 80px;
    height: 84px;
  }

  .title {
    margin-top: 8px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
    color: #333333;
  }

  .tip {
    margin-top: 8px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    color: #8590A6;
  }

  .btn {
    margin-top 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 28px;
    background: #FE8836;
    border-radius: 4px 4px 4px 4px;
    font-size: 14px;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 20px;
  }
}
</style>
