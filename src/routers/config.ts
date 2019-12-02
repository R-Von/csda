// export 
// const 
import { routerItem } from '@/interface'

export const basicRouterMap:routerItem[] = [
  {
    path:'/404',
    meta:{
      name:'nomatch',
    },
    component:()=>import(/* webpackChunkName: "user" */ '@/views/Error/404.vue')
  }
  // {
  //   path:'*',
  //   meta:{
  //     name:'notfound',
  //   },
  //   redirect: '/404'
  // }
]


export const asyncRouterMap:routerItem[] = [
  {
    path:'/',
    name:'首页',
    meta:{title:'首页',name:'index'},
    redirect: '/sign/index',
    children:[
      // {
      //   path:'/dashboard',
      //   name:'dashboard',
      //   component:RouteViews,
      //   redirect: '/dashboard/workplace',
      //   meta:{title:'仪表盘',permission:['dashboard'],name:'dashboard'},
      //   children:[
      //     {
      //       path:'/dashboard/workplace',
      //       name:'workplace',
      //       component:()=>import(/* webpackChunkName: "user" */ '@/views/Dashboard/Workplace.vue'),
      //       meta:{ title:'工作台',permission:['dashboard'],name:'workplace'}
      //     }
      //   ]
      // },
    ]
  },
  {
    path:'*',
    meta:{
      name:'notfound',
    },
    redirect: '/404'
  }
]