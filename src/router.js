import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/Shouye',
      component: () => import('../src/views/Shouye.vue'),
      // beforeEnter: (to, from, next) => {
      //   next(false)
      // }
      children:[
        {
          path:'Neinong',
          component:()=>import('../src/components/Neinong.vue')
      }],
    },
    {
      path:'/Denglu',
      component:() => import('../src/views/Denglu.vue'),
    },{
      path:'/Dengu',
      component:() => import('../src/components/Dengu.vue'),
      beforeEnter: (to, from, next) => {
        next(false)
      }
    },
    {
      path:"/Che",
      component:()=>import('../src/components/Che.vue')
    },
    {
      path:'/Gezhiliao',
      component:() => import('../src/views/Gezhiliao.vue'),
    },
    {
      path:'/Xiaoxi',
      component:() => import('../src/views/Xiaoxi.vue'),
    },
    {
      path:'/Dengshe',
      component:() => import('../src/views/Dengshe.vue'),
    },
    {
      path:'/Zonglan',
      component:() => import('../src/views/Zonglan.vue'),
    }
  ]
})
