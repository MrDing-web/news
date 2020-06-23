<template>
  <div class="loginBtn" :btnVal="btnVal" :style="'backgroundColor:'+btnColor">{{btnVal}}</div>
</template>

<script>
export default {
  props:["btnVal","btnColor"]
};
</script>

<style lang="less" scoped>
.loginBtn {
  width: 88.33vw;
  height: 13.33vw;
  border-radius: 6.67vw;
  margin: 15.56vw auto;
  color: rgb(255, 255, 255);
  line-height: 13.33vw;
  font-size: 5vw;
  text-align: center;
}
</style>