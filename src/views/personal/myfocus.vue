<template>
    <div class="container">
        <header>
            <span @click="$router.back()" class="iconfont iconjiantou2"></span>
            <p>我的关注</p>
        </header>
        <ul>
            <li class="focusItem" v-for="item in focusList" :key="item.id">
                <div class="profile">
                    <img v-if="item.head_img" :src="$axios.defaults.baseURL + item.head_img" alt="">
                </div>
                <div class="content">
                    <div class="title">{{item.nickname}}</div>
                    <div class="date">{{item.create_date.split("T")[0]}}</div>
                </div>
                <div v-if="item.isFollow" class="unFocus" @click="unFocus(item.id,item)">取消关注</div>
                <div v-else class="focus" @click="focus(item.id,item)">关注</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "myfocus",
        data(){
            return{
               focusList:[]
            }
        },
        created() {
            this.loadPage();
        },
        methods:{
            loadPage(){
                this.$axios({
                    url:"/user_follows",
                    method:"get"
                }).then(res => {
                    const newData = res.data.data.map(item=>{
                        return {...item,isFollow:true}
                    })
                    this.focusList = newData;
                })
            },
            unFocus(id,item){
                this.$axios({
                    url:"/user_unfollow/" + id,
                    method: "get"
                }).then(res=>{
                    // this.loadPage();
                    item.isFollow = false;
                })
            },
            focus(id,item){
                this.$axios({
                    url:'/user_follows/' + id,
                    method:"get",
                    ":id":id
                }).then(res=>{
                    item.isFollow = true;
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    header {
        position: relative;
        height: 15.56vw;
        line-height: 15.56vw;

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
    .focusItem {
        width: 100vw;
        height: 22.22vw;
        box-sizing: border-box;
        padding: 5.56vw 4.44vw;
        border-bottom: 1px solid #e4e4e4;
        display: flex;
        justify-content: space-between;
        .profile {
            img {
                width: 11.11vw;
                height: 11.11vw;
                object-fit: cover;
                border-radius: 50%;
            }
        }
    }
    .content{
        flex: 1;
        margin-left: 5.56vw;
        .title{
            font-size: 4.44vw;
            color:rgb(50,50,50);
        }
        .date{
            font-size: 3.89vw;
            color: #777;
            padding: 1.11vw 0;
        }
    }
    .unFocus {
        width: 19.44vw;
        height: 8.33vw;
        line-height: 8.33vw;
        border-radius: 4.17vw;
        font-size: 3.33vw;
        background-color: #ccc;
        text-align: center;
        color: #fff;
    }
    .focus{
        width: 19.44vw;
        height: 8.33vw;
        line-height: 8.33vw;
        border-radius: 4.17vw;
        font-size: 3.33vw;
        background-color: #f00;
        text-align: center;
        color: #fff;
    }
</style>