<template>
  <div class="loginDiv">
    <div class="closeLogin">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="loginLogo">
      <span class="iconfont iconnew"></span>
    </div>
    <login></login>
    <!-- <register></register> -->
  </div>
</template>

<script>
import login from "../components/login.vue";
import register from "../components/register.vue";
export default {
  components: {
    login,
    register
  }
};
</script>

<style lang='less'>
.loginDiv {
  position: relative;
  width: 100vw;
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
  .loginUsername,
  .loginPwd,
  .loginPicname {
    width: 80vw;
    height: 5vw;
    line-height: 5vw;
    font-size: 5vw;
    border: 0;
    outline: none;
    display: block;
    margin: 8.33vw auto 2.78vw;
    background-color: rgb(242, 242, 242);
  }
  .hr {
    width: 80vw;
    margin: 0 auto;
  }
  .loginBtn {
    width: 88.33vw;
    height: 13.33vw;
    background-color: rgb(204, 51, 0);
    border-radius: 6.67vw;
    margin: 15.56vw auto;
    color: rgb(255, 255, 255);
    line-height: 13.33vw;
    font-size: 5vw;
    text-align: center;
  }
}
</style>