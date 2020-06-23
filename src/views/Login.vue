<template>
  <div class="loginDiv">
    <div class="closeLogin">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="loginLogo">
      <span class="iconfont iconnew"></span>
    </div>
    <AuthPage
      placeholderText="手机号"
      inputType="text"
      rule="^.{3,11}$"
      errMsg="请输入合法的手机号！"
      @sendMsg="logMObilePhone"
      @checkInput="checkNum"
    />
    <AuthPage
      placeholderText="密码"
      inputType="password"
      rule="^.{3,11}$"
      errMsg="您输入的密码有误，请重新输入！"
      @sendMsg="logPwd"
      @checkInput="checkPwd"
      @keyup.native.enter="login"
    />
    <AuthBtn btnVal="登录" @click.native="login" />
  >
  </div>
</template>

<script>
import AuthPage from "../components/AuthPage.vue";
import AuthBtn from "../components/AuthBtn.vue";

export default {
  components: {
    AuthPage,
    AuthBtn
  },
  data() {
    return {
      logUsername: "",
      logPassword: "",
      checkA:false,
      checkB:false
    };
  },
  methods: {
    logMObilePhone(msg) {
      this.logUsername = msg;
    },
    logPwd(msg) {
      this.logPassword = msg;
    },
    checkNum(i){
      this.checkA = i;
    },
    checkPwd(i){
      this.checkB = i;
    },
    login(e) {
      if(!(this.checkA&&this.checkB)){
          return false;
        }
      this.$axios({
        url: "http://127.0.0.1:3000/login",
        method: "post",
        data: {
          username: this.logUsername,
          password: this.logPassword
        }
      }).then(res => {
        console.log(res.data);
        const { message, data } = res.data;
        if (message === "登录成功") {
          this.$toast.success(message);
          localStorage.setItem("token",data.token);
          localStorage.setItem("userId",data.user.id);
          this.$router.push({ path: "/personal" });
        } else {
          this.$toast.fail('用户名或密码错误！');
        }
      });
    }
  }
};
</script>

<style lang='less' scoped>
.loginDiv {
  width: 100vw;

  .closeLogin {
    padding: 5.56vw 5.56vw 0 5.56vw;

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
}
</style>