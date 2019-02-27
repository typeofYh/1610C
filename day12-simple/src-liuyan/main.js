import Vue from 'vue';
import App from './app';
import myHeader from './components/myHeader';
import './css/common.css'
Vue.component('myHeader',myHeader);
let vm = new Vue({
    el:'#app',
    render(createElement){
        return createElement(App,{
            props:{
                title:'1610C'
            }
        });
    }
});

// console.log(vm.$render('h3'));



