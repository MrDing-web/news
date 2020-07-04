<template>
    <div class="commentWrapper">
        <div class="enable" v-if="!flag">
            <textarea
                    rows="3"
                    ref="textarea"
                    @blur="hideTextarea"
                    v-model="content"
                    :placeholder="placeholderText"
            ></textarea>
            <div class="btnSend" @click="send">发送</div>
        </div>

        <div class="disable" v-if="flag">
            <input type="text" @focus="showTextarea"  :placeholder="placeholderText" />
            <div class="pinglunWrapper">
                <span class="iconfont iconpinglun-"></span>
                <div class="num" @click="$router.push('/morecomment?id='+ $route.query.id)">{{commentCount}}</div>
            </div>
            <span class="iconfont iconshoucang" @click="shoucang"></span>
            <span class="iconfont iconfenxiang"></span>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ComponentInput.vue",
        data() {
            return {
                content: '',
                flag:true
            }
        },
        props:["parentInfo","commentCount"],
        computed:{
                placeholderText() {
                    if (this.parentInfo.nickname) {
                        return "回复 @ " + this.parentInfo.nickname
                    }else {
                        return '写评论'
                    }
            },
        },
        methods: {
            hideTextarea(){
                setTimeout(()=>{
                    this.flag = true;
                },50)

            },
            send(){
                //获取文章id
                const postId = this.$route.query.id;
                let data = {
                    content: this.content
                }
                if (this.parentInfo.id) {
                    data.parent_id = this.parentInfo.id
                }
                if(this.content.trim()===''){
                    this.$toast.fail("输入的内容不能为空！");
                    return false;
                }
                this.$axios({
                    url:"/post_comment/" + postId,
                    method:"post",
                    data
                }).then(res=>{
                    console.log(res);
                    if (res.data.message === '评论发布成功') {
                        // 优化1. 提醒父页面更新评论数据
                        this.$emit('reloadComment')
                        this.content = ''
                    }
                })
            },
            showTextarea(){
                this.flag = false;
                this.$nextTick(()=>{
                    this.$refs.textarea.focus();
                })
            },
            shoucang(e){
                this.$axios({
                    url:"/post_star/" + this.$route.query.id
                }).then(res=>{
                    if(res.data.message==="收藏成功"){
                        e.target.style.color="#CD853F";
                    }
                    if(res.data.message==="取消成功"){
                        e.target.style.color="#000";
                    }
                    this.$toast.success(res.data.message);
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .commentWrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: #f2f2f2;
        width: 100%;
        padding: 2.778vw;
        box-sizing: border-box;

        .disable {
            display: flex;
            justify-content: space-between;

            input {
                width: 50vw;
                height: 8.333vw;
                line-height: 8.333vw;
                background-color: #d7d7d7;
                border: none;
                outline: none;
                border-radius: 4.167vw;
                padding: 0 4.167vw;
                box-sizing: border-box;
            }

            .iconfont {
                font-size: 6.11vw;
            }

            .pinglunWrapper {
                position: relative;

                .num {
                    position: absolute;
                    font-size: 3.333vw;
                    background: red;
                    color: white;
                    width: 8.33vw;
                    text-align: center;
                    line-height: 3.889vw;
                    height: 3.889vw;
                    border-radius: 1.944vw;
                    padding: 0 1.111vw;
                    top: -1.389vw;
                    left: 1.667vw;
                }
            }
        }

        .enable {
            display: flex;
            align-items: flex-end;

            textarea {
                flex: 1;
                background-color: #d7d7d7;
                border: none;
                outline: none;
                border-radius: 2.78vw;
                padding: 3.33vw;
                resize: none;
            }

            .btnSend {
                height: 7.22vw;
                line-height: 7.22vw;
                font-size: 3.33vw;
                border-radius: 3.61vw;
                padding: 0 4.44vw;
                color: white;
                background: red;
                margin: 0 2.78vw;
            }
        }
    }
</style>