<template>
  <div class="content">
    <header>
      <span class="iconfont iconjiantou2"></span>
      <p>编辑资料</p>
    </header>
    <div class="profile">
      <img v-if="headImg" :src="'http://127.0.0.1:3000' + headImg" alt />
    </div>

    <PersonalOpt 
    myfocus="昵称" 
    :focusper="nickname"
    />
    <PersonalOpt 
    myfocus="密码" 
    :focusper="password"

    />
    <PersonalOpt 
    myfocus="性别" 
    :focusper="gender===0?'女':'男'"
    
    />
    <div class="exitLogin">
      <AuthBtn btnVal="确定" btnColor="rgb(65, 184, 131)"/>
    </div>
  </div>
</template>

<script>
import PersonalOpt from "@/components/PersonalOpt.vue";
import AuthBtn from "@/components/AuthBtn.vue";
export default {
  components: {
    PersonalOpt,
    AuthBtn
  },
  data(){
    return{
      gender:"",
      headImg:"",
      nickname:"",
      password:"",
      nickFlag:false
    }
  },
  mounted(){
    this.$axios({
      method:"get",
      url:"http://127.0.0.1:3000/user/"+localStorage.getItem("userId"),
      headers:{
        Authorization:"Bearer " + localStorage.getItem("token")
      }
    }).then(res=>{
      const {messgae,data} = res.data;
      this.gender = data.gender;
      this.headImg = data.head_img;
      this.nickname = data.nickname;
      const pwd = data.password;
      let j = '';
      for (let i = 0; i < pwd.length; i++) {
        j += "*";
      }
      this.password = j;


    })
  }
};
</script>

<style lang = "less" scoped>
header {
  position: relative;
  height: 56px;
  line-height: 56px;
  background-color: #ccc;
  p {
    text-align: center;
    font-size: 14px;
    font-weight: 700;
  }
  span {
    position: absolute;
    margin-left: 16px;
  }
}
  .profile {
      height: 100px;
      width: 360px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #eee;
    img{
      width: 19.44vw;
      height: 19.44vw;
      border-radius: 50%;
    }
  }
</style>