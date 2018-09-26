<template>
    <div id="app">
        <div class="flex-row-center fixed-bottom tabBar">
            <router-link v-for="(item,index) in tabBar" :to="item.path" :key="index" tag="div">{{item.text}}</router-link>
        </div>
        <transition :name="transitionName" mode="out-in">
            <router-view class="page"></router-view>
        </transition>
    </div>
</template>
<script>
import "@/assets/css/typo.css";
import "@/assets/css/common.css";
export default {
    name: "App",
    data() {
        return {
            transitionName: "slide-left",
            tabBar: [{
                    path: "/index",
                    text: "首页"
                },
                {
                    path: "/search",
                    text: "发现"
                },
                {
                    path: "/settings",
                    text: "我的"
                }
            ]
        };
    },
    watch: {
        $route(to, from) {
            const toDepth = to.path.split("/").length;
            const fromDepth = from.path.split("/").length;
            this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
        }
    }
};

</script>
<style scoped lang="scss">
@import "@/assets/css/common.scss";
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.router-link-active {
    color: #0fe9f0;
}

.tabBar {
    height: rem(88);
    font-size: 17px;
    background: #fff;
    justify-content: space-around;
}

.page {
    padding-bottom: rem(88);
}

</style>
