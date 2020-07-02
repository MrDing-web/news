<template>
    <div>
        <header>
            <span @click="$router.back()" class="iconfont iconjiantou2"></span>
            <p>精彩跟帖</p>
        </header>
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="我也是有底线的"
        >
            <Comment :commentList="item" v-for="item in commentList" :key="item.id"/>
        </van-list>
    </div>
</template>

<script>
    import Comment from "@/components/comment/index.vue"
    export default {
        name: "MoreComment",
        components:{
            Comment
        },
        data(){
            return{
                commentList:[],
                loading:false,
                finished:true
            }
        },
        created() {
            this.$axios({
                url:"/post_comment/" + this.$route.query.id
            }).then(res=>{
                this.commentList = res.data.data;
            })
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
</style>