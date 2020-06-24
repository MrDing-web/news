import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Personal from '../views/personal/index.vue'
import EditInfo from '../views/personal/editInfo.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/register',
    name:'Register',
    component:Register
  },
  {
    path:'/personal',
    name:'Personal',
    component:Personal
  },
  {
    path:'/editinfo',
    name:'EditInfo',
    component:EditInfo
  }
]

const router = new VueRouter({
  routes
})

export default router
