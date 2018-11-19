<template>
    <div class="list-content">
        <better-scroll></better-scroll>
        <router-link class="list-item" tag="div" exact v-for="(item,index) in list" :key="index" :to="item.path">
            {{item.title}}
        </router-link>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      list: [
        {
          path: "/form",
          title: "from表单"
        },
        {
          path: "/lottery",
          title: "大转盘"
        },
        {
          path: "/better-scroll",
          title: "better-scroll"
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>
<style scoped lang="scss">
@import "@/assets/css/common.scss";
.list-item {
  margin-bottom: rem(16);
  font-size: 17px;
  padding: 10px 15px;
  background: #fff;
}
</style>
