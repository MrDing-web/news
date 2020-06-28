<template>
    <div class="homeContent">
        <header>
            <div class="homeLogo">
                <span class="iconfont iconnew"></span>
            </div>
            <div class="search">
                <span class="iconfont iconsearch"></span>
                <input type="text" readonly value="搜索新闻" @click="$router.push({path:'/search'})">
            </div>
            <div class="personal">
                <span class="iconfont iconwode" @click="$router.push({path:'/personal'})"></span>
            </div>
        </header>
        <van-tabs v-model="active">
            <van-tab class="categoryList" v-for="item in categoryList" :key="item.id" :title="item.name">
                <div v-for="newsItem in newsList" :key="newsItem.id">


                    <div v-if="newsItem.type === 1 && newsItem.cover.length < 3 && newsItem.cover.length > 0">
                        <div class="singleImg">
                            <div class="left">
                                <div class="title">{{newsItem.title}}</div>
                                <div class="info">{{newsItem.user.nickname}} {{newsItem.comment_length}}跟帖</div>
                            </div>
                            <div class="right">
                                <img :src="newsItem.cover[0].url|fixPicUrl" alt="">
                            </div>
                        </div>
                    </div>


                    <div class="multiImg" v-if="newsItem.type === 1 && newsItem.cover.length >=3">
                        <div class="title">
                            {{newsItem.title}}
                        </div>
                        <div class="imgs">
                            <img :src="newsItem.cover[0].url" alt="">
                            <img :src="newsItem.cover[1].url" alt="">
                            <img :src="newsItem.cover[2].url" alt="">
                        </div>
                        <div class="info">
                            {{newsItem.user.nickname}} {{newsItem.comment_length}}跟帖
                        </div>
                    </div>


                    <div class="video" v-if="newsItem.type === 2 && newsItem.cover.length >= 1">
                        <div class="title">{{newsItem.title}}</div>
                        <div class="playArea">
                            <img :src="newsItem.cover[0].url" alt="" class="playCover">
                            <div class="playBtn">
                                <span class="iconfont iconshipin"></span>
                            </div>
                        </div>
                        <div class="info">
                            {{newsItem.user.nickname}} {{newsItem.comment_length}}跟帖
                        </div>
                    </div>


                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                active: 0,
                categoryList: [],
                postId: '0',
                newsList: []
            }
        },
        methods: {
            getNews() {
                this.$axios({
                    url: "/post",
                    method: "get",
                    params: {
                        category: this.postId
                    }
                }).then(res => {
                    const data = res.data.data;
                    this.newsList = data;
                })
            }
        },
        watch: {
            //获取栏目的id
            //难点
            active() {
                this.postId = this.categoryList[this.active].id;
                this.getNews();
            },
        },
        created() {
            this.$axios({
                url: "/category",
                method: "get"
            }).then(res => {
                const data = res.data.data;
                this.categoryList = data;
            });
            this.getNews();
        }
    };
</script>
<style lang="less" scoped>
    header {
        height: 13.61vw;
        width: 100vw;
        background-color: rgb(255, 0, 0);
        display: flex;
        justify-content: center;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 999;

        .homeLogo {
            color: rgb(255, 255, 255);
            width: 13.61vw;
            height: 13.61vw;
            margin-left: 5.56vw;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            span.iconnew {
                display: block;
                width: 13.61vw;
                height: 13.61vw;
                line-height: 13.61vw;
                font-size: 13.61vw;
            }
        }

        .search {
            flex: 1;
            width: 58.33vw;
            height: 9.44vw;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 4.44vw;

            span {
                position: absolute;
                top: 4.44vw;
                color: #fff;
                font-size: 5vw;
                left: 38.89vw;
            }

            input {
                width: 58.33vw;
                height: 9.44vw;
                border-radius: 4.72vw;
                border: none;
                padding: 1.39vw 5.56vw;
                box-sizing: border-box;
                user-focus: none;
                color: rgb(250, 250, 250);
                text-align: center;
                font-size: 3.89vw;
                background-color: rgba(255, 255, 255, 0.6);
            }
        }

        .personal {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            text-align: right;
            margin-right: 5.56vw;
            color: #fff;

            span {
                font-size: 6.11vw;
            }
        }
    }

    /*.van-tabs__wrap{*/
    /*    color: red;*/
    /*    background-color: #fff !important;*/
    /*}*/

    .singleImg {
        box-sizing: border-box;
        width: 100vw;
        height: 28.89vw;
        padding: 5.56vw 2.78vw;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
            .title {
                font-size: 4.44vw;
                color: rgb(50, 50, 50);
            }

            .info {
                color: #888;
                font-size: 3.33vw;
                margin-top: 2.22vw;
            }
        }

        .right {
            width: 27.78vw;
            height: 16.67vw;

            img {
                width: 27.78vw;
                height: 16.67vw;
                object-fit: cover;
            }
        }
    }

    .multiImg {
        padding: 4.44vw 2.78vw;
        border-bottom: 1px solid #e4e4e4;

        .title {
            font-size: 4.44vw;
            color: rgb(50, 50, 50);
        }

        .imgs {
            display: flex;
            justify-content: space-between;
            padding: 1.11vw 0 2.22vw;

            img {
                width: 33%;
                height: 16.67vw;
                object-fit: cover;
            }
        }

        .info {
            font-size: 3.33vw;
            color: #888;
        }
    }

    .video {
        display: flex;
        flex-direction: column;
        padding: 4.44vw 2.78vw;
        border-bottom: 1px solid #e4e4e4;
        width: 100vw;
        height: 69.44vw;
        box-sizing: border-box;
        justify-content: space-between;


        .title {
            font-size: 4.44vw;
            color: rgb(50, 50, 50);
        }

        .playArea {
            flex: 1;
            display: flex;
            /*padding: 20px;*/
            box-sizing: border-box;
            justify-content: center;
            align-items: center;
            position: relative;

            .playCover {
                position: absolute;
                width: 100%;
                height: 90%;
                opacity: 0.6;
            }

            .playBtn {
                width: 12.78vw;
                height: 12.78vw;
                line-height: 12.78vw;
                text-align: center;
                background-color: #aaa;
                border-radius: 50%;
                color: #fff;
                z-index: 3;

                span {
                    font-size: 10vw;
                }
            }
        }

        .info {
            font-size: 3.33vw;
            color: #888;
        }
    }
</style>
