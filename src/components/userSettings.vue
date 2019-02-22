<template>
    <div class="us">
        <!-- <h2>user settings {{query}}</h2> -->
        <h2>user settings {{id}}</h2>
        <userSettingsNav/>
        <transition-group name="slide-left" mode="out-in">
            <router-view class="us__content" key="us"></router-view>
            <router-view name="helper" class="us__content us__content--helper" key="us2"></router-view>
        </transition-group>
    </div>
</template>
<script>
import "@/assets/css/userSettings.scss"; // 导入css样式
import userSettingsNav from "@/views/userSettingsNav";

export default {
    name: "userSettings",
    // props: ['query'],
    props: ['id'],
    components: {
        userSettingsNav
    },
    beforeRouteEnter(to, from, next) {
        next();
    }
}

</script>
<style>
/* @import "../assets/css/userSettings"; */

</style>
