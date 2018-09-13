<template>
    <div id="app">
        <div class="flex-row-center fixed-bottom tabBar">
            <router-link v-for="item in tabBar" :to="item.path" :key="this" tag="div">{{item.text}}</router-link>
        </div>
        <router-view class="page"></router-view>
    </div>
</template>
<script>
import "./assets/css/common.css";
export default {
    name: "App",
    data() {
        return {
            tabBar: [{
                path: "index",
                text: '首页'
            }, {
                path: "search",
                text: '发现'
            }, {
                path: "mine",
                text: '我的'
            }]
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
