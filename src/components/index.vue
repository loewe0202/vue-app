<template>
    <div style="padding: 15px;">
        <div>
            <span v-once>这里的值永远不会改变：{{ msg }}</span>
        </div>
        <div style="width: 3rem; border: 1px solid; textAlign: center; margin:15px auto; lineHeight: 44px; borderRadius: 4px;">
            <input type="button" value="去个人中心" @click="goMine">
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
    data() {
        return {
            msg: "测试内容~"
        };
    },
    methods: {
        goMine() {
            this.$router.push({
                path: "/mine"
            })
        }
    }
};

</script>
<style scoped>


</style>
