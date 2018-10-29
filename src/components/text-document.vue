<template>
    <div @click="changeName">{{ title }}</div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
    props:{
        title: {
            type: String,
        }
    },
    methods: {
        changeName(event) {
            this.$emit('update:title', '发现');
        }
    }
};
</script>
<style scoped>
</style>
