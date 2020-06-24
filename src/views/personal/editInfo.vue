<template>
  <div class="content">
    <header>
      <span @click="backPer" class="iconfont iconjiantou2"></span>
      <p>编辑资料</p>
    </header>
    <div class="profile">
      <img v-if="headImg" :src="$axios.defaults.baseURL + headImg" alt />
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
    :focusper="gender===0?'女':'男'"/>
    <div class="exitLogin">
      <AuthBtn btnVal="确定" btnColor="rgb(65, 184, 131)"/>
    </div>
    <van-cell-group>
      <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    </van-cell-group>
  </div>


</template>

<script>
import PersonalOpt from "@/components/PersonalOpt.vue";
import AuthBtn from "@/components/AuthBtn.vue";
import Vue from 'vue';
import { Field } from 'vant';
Vue.use(Field);
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
      password:"******",
      nickFlag:false,
      value: ''
    }
  },
  mounted(){
    this.$axios({
      method:"get",
      url:"/user/"+localStorage.getItem("userId"),
      headers:{
        Authorization:"Bearer " + localStorage.getItem("token")
      }
    }).then(res=>{
      const {messgae,data} = res.data;
      this.gender = data.gender;
      this.headImg = data.head_img;
      this.nickname = data.nickname;


    })
  },
  methods:{
    backPer(){
      this.$router.back();
    }
  }
};
</script>

<style lang = "less" scoped>
header {
  position: relative;
  height: 15.56vw;
  line-height: 15.56vw;
  background-color: #ccc;
  p {
    text-align: center;
    font-size: 3.89vw;
    font-weight: 700;
  }
  span {
    position: absolute;
    margin-left: 4.44vw;
  }
}
  .profile {
      height: 27.78vw;
      width: 100vw;
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