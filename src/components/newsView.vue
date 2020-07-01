<template>
    <div>
        <div v-for="(newsItem,index) in list" :key="newsItem.id" @click="$router.push('/postdetail?id=' + newsItem.id)">
            <div v-if="newsItem.type === 1 && newsItem.cover.length < 3 && newsItem.cover.length > 0">
                <div class="singleImg">
                    <div class="left">
                        <div class="title">{{newsItem.title}}</div>
                        <div class="info">{{newsItem.user.nickname}} {{commentLen(index)}}跟帖</div>
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
                    {{newsItem.user.nickname}} {{commentLen(index)}}跟帖
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
                    {{newsItem.user.nickname}} {{commentLen(index)}}跟帖
                </div>
            </div>
        </div>


    </div>

</template>

<script>
    export default {
        name: "myCollection",
        props: ["list"],
        computed: {
            commentLen() {
                return function (i) {
                    if (this.list[i].comments) {
                        return this.list[i].comments.length
                    } else if (this.list[i].comment_length) {
                        return this.list[i].comment_length
                    } else {
                        return 0
                    }
                }



            }
        }
    }
</script>

<style lang="less" scoped>
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