import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
///home
///my
///shopcar
///type
export default new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/home"

        },
        {
            path:'/home',
            name:'home',
            component:()=>import('@/views/home.vue')
        }
        ,
        {
            path:'/my',
            name:'my',
            component:()=>import('@/views/my.vue')
        }
        ,
        {
            path:'/type',
            name:'type',
            component:()=>import('@/views/type.vue')
        }
        ,
        {
            path:'/shopcar',
            name:'shopcar',
            component:()=>import('@/views/shopcar.vue')
        }
    ]
})