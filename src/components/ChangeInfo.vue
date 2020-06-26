<template>
    <van-cell-group>
        <van-field v-model="value" :type="textType" :label="optName" :placeholder="textPlaceholder"/>
    </van-cell-group>
</template>

<script>
    import Vue from 'vue';
    import {Field} from 'vant';

    Vue.use(Field);
    export default {
        name: "ChangeInfo",
        data() {
            return{
                value: ''
            }
        },
        props:['optName','textPlaceholder','textType'],
        watch:{
            value(newVal){
                this.$emit("newInfo",newVal)
            }
        }
    }
</script>

<style lang="less" scoped>

</style>