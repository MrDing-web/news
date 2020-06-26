<template>
  <div class="homeContent">
<!--    <router-link to="/login">登录页</router-link>-->
<!--    <br>-->
<!--    <router-link to="/register">注册页</router-link>-->
<!--    <br>-->
<!--    <router-link to="/personal">个人中心</router-link>-->
    <header>
      <div class="homeLogo">
        <span class="iconfont iconnew"></span>
      </div>
      <div class="search">
        <span class="iconfont iconsearch"></span>
        <input type="text" readonly value="搜索新闻">
      </div>
      <div class="personal">
        <span class="iconfont iconwode" @click="toPersonal"></span>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  components: {

  },
  methods:{
    toPersonal(){
      this.$router.push({path:"/personal"});
    }
  }
};
</script>
<style lang="less" scoped>
header {
  height: 13.61vw;
  width: 100vw;
  background-color: rgb(255, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  .homeLogo {
    color: rgb(255, 255, 255);
    width: 13.61vw;
    height: 13.61vw;
    margin-left: 5.56vw;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    span.iconnew {
      display: block;
      width: 13.61vw;
      height: 13.61vw;
      line-height: 13.61vw;
      font-size: 13.61vw;
    }
  }
  .search{
    flex: 1;
    width: 58.33vw;
    height: 9.44vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 4.44vw;
    span{
      position: absolute;
      top: 4.44vw;
      color: #fff;
      font-size: 5vw;
      left: 38.89vw;
    }
    input{
      width: 58.33vw;
      height: 9.44vw;
      border-radius: 4.72vw;
      border: none;
      padding: 1.39vw 5.56vw;
      box-sizing: border-box;
      user-focus: none;
      color: rgb(250,250,250);
      text-align: center;
      font-size: 3.89vw;
      background-color: rgba(255,255,255,0.6);
    }
  }
  .personal{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    margin-right: 5.56vw;
    color: #fff;
    span{
      font-size: 6.11vw;
    }
  }
}
</style>
