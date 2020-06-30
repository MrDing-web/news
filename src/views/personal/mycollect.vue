<template>
    <div>
        <header>
            <span @click="$router.back()" class="iconfont iconjiantou2"></span>
            <p>我的收藏</p>
        </header>
        <van-list>
            <NewsView :list="collectList"/>
        </van-list>

    </div>

</template>

<script>
    import NewsView from '@/components/newsView.vue';

    export default {
        name: "myCollection",
        components: {
            NewsView
        },
        data() {
            return {
                collectList: []
            }
        },
        created() {
            this.$axios({
                url: '/user_star'
            }).then(res => {
                this.collectList = res.data.data;
            })
        }
    }
</script>

<style lang="less" scoped>
    header {
        position: relative;
        height: 15.56vw;
        line-height: 15.56vw;

        span {
            position: absolute;
            margin-left: 4.44vw;
        }

        p {
            text-align: center;
            font-size: 3.89vw;
            font-weight: 700;
        }
    }

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