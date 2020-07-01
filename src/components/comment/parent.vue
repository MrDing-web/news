<template>
    <div>
        <Parent :replyContent="replyContent.parent" v-if="replyContent.parent"/>
        <div class="parentComment">
            <div class="info">
                <div class="user">
                    {{replyContent.user.nickname}}
                    2 小时前
                </div>
                <div class="btnReply">
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
        props: ["replyContent"]
    }
</script>

<style lang="less" scoped>
    .parentComment {
        font-size: 14px;
        color: #888;
        padding: 10px;
        border: 1px solid #e4e4e4;
    }

    .info {
        display: flex;
        justify-content: space-between;

        .btnReply {
            font-size: 12px;
        }
    }

    .content {
        padding: 10px 0;
    }
</style>