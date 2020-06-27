<template>
    <div class="homeContent">
        <header>
            <div class="homeLogo">
                <span class="iconfont iconnew"></span>
            </div>
            <div class="search">
                <span class="iconfont iconsearch"></span>
                <input type="text" readonly value="搜索新闻" @click="toSearch">
            </div>
            <div class="personal">
                <span class="iconfont iconwode" @click="toPersonal"></span>
            </div>
        </header>
        <van-tabs :active="active" bind:change="onChange">
            <van-tab v-for="item in categoryList" :key="item.id" :title="item.name">
                <ul>
                    <li>
                        <div class="singleImg">
                            <div class="left">
                                <div class="title">林志玲穿透视黑纱裙米兰看秀,腹部微隆显孕味</div>
                                <div class="info">火星时报 52跟帖</div>
                            </div>
                            <div class="right">
                                <img src="../../dist/img/logo.82b9c7a5.png" alt="">
                            </div>
                        </div>
                    </li>
                </ul>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>

    export default {
        components: {},
        data() {
            return {
                active: 1,
                categoryList: []
            }
        },
        methods: {
            toPersonal() {
                this.$router.push({path: "/personal"});
            },
            toSearch() {
                this.$router.push({path: "/search"});
            }
        },
        created() {
            this.$axios({
                url: "/category",
                method: "get"
            }).then(res => {
                const data = res.data.data;
                this.categoryList = data;
            })
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

    .singleImg {
        box-sizing: border-box;
        width: 360px;
        height: 104px;
        padding: 20px 10px;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: center;
        align-items: center;
        .left{
            .title{
                font-size: 16px;
                color:rgb(50,50,50);
            }
            .info{
               color: #888;
                font-size: 12px;
                margin-top: 8px;
            }
        }
        .right {
            width: 100px;
            height: 60px;
            border: 1px solid #777;
            img {
                width: 100px;
                height: 60px;
                object-fit: cover;
            }
        }
    }

</style>
