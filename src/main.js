// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'lib-flexible';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store';

// import betterScroll from './components/better-scroll'
// Vue.component('better-scroll', betterScroll); //初始化全局组件


Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(MintUI);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
});
