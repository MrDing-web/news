<template>
    <div>


        <header>
            <span @click="$router.back()" class="iconfont iconjiantou2"></span>
            <p>我的跟帖</p>
        </header>
        <!-- 列表容器 -->
        <div class="list">
            <!-- 每个 item 都是一条评论 -->
            <!-- 我的评论里面有两种样式
            第一种直接回复文章没有 parent -->
            <!-- 第二种 回复别人的评论, 带有 parent  -->
            <div class="item" v-for="item in commentList" :key="item.id">
                <div class="date">{{item.create_date.split('T')[0]}}</div>

                <div class="parentWrapper" v-if="item.parent">
                    <div class="info">
                        回复: {{item.parent.user.nickname}}
                    </div>
                    <div class="content">
                        {{item.parent.content}}
                    </div>
                </div>

                <div class="content">
                    {{item.content}}
                </div>
                <div class="origin" @click="toArticle(item.post.id)">
                    原文: {{item.post.title}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Thread",
        data() {
            return {
                commentList: []
            }
        },
        created() {
            this.$axios({
                url: '/user_comments'
            }).then(res => {
                console.log(res.data);
                this.commentList = res.data.data;
            })
        },
        methods:{
            toArticle(id){
                this.$router.push("/postdetail?id=" + id)
            }
        }
    }
</script>

<style lang="less" scoped>
    header {
        position: relative;
        height: 15.56vw;
        line-height: 15.56vw;
        box-sizing: border-box;

        p {
            text-align: center;
            font-size: 3.89vw;
            font-weight: 700;
        }

        span {
            position: absolute;
            padding-left: 4.44vw;
        }
    }

    .item {
        padding: 10px 20px;
        border-bottom: 1px solid #e4e4e4;

        .date {
            font-size: 14px;
            color: #888;
            padding-bottom: 10px;
        }

        .content {
            font-size: 16px;
            color: #333;
        }

        .origin {
            padding-top: 10px;
            font-size: 14px;
            color: #999;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .parentWrapper {
            background: #e4e4e4;
            padding: 10px;
            color: #888;
            margin-bottom: 10px;

            .info {
                font-size: 14px;
            }

            .content {
                margin-top: 10px;
                color: #888;
            }
        }
    }
</style>