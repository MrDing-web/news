<template>
  <div class="content">
    <header>
      <span @click="backPer" class="iconfont iconjiantou2"></span>
      <p>编辑资料</p>
    </header>
    <div class="profile">
      <van-uploader
              :after-read="afterRead"
              class="upload"
              preview-size="19.44vw"
              max-count = 1

      />
      <img v-if="headImg" ref="img" :src="$axios.defaults.baseURL+ headImg" alt />
    </div>

    <PersonalOpt 
    myfocus="昵称" 
    :focusper="nickname"
    @click.native="changeNickname"
    />

    <PersonalOpt 
    myfocus="密码" 
    focusper="******"
    @click.native="changePassword"
    />
    <PersonalOpt 
    myfocus="性别" 
    :focusper="gender===0?'女':'男'"
    @click.native="changeGender"
    />
    <div>
      <AuthBtn
              btnVal="确认修改"
              btnColor="rgb(65, 184, 131)"
              @click.native="changePersonalInfo"
      />
    </div>

    <van-dialog v-model="show"
       :title="title"
       show-cancel-button
       width="83.33vw"
       @confirm="amend"
       close-on-click-overlay

    >
      <ChangeInfo
              :optName="optName"
              :textType="textType"
              :textPlaceholder="textPlaceholder"
              @newInfo="getNewInfo"
      />
    </van-dialog>
<!--    上拉菜单-->
    <van-action-sheet
      v-model="showGender"
      :actions="actions"
      close-on-click-action
      @select="onSelect"
      cancel-text="取消"
      close-on-click-overlay
    />

  </div>


</template>

<script>
import PersonalOpt from "@/components/PersonalOpt.vue";
import AuthBtn from "@/components/AuthBtn.vue";
import ChangeInfo from "@/components/ChangeInfo.vue";

import Vue from 'vue';
import { Dialog } from 'vant';
import { ActionSheet } from 'vant';
import { Uploader } from 'vant';
// 全局注册
Vue.use(Dialog);
Vue.use(ActionSheet);
Vue.use(Uploader);

export default {
  components: {
    PersonalOpt,
    AuthBtn,
    ChangeInfo
  },
  data(){
    return{
      gender:"",
      headImg:"",
      nickname:"",
      password:"",
      profile:'',
      title:'标题',
      show:false,
      optName:'',
      textType:"text",
      textPlaceholder:'',
      newVal:'',
      showGender:false,
      actions:[
        {
          name:"男",
          gender:1
        },
        {
          name:"女",
          gender:0
        }
      ]
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
    },
    changeNickname(){
      this.title = "修改昵称";
      this.show = true;
      this.optName="新昵称";
      this.textType = "text";
      this.textPlaceholder='请输入新昵称';
    },
    changePassword(){
      this.title = "修改密码";
      this.show = true;
      this.optName="新密码";
      this.textType = "password";
      this.textPlaceholder='请输入新密码';
    },
    changeGender(){
      this.showGender = true;
    },
    amend(){
      if(this.title === "修改昵称"){
        this.nickname = this.newVal;
      }else if(this.title === "修改密码"){
        this.password = this.newVal;
      }
    },
    getNewInfo(newVal){
      this.newVal = newVal;
    },
    onSelect(item){
      this.gender = item.gender;
    },
    afterRead(fileObj) {
      // 此时可以自行将文件上传至服务器
      const data = new FormData();
      const newImg = URL.createObjectURL(fileObj.file);
      console.log(this.$refs.img);
      if(this.$refs.img){
        this.$refs.img.setAttribute("src",newImg);
      }
      data.append("file",fileObj.file);
      this.profile = data;
    },
    changePersonalInfo(){
      this.$axios({
        url: "/user_update/" + localStorage.getItem("userId"),
        method:"post",
        headers:{
          Authorization: "Bearer " + localStorage.getItem("token")
        },
        data:{
          ":id":localStorage.getItem("userId"),
          nickname:this.nickname,
          password:this.password,
          gender:this.gender
        }
      }).then(res=>{
        const { message,data} = res.data;
        if(message === "修改成功"){
          this.$toast.success("修改成功");
        }
      });
      this.$axios({
        method:"post",
        url:"/upload",
        data:this.profile,
        headers:{
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(res=>{
        const {message,data} = res.data;
        if(message === "文件上传成功"){
          this.$axios({
            method:"post",
            url:"/user_update/" + localStorage.getItem("userId"),
            headers:{
              Authorization: "Bearer " + localStorage.getItem("token")
            },
            data:{
              ":id":localStorage.getItem("userId"),
              head_img:data.url
            }
          }).then(res=>{
            const {message,data} = res.data;
          })
        }
      })
    }
  }
};
</script>

<style lang = "less" scoped                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              >
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
      position: relative;
    img{
      width: 19.44vw;
      height: 19.44vw;
      border-radius: 50%;
    }
    .upload{
      opacity: 0;
      /*background-color: rgba(255,255,255,0);*/
      position: absolute;
      z-index: 0;
    }
  }

</style>