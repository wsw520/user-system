import contents from './components/contents.vue'
import wenzhang from './components/wenzhang.vue'
import login from './components/login.vue'

export var routerjs = [
    {
      path:'/',
      component:contents	
    },
    {
      path:'/wz',
      component:wenzhang
    },
    {
      path:'/login',
      component:login
    },
    //路由重定向
    {
      path:'*',
      redirect: '/'
    }
]
