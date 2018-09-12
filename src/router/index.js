import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import search from '@/components/search'
import mine from '@/components/mine'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index
    }, {
        path: '/search',
        name: 'search',
        component: search
    }, {
        path: '/mine',
        name: 'mine',
        component: mine
    }]
})
