<template>
    <div>
        <div class="page">
            <div class="page__bd">
                <div>
                    <mt-cell class="page-part" title="当前选中" :value="selected" />
                </div>
                <mt-tabbar fixed v-model="selected">
                    <mt-tab-item id="index">
                        <img slot="icon" src="../assets/logo.png"> 首页
                    </mt-tab-item>
                    <mt-tab-item id="search">
                        <img slot="icon" src="../assets/logo.png"> 发现
                    </mt-tab-item>
                    <mt-tab-item id="mine">
                        <img slot="icon" src="../assets/logo.png"> 我的
                    </mt-tab-item>
                </mt-tabbar>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
export default {
    name: 'index',
    computed: {
        ...mapGetters([

        ])
    },
    mounted() {

    },
    methods: {
        selected() {
            console.log(111)
        },
        getUserInfo() {

        },
        addHandle() {

        },
        ...mapMutations({

        })
    }
}

</script>
<style scoped lang="less">
@rem: 1/75rem;

</style>
