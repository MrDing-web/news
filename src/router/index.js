import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Personal from '@/views/personal/index.vue'
import EditInfo from '@/views/personal/editInfo.vue'
import Search from '@/views/Search.vue'
import Myfocus from "@/views/personal/myfocus.vue"
import MyCollect from "@/views/personal/mycollect.vue"
import Test from "@/views/test.vue"
import PostDetail from "@/views/PostDetail.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/test",
        component: Test
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/postdetail',
        name: 'PostDetail',
        component: PostDetail
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/personal',
        name: 'Personal',
        component: Personal
    },
    {
        path: '/editinfo',
        name: 'EditInfo',
        component: EditInfo
    },
    {
        path: '/collect',
        name: 'myCollection',
        component: MyCollect
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    },
    {
        path: '/myfocus',
        name: 'myfocus',
        component: Myfocus
    }
]

const router = new VueRouter({
    routes
})

export default router
