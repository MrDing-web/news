<template>
  <div class="loginBtn" :btnVal="btnVal">{{btnVal}}</div>
</template>

<script>
export default {
  props:["btnVal"]
};
</script>

<style lang="less" scoped>
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
</style>