<template>
    <div @click="add">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
    </div>
</template>

<script>
    export default {
        name: "test",
        methods:{
            add(e){
                const id = e.target.innerHTML;
                this.$axios({
                    url:"/user_follows/" + id
                }).then(res=>{
                    console.log(res);
                })
            }
        }
    }
</script>

<style lang="less" scoped>
button{
    width: 50px;
    height: 20px;
    display: block;
}
</style>