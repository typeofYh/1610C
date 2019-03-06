import App from './app';
import Vue from 'vue';
import router from './router'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper);
Vue.prototype.$bus = new Vue();
Vue.component('ElFooter',()=>import('@/components/elFooter.vue'));
new Vue({
    el:'#app',
    render:h=>h(App),
    router
})