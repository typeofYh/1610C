import Vue from 'vue';
import VueRouter from 'vue-router';  //vue插件
import Home from '../views/home';
import Discover from '../views/discover';
import Order from '../views/order';
import My from '../views/my';
import Search from '../views/search';
import Shop from '../views/shop';


//使用插件是要通过use方法来注册插件
Vue.use(VueRouter);
const router =  new VueRouter({
    mode:'history', //hash默认  #  
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:'/discover',
            component:Discover
        },
        {
            path:'/order',
            name:'order',
            component:Order
        },
        {
            path:'/prefile',
            name:'prefile',
            component:My
        },
        {
            path:'/search',
            name:'search',
            component:Search
        },
        {
            path:'/shop',
            beforeEnter(to,from,next){  //路由守卫
                next('/');
            }
        },
        {
            path:'/shop/:shopid', //:动态路由 params
            name:'shop',
            component:Shop,
            children:[
                {
                    path:'rx',
                    component:{
                        template:'<div>热销</div>'
                    }
                },
                {
                    path:'yh',
                    component:{
                        template:'<div>优惠</div>'
                    }
                }
            ]
        },
        {
            path:'/login',
            component:{
                template:`<div>登陆</div>`
            }
        }
    ]
})


const islogin = ['prefile','order'];
//判断是否登陆，登陆才能访问 不能登陆调到登陆界面
//全局守卫函数
router.beforeEach((to,from,next)=>{
    if(islogin.includes(to.name)){
        if(localStorage.getItem('userid')){
            next();
        }else{
            next('/login');
        }
    }else{
        next();
    }
})

export default router;