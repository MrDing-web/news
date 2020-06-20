<template>
  <div class="loginDiv">
    <div class="closeLogin">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="loginLogo">
      <span class="iconfont iconnew"></span>
    </div>
    <input type="text" class="loginUsername" placeholder="
用户名 / 手机号码">
    <hr class="hr">
    <input type="password" class="loginPwd" placeholder="密码">
    <hr class="hr">
    <div class="loginBtn">登录</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang=less>
.loginDiv {
  width: 100vw;
  height: 157.78vw;
  background-color: rgb(242,242,242);
  .closeLogin {
    padding: 5.56vw;
    span {
      font-size: 7.5vw;
    }
  }
  .loginLogo {
    width: 100vw;
    text-align: center;
    .iconnew {
      color: rgb(216, 30, 6);
      font-size: 35vw;
    }
  }
  .loginUsername,.loginPwd{
      width: 80vw;
      height: 5vw;
      line-height: 5vw;
      font-size: 5vw;
      border: 0;
      outline:none;
      display: block;
      margin: 8.33vw auto 2.78vw;
      background-color: rgb(242,242,242);  
  }
  .hr{
      width: 80vw;
      margin: 0 auto;
  }
  .loginBtn{
      width: 88.33vw;
      height: 13.33vw;
      background-color: rgb(204,51,0);
      border-radius: 6.67vw;
      margin: 15.56vw auto;
      color: rgb(255,255,255);
      line-height: 13.33vw;
      font-size: 5vw;
      text-align: center;
  }
}
</style>