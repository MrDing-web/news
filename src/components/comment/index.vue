<template>
    <div>
        <div class="mainComment">
            <div class="info">
                <img src="@/assets/pq.jpg" alt="">
                <div class="user">
                    <div class="name">{{commentList.user.nickname}}</div>
                    <div class="time">2小时</div>
                </div>
                <div class="btnReply" @click="callReply">
                    回复
                </div>
            </div>

            <Parent
                :parentDepth="parentDepth"
                :replyContent="commentList.parent"
                v-if="commentList.parent"
                @parentCallReply="parentCallReply"
            />

            <div class="content">
                {{commentList.content}}
            </div>
        </div>
    </div>
</template>

<script>
    import Parent from  "./parent.vue";
    export default {
        props:["commentList"],
        components:{
            Parent
        },
        methods:{
            callReply() {
                this.$emit('callReply', {
                    id: this.commentList.id,
                    nickname: this.commentList.user.nickname
                })
            },
            parentCallReply(parentInfo){
                this.$emit('callReply', parentInfo);
            }
        },
        computed:{
            parentDepth(){
                let depth = 0;
                let current = this.commentList
                while (current.parent) {
                    // 每当当前节点有 parent
                    // 就把深度加一, 并且将parent 设为下次的起点
                    depth += 1;
                    current = current.parent
                }
                return depth
            }
        }
    }
</script>

<style lang="less" scoped>
    .mainComment {
        font-size: 5.56vw;
        color: #333;
        padding: 2.78vw;
        border-bottom: 1px solid #e4e4e4;
    }
    .info {
        display: flex;
        align-items: center;
        padding: 5.56vw 0;
        img {
            width: 9.72vw;
            height: 9.72vw;
            object-fit: cover;
            border-radius: 50%;
        }
        .user {
            padding: 0 2.78vw;
            flex: 1;
            font-size: 3.89vw;
            .time {
                font-size: 3.33vw;
                color: #888;
            }
        }
        .btnReply {
            font-size: 3.89vw;
            color: #666;
        }
    }
    .content {
        padding: 5.56vw 0;
        font-size: 4.44vw;
    }
</style>