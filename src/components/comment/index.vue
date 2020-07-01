<template>
    <div>
        <div class="mainComment">
            <div class="info">
                <img src="@/assets/pq.jpg" alt="">
                <div class="user">
                    <div class="name">{{commentList.user.nickname}}</div>
                    <div class="time">2小时</div>
                </div>
                <div class="btnReply">
                    回复
                </div>
            </div>

            <Parent :replyContent="commentList.parent" v-if="commentList.parent"/>

            <div class="content">
                {{commentList.content}}
            </div>
        </div>
    </div>
</template>

<script>
    import Parent from  "./parent.vue";
    export default {
        name: "index",
        props:["commentList"],
        components:{
            Parent
        }
    }
</script>

<style lang="less" scoped>
    .mainComment {
        font-size: 20px;
        color: #333;
        padding: 10px;
        border-bottom: 1px solid #e4e4e4;
    }
    .info {
        display: flex;
        align-items: center;
        padding: 20px 0;
        img {
            width: 35px;
            height: 35px;
            object-fit: cover;
            border-radius: 50%;
        }
        .user {
            padding: 0 10px;
            flex: 1;
            font-size: 14px;
            .time {
                font-size: 12px;
                color: #888;
            }
        }
        .btnReply {
            font-size: 14px;
            color: #666;
        }
    }
    .content {
        padding: 20px 0;
        font-size: 16px;
    }
</style>