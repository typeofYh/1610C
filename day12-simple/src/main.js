import Vue from 'vue';
import App from './app';
import router from './router'; //路由配置对象
new Vue({
    el:'#app',
    router,
    render:createElement=>createElement(App)
})

//