<template>
    <div @click="add">
        <button>阿信</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>10</button>
        <button>11</button>
        <button>12</button>
        <button>13</button>
        <button>14</button>
        <button>15</button>
        <button>16</button>
        <button>17</button>
        <button>18</button>
        <button>19</button>
        <button>20</button>
    </div>
</template>

<script>
    export default {
        name: "test",
        methods:{
            add(e){
                const id = e.target.innerHTML;
                this.$axios({
                    url:"/post_search_recommend",
                    params:{
                        keyword:id
                    }
                }).then(res=>{
                    console.log(res);
                })
            }
        }
    }
</script>

<style lang="less" scoped>
button{
    float: left;
    width: 22.22vw;
    height: 8.89vw;
    display: block;
}
</style>