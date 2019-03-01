import Vue from 'vue';
import app from './app.vue';
import "../static/js/flexible";



new Vue({
    el:'#app',
    render:createElement => createElement(app)
})