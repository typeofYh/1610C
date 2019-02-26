import App from './app.vue';  //.js .json
import Vue from 'vue';
import myTitle from './components/myTitle';
Vue.component('myTitle',myTitle);
new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    }
})