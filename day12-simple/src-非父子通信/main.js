import Vue from "vue";
import App from './app.vue';
Vue.prototype.$bus = new Vue();
new Vue({
    el:'#app',
    // template:'<div><App /> <parents /> </div>',
    // components:{
    //     App,
    //     parents
    // }
    render:h=>h(App)
})