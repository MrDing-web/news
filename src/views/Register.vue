<template>
  <div class="registerDiv">
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
      @sendMsg="regMobileNum"
    />
    <AuthPage 
    placeholderText="昵称"
    inputType="text" 
    rule="^.{3,6}$" 
    errMsg="请输入三到六位字符！"
    @sendMsg="regNick"
    />
    <AuthPage 
    placeholderText="密码" 
    inputType="password" 
    rule="^.{3,11}$" 
    errMsg="您输入的密码有误，请重新输入！"
    @sendMsg="regPwd"
    />
    <AuthBtn btnVal="注册"/>
  </div>
</template>

<script>
import AuthPage from "../components/AuthPage.vue";
import AuthBtn from "../components/AuthBtn.vue";
export default {
    components:{
        AuthPage,
        AuthBtn
    },
    data(){
      return{
        regUsername:'',
        regNickname:'',
        regPassword:''

      }
    },
    methods:{
      regMobileNum(msg){
        this.regUsername = msg;
      },
      regNick(msg){
        this.regNickname = msg;
      },
      regPwd(msg){
        this.regPassword = msg;
      }
    }
};
</script>
<style lang="less" scoped>
.registerDiv {
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