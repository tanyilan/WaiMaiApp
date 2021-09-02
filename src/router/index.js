// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '@/pages/MSite/MSite'
import Search from '@/pages/Search/Search'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Login from '@/pages/Login/Login'
//声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
  //所有路由
  routes: [
    {
      path: '/msite',
      name:'msite',
      component: MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      name:'search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      name:'order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      name:'profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/login',
      name:'login',
      component: Login
    },
    {
      path:'/',
      redirect:'/msite' //重定向
    }

  ]
})
