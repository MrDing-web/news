<template>
    <div class="container">
        <header>
            <span @click="$router.back()" class="iconfont iconjiantou2"></span>
            <p>栏目管理</p>
        </header>
        <div class="delColumn">
            <p>点击删除以下频道</p>
            <div class="columnItem items">
                <span
                    v-for="(item,index) in abledList"
                    :key="item.id"
                    @click="del(index)"
                >{{item.name}}</span>
            </div>
        </div>
        <div class="addColumn">
            <p>点击添加以下频道</p>
            <div class="columnItem items">
                <span
                    v-for="(item,index) in disabledList"
                    :key="item.id"
                    @click="addItem(index)"
                >{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Column",
        data(){
            return{
                abledList:[],
                disabledList:[]
            }
        },
        created() {
            this.$axios({
                url:"/category"
            }).then(res=>{
                this.abledList = res.data.data;
            })
        },
        methods:{
            del(index){
                if(this.abledList.length<=3){
                    return;
                }
                this.disabledList.unshift(this.abledList[index]);
                this.abledList.splice(index,1);
            },
            addItem(index){
                this.abledList.push(this.disabledList[index]);
                this.disabledList.splice(index,1);
            }
        }
    }
</script>

<style lang="less" scoped>
    .container{
        width: 100vw;
        box-sizing: border-box;
        header {
            position: relative;
            height: 15.56vw;
            line-height: 15.56vw;
            box-sizing: border-box;
            p{
                text-align: center;
                font-size: 3.89vw;
                font-weight: 700;
            }

            span {
                position: absolute;
                padding-left: 4.44vw;
            }
        }
        p{
            font-size: 3.33vw;
            color: #666;
            margin-left: 4.44vw;
        }
        .items{
            margin: 2.78vw 0 6.67vw 0;
            display: flex;
            flex-wrap: wrap;
            /*align-items: stretch;*/
            /*height: 300px;*/
            span{
                width: 18.89vw;
                height: 10vw;
                line-height: 10vw;
                text-align: center;
                border: 1px solid #ccc;
                margin:1.39vw 0.83vw 1.39vw 4.44vw;
                font-size: 16px;
                color:#444;
            }
        }

    }

</style>