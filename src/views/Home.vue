<template>
  <div class="homeContent">
    <router-link to="/login">登录页</router-link> -->
    <router-link to="/register">注册页</router-link>
    <router-link to="/personal">个人中心</router-link>
    <header>
      <div class="homeLogo">
        <span class="iconfont iconnew"></span>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
<style lang="less">
header {
  height: 13.61vw;
  width: 100vw;
  background-color: rgb(255, 0, 0);
  position: relative;
  .homeLogo {
    color: rgb(255, 255, 255);
    position: absolute;
    left: 0;
    top: 0;
    width: 13.61vw;
    height: 13.61vw;
    margin-left: 7.78vw;                                                                            
    span {
      display: block;
      width: 13.61vw;
      height: 13.61vw;
      line-height: 13.61vw;
      font-size: 13.61vw;
    }
  }
}
</style>
