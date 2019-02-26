import Vue from 'vue';
import App from './app';
import './css/common.css'
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



