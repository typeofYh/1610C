import Vue from 'vue';
import App from './app';
import axios from 'axios';
let ajax = axios.create({
    // type:''
})
//响应
ajax.interceptors.response.use(res=>{
    return res.data;
})
Vue.prototype.$ajax = ajax;
Vue.prototype.$bus = new Vue();

new Vue({
    el:'#app',
    render:h=>h(App)
})

