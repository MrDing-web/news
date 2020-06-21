<template>
  <div class="loginDiv">
    <input
      @blur="checkText"
      v-model="inputVal"
      :placeholder="placeholderText"
      :type="inputType"
      :rule="rule"
      :class="{
      redBorder:!ruleRes
      }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputVal: "",
      ruleRes: true
    };
  },
  props: ["placeholderText", "inputType", "rule","errMsg"],
  methods: {
    checkText() {
      if (!this.ruleRes) {
        this.$toast.fail(this.errMsg);
      }
    }
  },
  watch: {
    inputVal(newVal) {
      const reg = new RegExp(this.rule);
      this.ruleRes = reg.test(newVal);
    }
  }
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
.redBorder {
  border-bottom-color: rgb(255, 0, 0);
}
</style>