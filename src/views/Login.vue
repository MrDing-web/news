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
    rule="0?(13|15|17|18)[0-9]{9}$"
    errMsg="请输入合法的手机号！"
    @sendMsg="logMObilePhone"
    />
    <AuthPage 
    placeholderText="密码" 
    inputType="password" 
    rule="^.{3,11}$"
    errMsg="您输入的密码有误，请重新输入！"
    @sendMsg="logPwd"
    />
    <AuthBtn btnVal="登录" @click.native="login"/>
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
  data(){
    return{
      logUsername:'',
      logPassword:''
    }
  },
  methods:{
  logMObilePhone(msg){
    this.logUsername = msg;
  },
  logPwd(msg){
    this.logPassword = msg;
  },
  login(){
    console.log(1111);
    
    this.$axios({
      url:"http://127.0.0.1:3000/login",
      method:"post",
      data:{
        username:this.logUsername,
        password:this.logPassword
      }
    }).then(res=>{
      this.$toast.success("登录成功");
    })
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