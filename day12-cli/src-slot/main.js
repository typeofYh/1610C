import Vue from 'vue';
import App from './app';
import MyHeader from '@/components/header';
Vue.component('MyHeader',MyHeader);
new Vue({
    el:'#app',
    render:h=>h(App)
})