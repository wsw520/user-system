// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {routerjs} from './routerjs'

Vue.config.productionTip = false

Vue.use(elementui)
Vue.use(VueResource)

Vue.use(VueRouter)
//配置路由
var router=new VueRouter({
     routes:routerjs,
     mode:'history'
});


//路由全局守卫
router.beforeEach((to, from, next) => {
  	if (to.path === '/' || to.path === '/wz') { 
  	   //获取本地用户名
	   var name = sessionStorage.getItem("uname");
       if(name){
       	  next();
       }else{
       	  next({path:'/login'})
       }

    }
    else {
       next()
    }
})








//全局注册一个Vue作为事件中心作为组件通讯
Vue.prototype.bus = new Vue()



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
