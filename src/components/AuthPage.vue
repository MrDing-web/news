<template>
  <div class="loginDiv">
    <input :placeholder="placeholderText" :type="inputType"/>
  </div>
</template>

<script>
export default {
        props:["placeholderText","inputType"]
};
</script>

<style lang="less" scoped>
input {
  width: 80vw;
  height: 4vw;
  line-height: 4vw;
  font-size: 5vw;
  border: none;
  outline: none;
  border-bottom: 1px solid #000;
  padding: 3.33vw;
  display: block;
  margin: 8.33vw auto 2.78vw;
}
</style>