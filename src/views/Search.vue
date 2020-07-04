<template>
    <div class="content">
        <header>
            <span class="iconfont iconjiantou2" @click="back"></span>
            <div class="input">
                <span class="iconfont iconsearch" v-if="text === ''"></span>
                <input type="text" v-model="text" @keydown.enter="searchItem">
            </div>
            <button @click="searchItem">搜索</button>
        </header>
        <div class="main"  v-if="!this.searchRes.length">
            <div class="history">
                <p class="des">历史记录</p>
                <div class="content">
                    <span
                        v-for="(item,index) in historyList"
                        :key="index"
                        @click="clickHistory(item)"
                    >{{item}}
                    </span>
                </div>
            </div>
            <div class="line"></div>
            <div class="hotSearch">
                <p class="des">热门搜索</p>
                <div class="content">
                    <span v-for="(item,index) in topSearch" :key="index">{{item}}</span>
                </div>
            </div>
        </div>
        <NewsView :list="searchRes"/>
    </div>
</template>

<script>
    import NewsView from "@/components/newsView"
    export default {
        name: "Search",
        components: {
            NewsView
        },
        data() {
            return {
                text:'',
                historyList:[],
                topSearch:[],
                searchRes:[]
            }
        },
        watch:{
            historyList(){
                this.testLen();
            }
        },
        created() {
            const history = localStorage.getItem("historyList");
            if(history){
                this.historyList = JSON.parse(history);
                this.testLen();
            }else{
                localStorage.setItem("historyList",JSON.stringify([]));
            }
            this.$axios({
                url: "/post_search_recommend"
            }).then(res=>{
                this.topSearch = res.data.data;
            })
        },
        methods: {
            testLen(){
                if(this.historyList.length>10){
                    this.historyList.length = 10;
                }
            },
            back(){
                if(this.searchRes.length===0){
                    this.$router.back();
                }else{
                    this.searchRes = [];
                }
            },
            searchItem(){
                const text = this.text.trim();
                if(text === "") return this.$toast.fail("输入的内容不能为空");
                const index = this.historyList.indexOf(text);
                //让最新的搜索永远保持在最前面 且不重复
                if(index !== -1) this.historyList.splice(index,1);
                this.historyList.unshift(text);
                localStorage.setItem("historyList",JSON.stringify(this.historyList));
                this.text = '';
                this.$axios({
                    url:"/post_search",
                    params:{
                        keyword:text
                    }
                }).then(res=>{
                    this.searchRes = res.data.data;
                })
            },
            clickHistory(item){
                this.text = item;
                this.searchItem();
            }
        }
    }
</script>

<style lang="less" scoped>
    header {
        width: 100vw;
        height: 13.89vw;
        background-color: #fff;
        display: flex;
        padding: 6px 16px 0 16px;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;

        .iconjiantou2 {
            font-size: 16px;
        }

        .input {
            position: relative;
            display: flex;
            align-items: center;

            span.iconsearch {
                position: absolute;
                left: 34px;
                font-size: 16px;
                color: #ccc;
            }

            input {
                flex: 1;
                margin: 0 16px;
                height: 36px;
                line-height: 36px;
                border-radius: 20px;
                border: 1px solid #ccc;
                padding: 4px 16px;
            }
        }

        button {
            background-color: #fff;
            border: none;
            font-size: 16px;
            color: #333;
        }
    }

    .main {
        padding: 0 4.44vw;
        box-sizing: border-box;
        .line{
            width: 328px;
            height: 0;
            border: 1px solid #eee;
            margin: 16px 0;
        }
        .des {
            font-weight: bolder;
            font-size: 16px;
            height: 30px;
            line-height: 30px;
            color: #444;
        }

        .content {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 10px;
            justify-content: flex-start;
            
            span {
                font-size: 14px;
                color: #333;
                margin:6px 27px;
            }
        }

    }
</style>
