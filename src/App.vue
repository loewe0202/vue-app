<template>
    <div id="app">
        <div class="flex-row-center fixed-bottom tabBar">
            <router-link v-for="item in tabBar" :to="item.path" :key="this" tag="div">{{item.text}}</router-link>
        </div>
        <transition :name="transitionName" mode="out-in">
            <router-view class="page"></router-view>
        </transition>
    </div>
</template>
<script>
import "./assets/css/common.css";
export default {
    name: "App",
    data() {
        return {
            transitionName: 'slide-left',
            tabBar: [{
                path: "/index",
                text: '首页'
            }, {
                path: "/search",
                text: '发现'
            }, {
                path: "/settings",
                text: '我的'
            }]
        }
    },
    // dynamically set transition based on route change
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }
};

</script>
<style scoped lang="less">
@rem: 1/75rem;
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.router-link-active {
    color: #0FE9F0;
}

.tabBar {
    height: 88*@rem;
    background: #fff;
    justify-content: space-around;
}

</style>
