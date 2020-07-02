<template>
    <div>
        <!--        没有视频的新闻-->
        <div class="noVideo" v-if="detailPost.type === 1">
            <header>
                <span class="iconfont iconjiantou2" @click="$router.back()"></span>
                <span class="iconfont iconnew"></span>
                <button :class="detailPost.has_follow?'focus':'noFocus'" @click="isFocus">
                    {{detailPost.has_follow?'已关注':'关注作者'}}
                </button>
            </header>
            <div class="container">

                <p class="title">
                    {{detailPost.title}}
                </p>
                <div class="info">
                    <div class="nick">{{detailPost.user.nickname}}</div>
                    <div class="date">{{detailPost.user.create_date.split('T')[0]}}</div>
                </div>
                <div class="detail" v-html="detailPost.content"></div>
            </div>
        </div>

        <!--        有视频的文章-->
        <div class="hasVideo" v-if="detailPost.type === 2">
            <video src="https://video.pearvideo.com/mp4/adshort/20200421/cont-1670293-15098199_adpkg-ad_hd.mp4"
                   controls
                   :poster="detailPost.cover[0].url"
            ></video>
            <div class="info">
                <div class="profile">
                    <img :src="$axios.defaults.baseURL + detailPost.user.head_img" alt="">
                </div>
                <div class="nick">火星时报</div>
                <div @click="isFocus"
                     :class="detailPost.has_follow?'isfocus':'nofocus'">
                    {{detailPost.has_follow?'已关注':'关注作者'}}
                </div>
            </div>
            <div class="title">{{detailPost.title}}</div>
        </div>

        <div class="dianzanyufenxiang">
            <div class="good" @click="giveALike">
                <span ref="dianzan" :class="{
                    iconfont:true,
                    icondianzan:true,
                    redFinger:detailPost.has_like
                }"></span>
                {{detailPost.like_length}}
            </div>
            <div class="share">
                <span class="iconfont iconweixin"></span>
                微信
            </div>
        </div>
        <div class="fenge"></div>
        <Comment :commentList="item" v-for="item in commentList" :key="item.id"/>
        <div class="MoreCoomment">
            <div class="btn" @click="$router.push('/morecomment?id='+ $route.query.id)">
                更多跟帖
            </div>
        </div>

        <CommentInput/>

    </div>
</template>

<script>
    import Comment from "@/components/comment/index.vue"
    import CommentInput from "@/components/CommentInput.vue"

    export default {
        name: "PostDetail",
        components: {
            Comment,
            CommentInput
        },
        data() {
            return {
                detailPost: {},
                commentList: []
            }
        },
        created() {
            //发起ajax请求
            this.$axios({
                url: '/post/' + this.$route.query.id
            }).then(res => {
                this.detailPost = res.data.data;
                console.log(this.detailPost);
            });
            //获取评论详情
            this.$axios({
                url: "/post_comment/" + this.$route.query.id
            }).then(res => {
                if (res.data.data.length >= 3) {
                    res.data.data.length = 3;
                }
                this.commentList = res.data.data;
            })
        },
        methods: {
            isFocus() {
                //关注作者
                if (this.detailPost.has_follow) {
                    //已经关注 点击取关
                    this.$axios({
                        url: '/user_unfollow/' + this.detailPost.user.id
                    }).then(res => {
                        if (res.data.message === "取消关注成功") {
                            this.detailPost.has_follow = false;
                            this.$toast.success("取关成功");
                        }
                    })
                } else {
                    //还未关注 点击关注
                    this.$axios({
                        url: '/user_follows/' + this.detailPost.user.id
                    }).then(res => {
                        if (res.data.message === "关注成功") {
                            this.detailPost.has_follow = true;
                            this.$toast.success("关注成功");
                        }
                    })

                }
            },
            giveALike() {
                this.$axios({
                    url: "/post_like/" + this.detailPost.id
                }).then(res => {
                    console.log(res.data.message);
                    if (res.data.message === "点赞成功") {
                        this.$refs.dianzan.classList.add("redFinger");
                        this.detailPost.like_length++;
                    }
                    if (res.data.message === "取消成功") {
                        this.$refs.dianzan.classList.remove("redFinger")
                        this.detailPost.like_length--;
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    header {
        width: 100vw;
        height: 15.56vw;
        padding: 0 5.56vw;
        box-sizing: border-box;
        display: flex;
        align-items: center;

        span.iconjiantou2 {
            font-size: 3.89vw;
        }

        span.iconnew {
            flex: 1;
            font-size: 15vw;
            padding-left: 2.78vw;
        }

        .focus {
            width: 17.22vw;
            height: 7.22vw;
            line-height: 7.22vw;
            text-align: center;
            border-radius: 3.61vw;
            font-size: 3.89vw;
            background-color: #fff;
            border: 1px solid #ccc;
            color: #333;
        }

        .noFocus {
            width: 17.22vw;
            height: 7.22vw;
            line-height: 7.22vw;
            text-align: center;
            border-radius: 3.61vw;
            font-size: 3.89vw;
            color: #fff;
            border: none;
            background-color: #f00;
        }
    }

    .container {
        width: 100vw;
        height: auto;
        box-sizing: border-box;
        padding: 0 5.56vw;

        .title {
            font-weight: 900;
            font-size: 4.44vw;
            letter-spacing: 1px;
        }

        .info {
            width: 100vw;
            height: 8.33vw;
            display: flex;
            align-items: center;

            .nick {
                font-size: 3.33vw;
                color: #868686;
            }

            .date {
                flex: 1;
                font-size: 3.33vw;
                color: #868686;
                margin-left: 3.33vw;
            }
        }

        .detail {
            font-size: 3.89vw;
            letter-spacing: 1px;
            font-weight: 300;
            line-height: 7.22vw;

            /deep/ img {
                max-width: 100%;
            }
        }
    }

    .hasVideo {
        video {
            width: 100vw;
            height: auto;
        }

        .info {
            width: 100vw;
            height: 21.11vw;
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            padding: 5.56vw;

            .profile {
                width: 13.89vw;
                height: 13.89vw;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .nick {
                flex: 1;
                font-size: 3.89vw;
                color: #868686;
            }

            .isfocus {
                width: 17.22vw;
                height: 7.22vw;
                line-height: 7.22vw;
                text-align: center;
                background-color: #fff;
                border: 1px solid #ccc;
                color: #888;
                border-radius: 3.61vw;
                font-size: 3.89vw;
            }

            .nofocus {
                width: 17.22vw;
                height: 7.22vw;
                line-height: 7.22vw;
                text-align: center;
                border-radius: 3.61vw;
                font-size: 3.89vw;
                color: #fff;
                border: none;
                background-color: #f00;
            }
        }

        .title {
            box-sizing: border-box;
            padding: 2.78vw 5.56vw;
            color: #333;
        }
    }

    .dianzanyufenxiang {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100vw;
        height: 19.44vw;

        .good, .share {
            width: 22.22vw;
            height: 8.33vw;
            border: 1px solid #797979;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4.17vw;
        }

        .redFinger {
            color: red;
        }

        span {
            margin-right: 1.11vw;
        }

        span.iconweixin {
            color: #00c800;
        }
    }

    .fenge {
        width: 100vw;
        height: 1.11vw;
        background-color: #eee;
    }

    .MoreCoomment {
        height: 25vw;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 13.89vw;
        .btn {
            font-size: 3.89vw;
            color: #666;
            padding: 0 5.56vw;
            height: 8.89vw;
            line-height: 8.89vw;
            border: 1px solid #888;
            border-radius: 4.44vw;
        }
    }
</style>