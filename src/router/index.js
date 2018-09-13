import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import search from '@/components/search'
import mine from '@/components/mine'

Vue.use(Router)

export default new Router({
    mode: 'history', // 路由模式
    routes: [{
        path: '*', // 重定向到首页
        redirect: '/index'
    }, {
        path: '/index',
        name: "index",
        component: index,
        alias: "/home" // 别名
    }, {
        path: '/search',
        name: "search",
        component: search
    }, {
        path: '/mine',
        name: "mine",
        component: mine
    }]
})
