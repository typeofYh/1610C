import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import VueLazyLoad from 'vue-lazyload';

Vue.use(VueLazyLoad,{
  loading:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551761632694&di=15ea92f599bdd095f1454962ada50080&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0195f55972f18ca8012193a342310a.gif',
});
Vue.config.productionTip = false
Vue.prototype.$ajax = axios;
Vue.component('MyHeader',()=>import('@/components/header.vue'));
Vue.component('DlList',()=>import('@/components/dllist.vue'));


import './css/common.css';
import 'swiper/dist/css/swiper.min.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
