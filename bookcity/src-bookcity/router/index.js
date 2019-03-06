import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/bookcity'
    },
    {
      path: '/bookcity',
      name: 'bookcity',
      //运行时加载，会单独把当前模块打包成一个单独chunk数据 
      component: () => import('@/views/bookcity.vue')
    },
    {
      path: '/bookshelf',
      name: 'bookshelf',
      component: () => import('@/views/bookshelf.vue')
    },
    {
      path:'/search',
      name:'search',
      component: () => import('@/views/search.vue')
    },
    {
      path:'/detail/:bookid',
      name:'detail',
      props:true, //props属性为true时会把params所有的key当前props传递给视图组件{} ()=>{}
      component:()=>import('@/views/detail.vue')
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('@/views/login.vue')
    },
    {
      path:'/ready',
      beforeEnter(to,from,next){
        if(localStorage.getItem('user')){
          next();
        }else{
          next('/login');
        }
      },
      component:()=>import('@/views/ready.vue')
    }
  ]
})
