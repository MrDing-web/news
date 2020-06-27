<template>
    <div class="content">
        <header>
            <div class="profile">
                <img v-if="headImg" :src="$axios.defaults.baseURL+headImg"/>
            </div>
            <div class="perInfo">
                <div class="nickName" v-cloak>
                    <span v-if="gender === 1"  class="iconfont iconxingbienan"></span>
                    <span v-if="gender === 0" class="iconfont iconxingbienv"></span>
                    {{nickname}}
                </div>
                <div class="date">{{createDate.split("T")[0]}}</div>
            </div>
            <span @click="toSetting" class="iconfont iconjiantou1"></span>
        </header>
        <div class="fengetiao"></div>
        <PersonalOpt
                myfocus="我的关注"
                focusper="关注的用户"
                @click.native="$router.push({path:'/myfocus'})"
        />
        <PersonalOpt myfocus="我的跟帖" focusper="跟帖 / 回复"/>
        <PersonalOpt myfocus="我的收藏" focusper="文章 / 视频"/>
        <PersonalOpt myfocus="设置" @click.native="toEdit"/>
        <div class="logout">
            <AuthBtn
                    btnVal="退出登录"
                    btnColor="rgb(204, 51, 0)"
                    @click.native="logout"
            />
        </div>
    </div>
</template>

<script>
    import PersonalOpt from "@/components/PersonalOpt.vue";
    import AuthBtn from "@/components/AuthBtn.vue";

    export default {
        components: {
            PersonalOpt,
            AuthBtn
        },
        data() {
            return {
                createDate: "2020-6-23",
                gender: '',
                headImg: "",
                nickname: ""
            };
        },
        mounted() {
            this.$axios({
                method: "get",
                url: "/user/" + localStorage.getItem("userId"),
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }).then(res => {
                const {message, data} = res.data;
                this.createDate = data.create_date;
                this.gender = data.gender;
                this.headImg = data.head_img;
                this.nickname = data.nickname;
            })
        },
        methods: {
            toEdit() {
                this.$router.push({path: "/editinfo"});
            },
            logout() {
                localStorage.removeItem("token");
                localStorage.removeItem("userId");
                this.$router.replace({path: "/login"})
            },
            toSetting(){
                this.$router.push("/editinfo")
            }
        }
    };
</script>

<style lang="less" scoped>
    [v-cloak]{
        display: none
    }
    header {
        height: 36.11vw;
        width: 100vw;
        display: flex;
        padding: 5.83vw;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;

        .profile {
            width: 19.44vw;
            height: 19.44vw;

            img {
                width: 19.44vw;
                height: 19.44vw;
                border-radius: 50%;
            }
        }

        .perInfo {
            flex: 1;
            color: #333;
            margin-left: 2.78vw;
            font-size: 3.89vw;

            div {
                margin: 2.78vw;
            }

            .date {
                color: rgb(160, 160, 160);
            }

            .iconxingbienv {
                color: #f13fbc;
                font-size: 3.89vw;
            }

            .iconxingbienan {
                color: #7cb4dc;
                font-size: 3.89vw;
            }
        }

        .iconjiantou1 {
            color: rgb(160, 160, 160);
            font-size: 5vw;
        }
    }

    .fengetiao {
        width: 100vw;
        height: 1.39vw;
        background-color: rgb(228, 228, 228);
    }

    .logout {
        // height: 100px;
        width: 100vw;
        position: absolute;
        bottom: 16.67vw;
    }
</style>