<template>
  <div class="content">
    <div class="myFocus">{{myfocus}}</div>
    <div class="focusPer">{{focusper}}</div>
    <span class="iconfont iconjiantou1"></span>
  </div>
</template>

<script>
export default {
    props:["myfocus","focusper"],
    data(){
      return{
        
      }
    }
};
</script>

<style lang="less" scoped>
.content {
  width: 100vw;
  height: 13.89vw;
  box-sizing: border-box;
  padding: 5vw 10vw 5vw 0;
  margin-left:5.83vw ;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  .myFocus {
    font-size: 3.89vw;
  }
  .focusPer{
      flex: 1;
      font-size: 3.33vw;
      text-align: right;
      margin-right: 2.78vw;
      color: rgb(160,160, 160);
  }
  .iconjiantou1{
      font-size: 5vw;
      color:#e4e4e4;
  }
}
</style>