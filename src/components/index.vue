<template>
    <div>
        <span v-once>这里的值永远不会改变：{{ msg }}</span>
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
    methods: {}
};

</script>
<style scoped>


</style>
