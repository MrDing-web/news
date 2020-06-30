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
        <van-tabs v-model="active" sticky swipeable>
            <van-tab class="categoryList" v-for="item in categoryList" :key="item.id" :title="item.name" >
                <van-list
                        v-model="item.loading"
                        :finished="item.finished"
                        finished-text="我也是有底线的！"
                        @load="loadMorePost"
                        :immediate-check="false"
                >
                    <NewsView :list="item.postList"/>
                </van-list>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
    import NewsView from '@/components/newsView.vue';
    export default {
        components:{
            NewsView
        },
        data() {
            return {
                active: 0,
                categoryList: [],
                postId: '0',
                loading: false
            }
        },
        methods: {
            getNews() {
                //获取当前页面
                const currentCategory = this.categoryList[this.active];
                this.$axios({
                    url: "/post",
                    method: "get",
                    params: {
                        category: this.postId,
                        pageIndex: currentCategory.pageIndex,
                        pageSize: currentCategory.pageSize
                    }
                }).then(res => {
                    // console.log(currentCategory);
                    currentCategory.postList = [...currentCategory.postList,...res.data.data];
                    // 这里加载完了文章列表数据, 然后需要手动将当前栏目的加载状态改回 false 也就是没有正在加载
                    // 这样子才能在下次拉到底的时候重新触发加载下一页
                    currentCategory.loading = false;

                    // 最后如果发现数据已经到了尽头, 应该告诉组件已经完毕, 禁止再次发送请求
                    // 什么时候我们知道已经加载完了全部数据
                    // 我们设置了每页长度, 正常情况下数据库应该返回对应的数据,
                    // 如果有一次, 返回的数据数量比规定页面长度小, 那么知道数据库已经见底
                    if (res.data.data.length < currentCategory.pageSize) {
                        currentCategory.finished = true;
                    }
                })
            },
            loadMorePost(){
                // 读取更多文章, 实际上
                // 就是将当前栏目的 pageIndex 加一
                // 发送文章获取请求即可
                const currentCategory = this.categoryList[this.active]
                currentCategory.pageIndex += 1
                this.getNews();
            }
        },
        watch: {
            //获取栏目的id
            //难点
            active() {
                this.postId = this.categoryList[this.active].id;
                if (this.categoryList[this.active].postList.length === 0) {
                    this.getNews();
                }
            },
        },
        created() {
            this.$axios({
                url: "/category",
                method: "get"
            }).then(res => {
                this.categoryList = res.data.data.map(category => {
                    return {
                        ...category,
                        postList: [],
                        //当前页码
                        pageIndex:1,
                        //每页新闻数
                        pageSize:5,
                        //是否正在加载
                        loading:false,
                        //是否已经加载完毕
                        finished:false
                    }
                })
                this.getNews();
            });

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
        /*position: sticky;*/
        /*top: 0;*/
        /*z-index: 999;*/

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
