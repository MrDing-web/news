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
                <div class="num">1028</div>
            </div>
            <span class="iconfont iconshoucang"></span>
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
                placeholderText:'',
                flag:true
            }
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
                // console.log(postId);
                if(this.content.trim()===''){
                    this.$toast.fail("输入的内容不能为空！");
                    return false;
                }
                this.$axios({
                    url:"/post_comment/" + postId,
                    method:"post",
                    data:{
                        content: this.content
                    }
                }).then(res=>{
                    console.log(res);
                })
            },
            showTextarea(){
                this.flag = false;
                this.$nextTick(()=>{
                    this.$refs.textarea.focus();
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
        background: #f2f2f2;
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
                font-size: 22px;
            }

            .pinglunWrapper {
                position: relative;

                .num {
                    position: absolute;
                    font-size: 3.333vw;
                    background: red;
                    color: white;
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
                border-radius: 10px;
                padding: 12px;
                resize: none;
            }

            .btnSend {
                height: 26px;
                line-height: 26px;
                font-size: 12px;
                border-radius: 13px;
                padding: 0 16px;
                color: white;
                background: red;
                margin: 0 10px;
            }
        }
    }
</style>