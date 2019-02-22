import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import search from '@/components/search'
import mine from '@/components/mine'
import UserSettings from "@/components/userSettings"
import UserEmailsSubscriptions from "@/views/userEmailsSubscriptions"
import UserProfile from "@/views/userProfile"
import UserProfilePreview from "@/views/userProfilePreview"
import form from "@/components/form"
import lottery from "@/components/lottery"
import betterScroll from "@/components/better-scroll"

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
    }, {
        path: '/settings',
        component: UserSettings,
        // props: (route) => ({ // 将参数q以query传递给组件
        //     query: route.query.q
        // }),
        props: true,
        children: [{
            path: 'emails/:id?',
            component: UserEmailsSubscriptions
        }, {
            path: 'profile/:id?',
            components: {
                default: UserProfile,
                helper: UserProfilePreview
            }
        }]
    }, {
        path: '/form',
        component: form
    }, {
        path: '/lottery',
        component: lottery
    }, {
        path: '/better-scroll',
        component: betterScroll
    }]
})
