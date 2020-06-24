import Vue from 'vue';
import App from './App.vue';
import router from './router';
// 1. 导入组件库
import Vant from 'vant';
// 2. 引入组件 css 文件
import 'vant/lib/index.css';
import axios from "axios";
import { Toast } from "vant";
// 绑定到原型
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://127.0.0.1:3000"
// 3. 注册 vant ui 组件库的标签
Vue.use(Vant)

Vue.config.productionTip = false

// 添加路由守卫
router.beforeEach((to, from, next) => {
  // 是否有token
  const hasToken = localStorage.getItem("token");
  //是否是个人中心页
  if(to.path === '/personal'){
    if(!hasToken){
      // 没有token则跳转到登录页
      return router.push("/login")
    }
  }
  next();
})
// axios响应拦截器
axios.interceptors.response.use(res => {
  const {message, statusCode} = res.data;
  const errRegExp = /^4\d{2}$/;

  //错误提醒
  if(message && errRegExp.test(statusCode)){
    Toast.fail(message);
  }

  //用户信息失效
  if(message === "用户信息验证失败"){
    // 跳转到登录页
    router.push("/login");
  }


  return res;
})

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
