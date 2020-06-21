<template>
    <div class="loginDiv">
        <div class="closeLogin">
            <span class="iconfont iconicon-test"></span>
        </div>
        <div class="loginLogo">
            <span class="iconfont iconnew"></span>
        </div>
        <AuthPage placeholderText="用户名 / 邮箱" inputType="text"></AuthPage>
        <AuthPage placeholderText="密码" inputType="password"></AuthPage>
        <div class="loginBtn">登录</div>
    </div>
</template>

<script>
    import AuthPage from "../components/AuthPage.vue";

    export default {
        components: {
            AuthPage
        }
    };
</script>

<style lang='less'>
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