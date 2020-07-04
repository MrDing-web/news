<template>
    <div>
        <div class="parentComment">
        <Parent
                :replyContent="replyContent.parent"
                v-if="replyContent.parent"
                @parentCallReply="diguiCallReply"
                :parentDepth="parentDepth-1"
        />
            <div class="info">
                <div class="user">
                    {{parentDepth}} {{replyContent.user.nickname}}
                    2 小时前
                </div>
                <div class="btnReply" @click="parentCallReply">
                    回复
                </div>
            </div>

            <div class="content">
                {{replyContent.content}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Parent",
        props: ["replyContent", 'parentDepth'],
        methods:{
            parentCallReply(){
                this.$emit("parentCallReply",{
                    id:this.replyContent.id,
                    nickname:this.replyContent.user.nickname
                })
            },
            diguiCallReply(parentInfo){
                this.$emit('parentCallReply', parentInfo)
            }
        }
    }
</script>

<style lang="less" scoped>
    .parentComment {
        font-size: 3.89vw;
        color: #888;
        padding: 2.78vw;
        border: 1px solid #e4e4e4;
    }

    .info {
        display: flex;
        justify-content: space-between;

        .btnReply {
            font-size: 3.33vw;
        }
    }

    .content {
        padding: 2.78vw 0;
    }
</style>
